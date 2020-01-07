import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
import { ChatPillAsk } from "./bot/ChatPillAsk";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS, httpClient } from "../../constants";
import chat from "../../img/chat.svg";
import ChatLocation from "../ChatLocation";
class BotSection extends Component {
  roomName = undefined;
  roomId;
  wASessionId;
  isDemo = false;
  isAgentPending = false;
  agentTimeOut = 3 * 60 * 1000;
  waTimeOut = 1 * 60 * 60 * 1000;
  waCreatedTime;
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      msg: "",
      lastWAUserIndex: -1,
      shouldConnectApi: true,
      isLoading: false
    };
  }
  componentDidMount() {
    console.log("component did mount");
    this.roomName = localStorage.getItem("roomName");
    this.roomId = localStorage.getItem("roomId");
    this.wASessionId = localStorage.getItem("wASessionId");
    this.waCreatedTime = localStorage.getItem("waCreatedTime");
    this.initializeSocketIo();
  }

  handleMessageChange = event => {
    let eve = { ...event };
    this.setState({
      msg: eve.target.value
    });
  };

  checkWASession = () => {
    this.waCreatedTime = localStorage.getItem("waCreatedTime");
    let isInWaSession = true;
    if (!this.waCreatedTime) {
      isInWaSession = false;
      localStorage.clear();
    } else {
      let now = new Date().getTime();
      let createdTime = new Date(Number(this.waCreatedTime)).getTime();
      if (now - createdTime >= this.waTimeOut) {
        isInWaSession = false;
      }
    }
    if (isInWaSession === false) {
      this.roomName = undefined;
      this.roomId = undefined;
      this.wASessionId = undefined;
    }
  };

  initializeSocketIo = async () => {
    // let scope = this;
    this.socket = socketIO.connect(API_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });
    this.socket.on("connect", function() {
      console.debug("connected to server");
    });
    let messages = [];
    let time = new Date().getTime();

    this.checkWASession();

    if (this.roomId) {
      this.setState({
        isLoading: true
      });
      let chatsResp = await httpClient("chats", "POST", {
        roomId: this.roomId
      });
      let lastWAUserIndex = -1;
      if (chatsResp.success === true) {
        let data = chatsResp.data.reverse();
        let chatRepeatIndex = -1;
        data.forEach((x, i) => {
          if (x.TEXT) {
            chatRepeatIndex++;
            if (x.USER === "WATSON" || x.USER === "AGENT") {
              lastWAUserIndex = chatRepeatIndex;
            }
            messages.push({
              user:
                x.USER === "WATSON" ? "WA" : x.USER === "AGENT" ? "AG" : "ME",
              message: x.options ? x.title : x.TEXT,
              type: x.options ? "options" : "text",
              options: x.options || [],
              intent: x.intent
            });
          }
        });
        this.setState(
          {
            messages: messages,
            lastWAUserIndex,
            isLoading: false
          },
          this.scrollToBottom
        );
      }
    }

    this.socket.emit(SOCKET_PATHS.CONNECT, {
      payload: "",
      roomName: this.roomName ? this.roomName : "room" + time,
      roomId: this.roomId ? this.roomId : undefined,
      wASessionId: this.wASessionId ? this.wASessionId : undefined
    });

    this.socket.on(SOCKET_PATHS.BOT_RESPONSE, (eventName, response) => {
      if (eventName === "SERVER_CONNECT") {
        console.info("Bot connected, waiting for bot to wake up");
        return;
      }
      if (response.newRoom === true && eventName === "WATSON") {
        if (response.sessionId) {
          if (response.type === "demo") {
            localStorage.setItem("demoWASessionId", response.sessionId);
            localStorage.setItem("demoRoomId", response.roomId);
            localStorage.setItem("demoRoomName", response.roomName);
            this.isDemo = true;
          } else {
            this.isDemo = false;
            localStorage.setItem("waCreatedTime", new Date().getTime());
            localStorage.setItem("wASessionId", response.sessionId);
            localStorage.setItem("roomId", response.roomId);
            localStorage.setItem("roomName", response.roomName);
          }
          this.roomName = response.roomName;
          this.roomId = response.roomId;
          this.wASessionId = response.sessionId;
        } else {
          console.error(response);
        }
      }

      if (eventName === "WATSON") {
        this.isAgentPending = false;
        if (response.intent === "location") {
          let messages = [...this.state.messages];
          messages.push({
            user: "WA",
            message: "",
            type: "location",
            options: []
          });
          this.setState(
            {
              messages: messages
            },
            this.scrollToBottom
          );
        } else if (response.intent === "agent") {
          this.isAgentPending = true;
          this.pushWAMessage(response);
          setTimeout(() => {
            if (this.isAgentPending) {
              this.sendCustomMessage("agent not available", false);
            }
          }, this.agentTimeOut);
        } else if (
          response.type === "demo" &&
          response.intent === "exit_demo"
        ) {
          localStorage.removeItem("demoRoomName");
          localStorage.removeItem("demoRoomId");
          localStorage.removeItem("demoWASessionId");
          localStorage.removeItem("demoProperty");
          this.roomId = localStorage.getItem("roomId");
          this.roomName = localStorage.getItem("roomName");
          this.wASessionId = localStorage.getItem("wASessionId");
          this.isDemo = false;
          let data = {
            comment: "demo done",
            wASessionId: this.wASessionId,
            user: "user",
            roomName: this.roomName,
            roomId: this.roomId
          };
          this.socket.emit(SOCKET_PATHS.CONNECT, data);
        } else {
          this.pushWAMessage(response);
        }
      } else if (eventName === "AGENT") {
        this.isAgentPending = false;
        let data = response.data;
        let messages = this.state.messages;
        let lastWAUserIndex = this.state.lastWAUserIndex;
        if (data) {
          messages.push({
            user: "AG",
            message: response.data
          });
          lastWAUserIndex = messages.length - 1;
          this.setState(
            { messages: messages, lastWAUserIndex },
            this.scrollToBottom
          );
        }
      } else {
        console.warn(eventName, response);
      }
    });
  };

  pushWAMessage = response => {
    let data = response.data;
    if (data && Array.isArray(data)) {
      let messages = [...this.state.messages];
      let lastWAUserIndex = this.state.lastWAUserIndex;
      data.forEach(x => {
        if (x.text || x.title) {
          messages.push({
            user: "WA",
            message: x.options ? x.title : x.text,
            type: x.options ? "options" : "text",
            options: x.options || [],
            intent: response.intent
          });
          lastWAUserIndex = messages.length - 1;
        }
      });
      this.setState(
        {
          messages,
          lastWAUserIndex
        },
        this.scrollToBottom
      );
    }
  };

  send = () => {
    if (this.state.msg && this.state.msg.length > 0) {
      this.sendCustomMessage(this.state.msg, true);
    }
  };

  sendCustomMessage = (msg, shouldAddToMessages) => {
    this.checkWASession();
    let data = {
      comment: msg,
      wASessionId: this.wASessionId,
      roomName: this.roomName,
      roomId: this.roomId,
      type: this.isDemo ? "demo" : "chat",
      demoProperty: this.isDemo
        ? localStorage.getItem("demoProperty")
        : undefined
    };
    this.sendMessage(data, msg, shouldAddToMessages);
  };

  handleOnOptionClick = (message, optionIndex) => {
    let option = message.options[optionIndex];
    let type = "chat";
    if (message.intent && message.intent.toLowerCase() === "demo") {
      type = "demo";
      this.wASessionId = undefined;
      this.roomId = undefined;
      this.roomName = "room" + new Date().getTime();
      localStorage.setItem("demoProperty", option.value.input.text);
    }

    let data = {
      comment: option.value.input.text,
      wASessionId: this.wASessionId,
      user: "user",
      roomName: this.roomName,
      roomId: this.roomId,
      type: type,
      demoProperty: type === "demo" ? option.value.input.text : undefined
    };
    this.sendMessage(data, option.value.input.text, true);
  };

  sendMessage = (data, message, shouldAddToMessages) => {
    this.socket.emit(SOCKET_PATHS.CONNECT, data);
    let messages = [...this.state.messages];
    if (shouldAddToMessages) {
      messages.push({ user: "ME", message: message, type: "text" });
    }
    this.setState(
      {
        messages,
        msg: ""
      },
      this.scrollToBottom
    );
  };

  scrollToBottom = () => {
    setTimeout(function() {
      var objDiv = document.getElementById("messages_container");
      if (objDiv) {
        objDiv.scrollTop = objDiv.scrollHeight;
      }
    }, 1000);
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.send();
    }
  };

  render() {
    return (
      <section className="bot">
        <div onClick={this.props.toggle} className="bot-menu-btn right">
          <img src={chat} alt="chat" />
          <div className="d-none d-md-block">Explore our site</div>
        </div>
        <Container>
          <Row className="chat-header">
            <Col className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-grow-1">
                <img
                  src={logo}
                  alt="incede.ai"
                  style={{ width: "10em", height: "5em" }}
                />
              </div>
              <div className="d-flex justify-content-center flex-grow-1">
                <p className="lead text-white d-none d-md-block">
                  Incede provides outcome-based AI solutions and offers
                </p>
              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="bot-container">
              <section
                id="messages_container"
                className="chat d-flex flex-column flex-grow-1"
              >
                {this.state.messages.map((x, i) => (
                  <div key={i}>
                    {x.type === "location" ? (
                      <ChatLocation />
                    ) : (
                      <React.Fragment>
                        <ChatPill
                          isLastWAUser={i === this.state.lastWAUserIndex}
                          right={x.user === "ME"}
                          user={x.user}
                          text={x.message}
                        />
                        {i === this.state.messages.length - 1 &&
                          x.type === "options" && (
                            <div className="options-container">
                              <Row>
                                {x.options.map((option, index) => (
                                  <Col
                                    key={index}
                                    lg={4}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    onClick={() =>
                                      this.handleOnOptionClick(x, index)
                                    }
                                  >
                                    <div className="wa-option">
                                      <p>{option.label}</p>
                                    </div>
                                  </Col>
                                ))}
                              </Row>
                            </div>
                          )}
                      </React.Fragment>
                    )}
                  </div>
                ))}
                {this.state.isLoading && (
                  <div>
                    <ChatPill
                      isLastWAUser={false}
                      right={false}
                      user={"WA"}
                      text="Loading..."
                    />
                  </div>
                )}
              </section>
              {/* <ChatPillAsk
                handleKeyDown={this.handleKeyDown}
                value={this.state.msg}
                onChange={this.handleMessageChange}
                placeholder="Type here"
                onClick={this.send}
              /> */}
            </Col>
          </Row>
        </Container>
        <ChatPillAsk
          handleKeyDown={this.handleKeyDown}
          value={this.state.msg}
          onChange={this.handleMessageChange}
          placeholder="Type here"
          onClick={this.send}
        />
      </section>
    );
  }
}

export default BotSection;
