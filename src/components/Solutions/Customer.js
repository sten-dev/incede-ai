import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import customerService from "../../img/solutions/customer-service.png";
import retailImage from "../../img/solutions/retail-distribution-icon.png";
import communicationsImage from "../../img/solutions/communications-icon.png";
import { Link } from "gatsby";
import BotSection from "../Landing/BotSection";
import Sidebar from "react-sidebar";
class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isFirst: true,
      defaultText: "",
    };
  }
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
      <section className="solutions-content gap-y-half" id="3">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="content">
                <h1 className="text-primary">Customer AI Self Service</h1>
                <p>
                  It provides solutions primarily designed to take over
                  inquiries coming into the customer service desk. It provides
                  answers to product questions, return and exchange policies,
                  damaged in shipping claims and credit card disputes.
                </p>
                <br />
                <p>
                  <strong>Outcomes</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Allows human agents to service more complex, high-value
                      inquiries.
                    </p>
                  </li>
                  <li>
                    <p>
                      Auto-escalate to human agents to serve highest-value
                      customers.
                    </p>
                  </li>
                  <li>
                    <p>Increases response time to customer inquiries.</p>
                  </li>
                  <li>
                    <p>
                      Increases volume of incoming requests to the service desk.
                    </p>
                  </li>
                  <li>
                    <p>Automation of routine tasks and transactions.</p>
                  </li>
                </ul>
                {/* <p>
                  <strong>Learn more in</strong>
                </p>
                <br />
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="learn-more-icon"
                      src={retailImage}
                      alt="banking"
                    />
                  </div>
                  <div className="pl-2">
                    <Link to="/industries/retail-distribution">
                      <strong>Retail and Distribution</strong>
                    </Link>
                  </div>
                </div> */}
                <br />
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="learn-more-icon"
                      src={communicationsImage}
                      alt="communications"
                    />
                  </div>
                  <div className="pl-2">
                    <Link to="/industries/communications-services">
                      <strong>Communications and Services</strong>
                    </Link>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button
                    onClick={() =>
                      this.openWAChatWithCustomMessage("Schedule a meeting")
                    }
                    className="btn btn-secondary"
                  >
                    Request a Demo Today! 
                  </button>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mt-4 mt-lg-0 d-flex">
              <div className="image-section">
                <img src={customerService} alt="support image" />
              </div>
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
    );
  }
}

export default Customer;
