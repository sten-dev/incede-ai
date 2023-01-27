import React, { Component } from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/bot.scss";
import Sidebar from "react-sidebar";
import BotSection from "../Landing/BotSection";
class FeatureDemos extends Component {
  waTimeOut = 1 * 60 * 60 * 1000; // one hour
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isFirst: true,
      defaultText: "",
    };
  }

  resetLocalStorage = () => {
    localStorage.removeItem("demoProperty");
    localStorage.removeItem("demoWASessionId");
    localStorage.removeItem("demoRoomId");
    localStorage.removeItem("demoRoomName");
    localStorage.removeItem("waCreatedTime");
    localStorage.removeItem("wASessionId");
    localStorage.removeItem("roomId");
    localStorage.removeItem("roomName");
  };

  toggle = (defaultText = "") => {
    if (!this.state.modal) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "initial";
    }
    if (!defaultText) {
      localStorage.setItem("isLastOpen", !this.state.modal);
    }
    this.setState({
      modal: !this.state.modal,
      isFirst: false,
      defaultText: defaultText || "",
    });
  };

  openWAChatWithCustomMessage = (message) => {
    this.setState(
      {
        modal: false,
      },
      () => {
        this.toggle(message);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <section className="resources-library-content gap-y-half" id="1">
          <Container>
            <h1 className="text-left heading mb-5">Feature Demos</h1>
            <Row className="mb-4">
              <Col xs={12} sm={12} md={12} lg={12}>
                  <p className="mb-4">
                    Interact with several IBM Watson Assistant demos for
                    Customer Care and Employee Care and{" "}
                    <span
                      className="wa-feature-demo-link"
                      onClick={() =>
                        this.openWAChatWithCustomMessage(
                          "Watson are demos that you provide"
                        )
                      }
                    >
                      {" "}
                      Demo{" "}
                    </span>
                  </p>
                  <p className="mb-4">
                    Access Incede's knowledge base of success stories using IBM
                    Watson Assistant and it's native integration with IBM Watson
                    Discovery
                    <span
                      className="wa-feature-demo-link"
                      onClick={() =>
                        this.openWAChatWithCustomMessage(
                          "what are the Success Stories"
                        )
                      }
                    >
                      &nbsp;Success Stories
                    </span>
                  </p>
                  <p>
                    Prefer to see a deeper demonstration of IBM Watson's
                    industry-leading conversational AI capabilities, request a
                    <span
                      className="wa-feature-demo-link"
                      onClick={() =>
                        this.openWAChatWithCustomMessage("Schedule a meeting")
                      }
                    >
                      &nbsp;Demo&nbsp;
                    </span>
                    Today!
                  </p>
              </Col>
            </Row>
          </Container>
          {this.state.modal && (
            <Sidebar
              sidebar={
                !this.state.isFirst ? (
                  <BotSection
                    toggle={this.toggle}
                    defaultTextToWA={this.state.defaultText}
                  />
                ) : (
                  <React.Fragment></React.Fragment>
                )
              }
              open={this.state.modal}
              onSetOpen={this.toggle}
              styles={{
                sidebar: { width: "100%", overflowX: "hidden" },
                content: { position: "initial" },
                root: { position: "initial" },
              }}
              rootClassName="side-bar"
            >
              {" "}
            </Sidebar>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default FeatureDemos;
