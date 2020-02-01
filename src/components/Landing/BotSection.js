import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col, Button, Spinner } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
import { ChatPillAsk } from "./bot/ChatPillAsk";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS, httpClient, DEMO_SOCKET_URL } from "../../constants";
import chat from "../../img/chat.svg";
import ChatLocation from "../ChatLocation";
import CallBackForm from "./bot/CallBackForm";
import DiscoverySearchResults from "./bot/DiscoverySearchResults";
import { Loading } from "../ReuseableComponents";
import ConfirmModal from "../ConfirmModal";
class BotSection extends Component {
  roomName = undefined;
  roomId;
  wASessionId;
  isAgentPending = false;
  agentTimeOut = 30 * 1000;
  waTimeOut = 1 * 60 * 60 * 1000; // one hour
  waCreatedTime;
  currentIntent;
  demoSocket = undefined
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      msg: "",
      isDemo: false,
      lastWAUserIndex: -1,
      shouldConnectApi: true,
      isLoading: false,
      isLoading: false,
      modal: {
        isOpen: false
      }
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
      this.resetLocalStorage();
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
    } else {
      if (this.state.isDemo) {
        this.roomName = localStorage.getItem("demoRoomName");
        this.roomId = localStorage.getItem("demoRoomId");
        this.wASessionId = localStorage.getItem("demoWASessionId");
      } else {
        this.roomName = localStorage.getItem("roomName");
        this.roomId = localStorage.getItem("roomId");
        this.wASessionId = localStorage.getItem("wASessionId");
      }
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
    this.socket.on("connect", function () {
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
        let data = chatsResp.data
          .reverse()
          .filter(x => ["welcome_back"].indexOf(x.TEXT) === -1);
        let chatRepeatIndex = -1;
        data.forEach((x, i) => {
          switch (x.TYPE) {
            case "text":
            case "options":
              chatRepeatIndex++;
              if (x.USER === "WATSON" || x.USER === "AGENT") {
                lastWAUserIndex = chatRepeatIndex;
              }
              if (x.title || x.TEXT) {
                messages.push({
                  user:
                    x.USER === "WATSON"
                      ? "WA"
                      : x.USER === "AGENT"
                        ? "AG"
                        : "ME",
                  message: x.options ? x.title : x.TEXT,
                  type: x.options ? "options" : "text",
                  options: x.TYPE === "options" ? JSON.parse(x.OPTIONS) : [],
                  intent: x.intent
                });
              }
              break;
            case "location":
              chatRepeatIndex++;
              if (x.USER === "WATSON" || x.USER === "AGENT") {
                lastWAUserIndex = chatRepeatIndex;
              }
              messages.push({
                user: "WA",
                message: "",
                type: "location",
                options: []
              });
              break;
            case "callback":
              chatRepeatIndex++;
              if (x.USER === "WATSON" || x.USER === "AGENT") {
                lastWAUserIndex = chatRepeatIndex;
              }
              messages.push({ user: "ME", message: "", type: "callback_form" });
              break;
          }
        });
        this.setState(
          {
            messages: messages,
            lastWAUserIndex,
            isLoading: false
          },
          () => {
            this.scrollToBottom();
            this.sendCustomMessage("welcome_back", false);
          }
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
            this.setState({
              isDemo: true
            });
          } else {
            this.setState({
              isDemo: false
            });
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

          let lastWAUserIndex = messages.length - 1;
          this.setState(
            {
              messages: messages,
              lastWAUserIndex,
              isLoading: false
            },
            () => {
              let data = [...response.data]
              data.splice(0, 1);
              response.data = data;
              this.pushWAMessage(response);
            }
          );
        } else if (response.intent === "agent") {
          this.isAgentPending = true;
          this.pushWAMessage(response);
          setTimeout(() => {
            if (this.isAgentPending) {
              this.setState({ isLoading: false });
              this.sendCustomMessage("agent_not_available", false);
            }
          }, this.agentTimeOut);
          setTimeout(() => {
            if (this.isAgentPending) {
              let messages = [...this.state.messages];
              messages.push({
                user: "WA",
                message: "Our agents are busy. Please hold on.",
                type: "text",
                options: [],
                intent: undefined
              });
              let lastWAUserIndex = messages.length - 1;
              this.setState({
                messages,
                lastWAUserIndex,
                isLoading: false
              });
            }
          }, this.agentTimeOut / 3);
        } else if (
          response.type === "demo" &&
          response.intent === "exit_demo"
        ) {
          this.resetLocalStorage(true)
          this.roomId = localStorage.getItem("roomId");
          this.roomName = localStorage.getItem("roomName");
          this.wASessionId = localStorage.getItem("wASessionId");
          this.setState({
            isDemo: false
          });
          let data = {
            comment: "completed demo",
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
            { messages: messages, lastWAUserIndex, isLoading: false },
            this.scrollToBottom
          );
        }
      } else {
        console.warn(eventName, response);
      }
    });
  };

  resetLocalStorage = (isDemo) => {
    localStorage.removeItem("demoProperty");
    localStorage.removeItem("demoWASessionId");
    localStorage.removeItem("demoRoomId");
    localStorage.removeItem("demoRoomName");
    if (isDemo !== true) {
      localStorage.removeItem("waCreatedTime");
      localStorage.removeItem("wASessionId");
      localStorage.removeItem("roomId");
      localStorage.removeItem("roomName");
    }
  }

  pushWAMessage = response => {
    let data = response.data;
    if (data && Array.isArray(data)) {
      let messages = [...this.state.messages];
      let lastWAUserIndex = this.state.lastWAUserIndex;
      data.forEach(x => {
        if (x.response_type === "search") {
          if (x.results && x.results.length > 0) {
            messages.push({
              user: "WA",
              message: x.header,
              data: x.results,
              type: "search-result"
            });
            lastWAUserIndex = messages.length - 1;
          } else {
            messages.push({
              user: "WA",
              message: "I didn't understand. Please try again",
              type: "text"
            });
            lastWAUserIndex = messages.length - 1;
          }
        } else if (x.response_type === "suggestion") {
          if (x.suggestions && x.suggestions.length > 0 && x.suggestions[0].output && x.suggestions[0].output.generic && x.suggestions[0].output.generic.length > 0) {
            this.pushWAMessage({ data: x.suggestions[0].output.generic })
          }
        } else if (x.text || x.title) {
          messages.push({
            user: "WA",
            message: x.options ? x.title : x.text,
            type: x.options ? "options" : "text",
            options: x.options || [],
            intent: response.intent
          });
          if (
            x.text ===
            "Sure thing. I need some basic information from you to setup a call with our agent"
          ) {
            messages.push({ user: "ME", message: "", type: "callback_form" });
          }
          lastWAUserIndex = messages.length - 1;
        }
      });
      this.setState(
        {
          messages,
          lastWAUserIndex,
          isLoading: false
        },
        this.scrollToBottom
      );
    }
  };

  send = () => {
    if (this.state.msg && this.state.msg.length > 0) {
      this.sendCustomMessage(this.state.msg, true);
      this.setState({ isLoading: true });
    }
  };

  exitWADemo = () => {
    this.resetLocalStorage(true);
    this.demoSocket = undefined;
    // setTimeout(() => {
    this.setState({
      isDemo: false
    }, () => {

      this.sendCustomMessage("exit_demo", false);
    });
    // }, 500);
  };

  resetDemo = () => {
    this.resetLocalStorage();
    this.demoSocket = undefined;
    this.sendCustomMessage("", true);
    this.setState({
      messages: []
    });
  };

  sendCustomMessage = (msg, shouldAddToMessages) => {
    this.checkWASession();
    let data = {
      comment: msg,
      wASessionId: this.wASessionId,
      roomName: this.roomName ? this.roomName : "room" + new Date().getTime(),
      roomId: this.roomId,
      type: this.state.isDemo ? "demo" : "chat",
      demoProperty: this.state.isDemo
        ? localStorage.getItem("demoProperty")
        : undefined
    };
    this.sendMessage(data, msg, shouldAddToMessages);
  };

  handleOnOptionClick = (message, optionIndex) => {
    let option = message.options[optionIndex];
    let type = "chat";
    if (
      message.intent &&
      message.intent.toLowerCase() === "demo" &&
      option.value.input.text.toLowerCase() !== "cancel"
    ) {
      type = "demo";
      this.wASessionId = undefined;
      this.roomId = undefined;
      this.setState({
        isDemo: true
      })
      this.roomName = "room" + new Date().getTime();
      localStorage.setItem("demoProperty", option.value.input.text);
    }
    let comment = option.value.input.text;
    if (message.intent === "demo_done" && comment.toLowerCase() === "yes") {
      comment = "talk to agent";
    }

    let isAdd = true
    // if (message.message && message.message.toLowerCase() == "contact us" && comment.toLowerCase() === "cancel") {
    //   comment = "What we do";
    //   isAdd = false
    // }
    let data = {
      comment: comment,
      wASessionId: this.wASessionId,
      user: "user",
      roomName: this.roomName,
      roomId: this.roomId,
      type: type,
      demoProperty: type === "demo" ? option.value.input.text : undefined
    };

    this.sendMessage(data, comment, isAdd);
  };

  initializeDemoSocket = () => {
    this.demoSocket = socketIO.connect(DEMO_SOCKET_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });
    this.demoSocket.on("connect", function () {
      console.debug("demo socket connected to server");
    });
    this.demoSocket.on("chat message", (message) => {
      let data = message;
      let session_id = localStorage.getItem("demoWASessionId");
      let messages = [...this.state.messages];
      let lastWAUserIndex = this.state.lastWAUserIndex;
      if (data.success === undefined) {
        if (!session_id || session_id === data.session_id) {
          localStorage.setItem("demoWASessionId", data.session_id);
          if (data && data.context && data.context.skills) {
            data.output.generic.forEach(x => {
              if (x.text || x.title) {
                messages.push({
                  user: "WA",
                  message: x.options ? x.title : x.text,
                  type: x.options ? "options" : "text",
                  options: x.options || []
                });
                lastWAUserIndex = messages.length - 1;
              }
            });
          }
        }
      } else {
        if (!session_id || session_id === data.session_id) {
          if (data.message && (!data.type || data.type != "user")) {
            messages.push({
              user: data.type === "user" ? "US" : "WA",
              message: data.message
            });
            lastWAUserIndex = messages.length - 1;
          }
        }
      }
      this.setState(
        {
          messages,
          msg: "",
          lastWAUserIndex,
          isLoading: false
        },
        this.scrollToBottom
      );


    });
  }

  sendMessage = (data, message, shouldAddToMessages) => {
    let messages = [...this.state.messages];
    if (this.state.isDemo) {
      if (!this.demoSocket) {
        this.initializeDemoSocket()
      }
      let demoWASessionId = localStorage.getItem("demoWASessionId");
      this.demoSocket.emit("chat message", {
        payload: data.comment,
        params: { session_id: demoWASessionId },
        user: "user",
      })
    } else {
      this.socket.emit(SOCKET_PATHS.CONNECT, data);
    }
    if (shouldAddToMessages) {
      messages.push({ user: "ME", message: message, type: "text" });
    }
    this.setState(
      {
        messages,
        msg: "",
        isLoading: true
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
    }, 500);
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.send();
    }
  };

  getChatUiByType = (data, index) => {
    switch (data.type) {
      case "location":
        return (
          <ChatLocation isLastWAUser={index === this.state.lastWAUserIndex} />
        );
      case "callback_form":
        return <CallBackForm roomId={this.roomId} />;
      case "search-result":
        return (
          <React.Fragment>
            {data.data && data.data.length > 0 ? (
              <DiscoverySearchResults
                data={data}
                isLastWAUser={index === this.state.lastWAUserIndex}
              />
            ) : (
                <React.Fragment>
                  <ChatPill
                    isLastWAUser={
                      index === this.state.lastWAUserIndex &&
                      !this.state.isLoading
                    }
                    right={data.user === "ME"}
                    user={data.user}
                    text=""
                  />
                </React.Fragment>
              )}
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <ChatPill
              isLastWAUser={
                index === this.state.lastWAUserIndex && !this.state.isLoading
              }
              right={data.user === "ME"}
              user={data.user}
              text={data.message}
            />
          </React.Fragment>
        );
    }
  };

  handelModalCloseOpen = ans => {
    if (ans === true) {
      this.resetDemo();
    }
    this.setState({ modal: { isOpen: false } });
  };

  render() {
    console.log("msg loading", this.state.isLoading);
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
                  Experts in developing AI Infused Business Applications.
                  Powered by Watson Assistant
                </p>
              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col className="bot-container ">
              <section
                id="messages_container"
                className="chat d-flex flex-column flex-grow-1"
              >
                {this.state.messages.map((x, i) => (
                  <div key={i}>
                    {this.getChatUiByType(x, i)}
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
                                <div
                                  className={`wa-option ${option.label.toLowerCase()}`}
                                >
                                  <p>{option.label}</p>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      )}
                  </div>
                ))}
                {(this.state.isLoading || this.state.messages.length === 0) && (
                  <ChatPill isLastWAUser={true} right={false} user={"WA"}>
                    <Spinner size="sm" type="grow" color="primary" />
                    <Spinner size="sm" type="grow" color="primary" />
                    <Spinner size="sm" type="grow" color="primary" />
                    <Spinner size="sm" type="grow" color="primary" />
                  </ChatPill>
                )}
                {this.state.isDemo && (
                  <Button
                    onClick={this.exitWADemo}
                    className="exit-demo-btn mr-1 d-block d-sm-none"
                  >
                    Exit Demo
                  </Button>
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
          <div
            className={`chat-section d-flex justify-content-end align-items-center ask-container`}
          >
            {this.state.isDemo ? (
              <Button
                onClick={this.exitWADemo}
                className="exit-demo-btn mr-1 d-none d-sm-block"
              >
                Exit Demo
              </Button>
            ) : (
                <React.Fragment>
                  {this.state.messages.length > 0 && (
                    <Button
                      onClick={() => {
                        this.setState({ modal: { isOpen: true } });
                      }}
                      className="reset-btn mr-1 d-none d-sm-block"
                    >
                      Reset
                  </Button>
                  )}
                </React.Fragment>
              )}
            <ChatPillAsk
              handleKeyDown={this.handleKeyDown}
              value={this.state.msg}
              onChange={this.handleMessageChange}
              placeholder="Type here"
              onClick={this.send}
            />
          </div>
          <ConfirmModal
            isOpen={this.state.modal.isOpen}
            handelCloseOpen={ans => this.handelModalCloseOpen(ans)}
            title="Are you sure?"
          >
            Do you want to reset chat history?
          </ConfirmModal>
        </Container>
      </section>
    );
  }
}

export default BotSection;
