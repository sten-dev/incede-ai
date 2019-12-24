import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
import { ChatPillAsk } from "./bot/ChatPillAsk";
import socketIO from "socket.io-client";
import { API_URL, SOCKET_PATHS, httpClient } from "../../constants";

class BotSection extends Component {
  roomName = undefined;
  roomId;
  wASessionId;
  constructor(props) {
    super(props);
    this.state = { messages: [], msg: "" };
  }
  componentDidMount() {
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
    this.socket.on("connect", function() {
      console.debug("connected to server");
    });
    let messages = [];
    let time = new Date().getTime();
    this.roomName = localStorage.getItem("roomName");
    this.roomId = localStorage.getItem("roomId");
    this.wASessionId = localStorage.getItem("wASessionId");
    if (this.roomId) {
      let chatsResp = await httpClient("chats", "POST", {
        roomId: this.roomId
      });
      if (chatsResp.success === true) {
        chatsResp.data.forEach(x => {
          if (x.TEXT) {
            messages.push({
              user: x.USER === "WATSON" ? "WA" : "ME",
              message: x.options ? x.title : x.TEXT,
              type: x.options ? "options" : "text",
              options: x.options || []
            });
          }
        });
        this.setState({
          messages
        });
      }
    }
    this.socket.emit(SOCKET_PATHS.CONNECT, {
      payload: "",
      roomName: this.roomName ? this.roomName : "room" + time,
      roomId: this.roomId ? this.roomId : undefined,
      wASessionId: this.wASessionId ? this.wASessionId : undefined
    });

    this.socket.on(SOCKET_PATHS.BOT_RESPONSE, (eventName, response) => {
      debugger;
      console.info(SOCKET_PATHS.BOT_RESPONSE, eventName, response);
      if (eventName === "SERVER_CONNECT") {
        console.info("Bot connected, waiting for bot to wakeup");
        return;
      }
      if (response.newRoom === true && eventName === "WATSON") {
        if (response.sessionId) {
          localStorage.setItem("wASessionId", response.sessionId);
          localStorage.setItem("roomId", response.roomId);
          localStorage.setItem("roomName", response.roomName);
          let data = response.data;
          if (data && Array.isArray(data)) {
            // scope.myData = data.context.skills["main skill"].user_defined;
            messages = [...this.state.messages];
            data.forEach(x => {
              if (x.text || x.title) {
                messages.push({
                  user: "WA",
                  message: x.options ? x.title : x.text,
                  type: x.options ? "options" : "text",
                  options: x.options || []
                });
              }
            });
            this.setState({
              messages
            });
          }
        } else {
          if (response.success === false) {
            console.error(response);
          }
        }
      } else {
        if (eventName === "WATSON") {
        } else {
          console.warn(eventName, response);
        }
      }
      // if (data.newRoom === undefined) {
      //   if (!scope.session_id || scope.session_id === data.session_id) {
      //     scope.session_id = data.session_id;
      //     if (data && data.context && data.context.skills) {
      //       scope.myData = data.context.skills["main skill"].user_defined;
      //       let messages = [...this.state.messages];
      //       data.output.generic.forEach(x => {
      //         if (x.text || x.title) {
      //           messages.push({
      //             user: "WA",
      //             message: x.options ? x.title : x.text,
      //             type: x.options ? "options" : "text",
      //             options: x.options || []
      //           });
      //         }
      //       });
      //       this.setState({
      //         messages
      //       });
      //     }
      //   }
      // } else {
      //   if (!scope.session_id || scope.session_id === data.session_id) {
      //     let messages = [...this.state.messages];
      //     if (data.message && (!data.type || data.type != "user")) {
      //       messages.push({
      //         user: data.type === "user" ? "US" : "WA",
      //         message: data.message
      //       });
      //     }
      //     this.setState({
      //       messages
      //     });
      //   }
      // }
    });
  };

  send = () => {
    // console.log("time", this.time);
    let data = {
      comment: this.state.msg,
      params: { wASessionId: this.wASessionId },
      // username: "user",
      roomId: this.roomId
    };
    this.sendMessage(data, this.state.msg);
  };

  handleOnOptionClick = option => {
    let data = {
      payload: option.value.input.text,
      params: { wASessionId: this.wASessionId },
      user: "user",
      roomId: this.roomId
    };
    this.sendMessage(data, option.value.input.text);
  };

  sendMessage = (data, message) => {
    this.socket.emit(SOCKET_PATHS.CONNECT, data);
    let messages = [...this.state.messages];
    messages.push({ user: "ME", message: message, type: "text" });
    this.setState({
      messages,
      msg: ""
    });
  };

  render() {
    return (
      <section className="bot">
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
            <Col>
              <section className="chat d-flex flex-column flex-grow-1">
                {/* <ChatPill text="Our solutions provide outsome-based answers to the business problems." />
                <ChatPill text="Which solutions are you looking for?" />
                <ChatPill right text="Customer Analytics" />
                <ChatPill text="You can use our customer analytics solution to target the right customers with predictive modeling. Identify dissatisfied customers by uncovering patterns of behavior. Address customer service issues faster by correlating and analyzing a variety of data." /> */}
                {this.state.messages.map((x, i) => (
                  <div key={i}>
                    <ChatPill right={x.user === "ME"} text={x.message} />
                    {i === this.state.messages.length - 1 &&
                      x.type === "options" &&
                      x.options.map(option => (
                        <div onPress={() => this.handleOnOptionClick(option)}>
                          <div>
                            <p>{option.label}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </section>
              <ChatPillAsk
                value={this.state.msg}
                onChange={this.handleMessageChange}
                placeholder={"Enter your name here"}
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
