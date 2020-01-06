import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
import { ChatPillAsk } from "./bot/ChatPillAsk";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS, httpClient } from "../../constants";
import chat from "../../img/chat.svg";
class BotSection extends Component {
  roomName = undefined;
  roomId;
  wASessionId;
  isDemo = false;
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      msg: "",
      lastWAUserIndex: -1,
      shouldConnectApi: true
    };
  }
  componentDidMount() {
    this.roomName = localStorage.getItem("roomName");
    this.roomId = localStorage.getItem("roomId");
    this.wASessionId = localStorage.getItem("wASessionId");
    this.initializeSocketIo();
  }

  handleMessageChange = event => {
    let eve = { ...event };
    this.setState({
      msg: eve.target.value
    });
  };
  initializeSocketIo = async () => {
    // let scope = this;
    this.socket = socketIO.connect(API_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });
    this.socket.on("connect", function () {
      console.debug("connected to server");
    });
    let messages = [];
    let time = new Date().getTime();

    if (this.roomId) {
      let chatsResp = await httpClient("chats", "POST", {
        roomId: this.roomId
      });
      let lastWAUserIndex = -1;
      if (chatsResp.success === true) {
        let data = chatsResp.data.reverse();
        data.forEach((x, i) => {
          if (x.TEXT) {
            if (x.USER === "WATSON" || x.USER === "AGENT") {
              lastWAUserIndex = i;
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
            lastWAUserIndex
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
        this.isAgent = false;
        if (response.intent === "agent") {
          this.isAgent = true;

          setTimeout(() => {
            if (this.isAgent) {
              let messages = [...this.state.messages];
              messages.push({
                user: "WA",
                message: "Our agents are not available. We will call back.",
                type: "text",
                options: []
              });
              this.setState({
                messages: messages
              }, this.scrollToBottom)
            }
          }, 3 * 60 * 1000)
        }
        if (response.type === "demo" && response.intent === "exit_demo") {
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
            roomId: this.roomId,
          };
          this.socket.emit(SOCKET_PATHS.CONNECT, data);
        } else {
          let data = response.data;
          if (data && Array.isArray(data)) {
            messages = [...this.state.messages];
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
        }
      } else if (eventName === "AGENT") {
        this.isAgent = false;
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

  send = () => {
    if (this.state.msg && this.state.msg.length > 0) {
      let data = {
        comment: this.state.msg,
        wASessionId: this.wASessionId,
        roomName: this.roomName,
        roomId: this.roomId,
        type: this.isDemo ? "demo" : "chat",
        demoProperty: this.isDemo ? localStorage.getItem("demoProperty") : undefined
      };
      this.sendMessage(data, this.state.msg);
    }
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
    this.sendMessage(data, option.value.input.text);
  };

  sendMessage = (data, message) => {
    this.socket.emit(SOCKET_PATHS.CONNECT, data);
    let messages = [...this.state.messages];
    messages.push({ user: "ME", message: message, type: "text" });
    this.setState(
      {
        messages,
        msg: ""
      },
      this.scrollToBottom
    );
  };

  scrollToBottom = () => {
    setTimeout(function () {
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
          <Row>
            <Col className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-grow-1">
                <img
                  src={logo}
                  alt="incede.ai"
                  style={{ width: "10em", height: "5em" }}
                />
              </div>
              <div className="d-flex justify-content-center flex-grow-1">
                <p className="lead text-white">
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
                    <ChatPill
                      isLastWAUser={i === this.state.lastWAUserIndex}
                      right={x.user === "ME"}
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
                  </div>
                ))}
              </section>
              <ChatPillAsk
                handleKeyDown={this.handleKeyDown}
                value={this.state.msg}
                onChange={this.handleMessageChange}
                placeholder="Type here"
                onClick={this.send}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BotSection;
