import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
import { ChatPillAsk } from "./bot/ChatPillAsk";
import socketIO from "socket.io-client";

// const ws = io("wss://cc-api.mybluemix.net", {
//   path: "/socket.io/cin"
// });
class BotSection extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], msg: "" };
  }
  componentDidMount() {
    this.initializeScoketIo();
  }
  initializeScoketIo = () => {
    let scope = this;
    this.socket = socketIO("wss://cc-api.mybluemix.net", {
      path: "/socket.io/cin",
      transports: ["websocket"],
      jsonp: false
    });
    this.socket.connect();

    this.socket.emit("chat message", {
      payload: "",
      params: {}
    });

    this.socket.on("chat message", message => {
      let data = message;
      if (data.success === undefined) {
        if (!scope.session_id || scope.session_id === data.session_id) {
          scope.session_id = data.session_id;
          if (data && data.context && data.context.skills) {
            scope.myData = data.context.skills["main skill"].user_defined;
            let messages = [...this.state.messages];
            data.output.generic.forEach(x => {
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
        }
      } else {
        if (!scope.session_id || scope.session_id === data.session_id) {
          let messages = [...this.state.messages];
          if (data.message && (!data.type || data.type != "user")) {
            messages.push({
              user: data.type === "user" ? "US" : "WA",
              message: data.message
            });
          }
          this.setState({
            messages
          });
        }
      }
    });
  };

  sendMessage = () => {
    let data = {
      payload: this.state.msg,
      params: { session_id: this.session_id },
      user: "user"
    };
    this.socket.emit("chat message", data);
    let messages = [...this.state.messages];
    messages.push({ user: "ME", message: this.state.msg, type: "text" });
    this.setState({
      messages,
      msg: ""
    });
  };

  handleOnOptionClick = option => {
    let data = {
      payload: option.value.input.text,
      params: { session_id: this.session_id },
      user: "user"
    };
    this.socket.emit("chat message", data);
    let messages = [...this.state.messages];
    messages.push({ user: "ME", message: option.value.input.text });
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
                <ChatPill text="Our solutions provide outsome-based answers to the business problems." />
                <ChatPill text="Which solutions are you looking for?" />
                <ChatPill right text="Customer Analytics" />
                <ChatPill text="You can use our customer analytics solution to target the right customers with predictive modeling. Identify dissatisfied customers by uncovering patterns of behavior. Address customer service issues faster by correlating and analyzing a variety of data." />
                {this.state.messages.map((x, i) => (
                  <>
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
                  </>
                ))}
              </section>
              <ChatPillAsk
                placeholder={"Enter your name here"}
                onClick={() => this.sendMessage()}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BotSection;
