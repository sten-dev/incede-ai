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
                <h1 className="text-primary">AI for Customer Care</h1>
                <p>
                  AI for Customer Care is the ever-improving feedback loop
                  between customer expectation and their interactions with the
                  organization.
                </p>
                <br />
                <p>
                  Customer, Sales and Field support automation is a key enabler
                  for organizations that want to improve efficiency, reduce
                  costs, and enhance customer satisfaction. Our end-to-end
                  solutions help organizations unlock the full potential of
                  automation technology and achieve their business objectives.
                </p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mt-4 mt-lg-0 d-flex">
              <div className="image-section">
                <img src={customerService} alt="support image" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <br />
              <p>
                <strong>Customer Support</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Branded and Personalized Self-Service with Access Anytime,
                    Anywhere
                  </p>
                  <ul>
                    <li>
                      With AI-powered solutions like Watson Assistant,
                      organizations can provide customers with personalized and
                      engaging experiences, improving customer satisfaction and
                      loyalty.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Provide Specific Answers to Specific Questions to Solve
                    Their Problem
                  </p>
                  <ul>
                    <li>
                      With access to more accurate and up-to-date information,
                      customers are able to make better decisions, leading to
                      improved outcomes and better business results.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Concierge Support Ticketing to Ensure the Right Information
                    Gets to the Right People
                  </p>
                  <ul>
                    <li>
                      By automating processes and enabling organizations to make
                      informed decisions quickly, AI helps organizations improve
                      efficiency and streamline operations.
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                <strong>Sales Support</strong>
              </p>
              <ul>
                <li>
                  <p>Leverage Previous Customer Care Interactions.</p>
                  <ul>
                    <li>
                      By providing sales with the tools and resources they need
                      to be more productive and effective, AI helps
                      organizations improve customer satisfaction and
                      engagement.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Validate Customer Requirements, Product Pricing and Current
                    Contracts
                  </p>
                  <ul>
                    <li>
                      AI-powered self-service solutions enable sales to interact
                      with the system using natural language, making it easier
                      and more intuitive to use.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Leverage previous Proposals, Data Sheets, and Other
                    Resources
                  </p>
                  <ul>
                    <li>
                      AI-powered solutions can analyze customer history and
                      buying patterns to provide tailored recommendations and
                      resources, improving the customer experience and enabling
                      sales to find the information they need more quickly and
                      easily.
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                <strong>Field Support</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Enable Field Personnel to Find Answers to Customer-Specific
                    Solutions.
                  </p>
                  <ul>
                    <li>
                      AI-powered self-service solutions are able to provide
                      field personnel with more accurate and up-to-date
                      information, reducing the risk of errors and ensuring that
                      they have the information they need to make informed
                      decisions.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Avoid Back-Office Delays with Access Anytime, Anywhere</p>
                  <ul>
                    <li>
                      AI-powered technical support solutions automate routine
                      tasks, freeing up support staff to focus on more complex
                      and high-value activities and improve overall
                      productivity.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Apply Customer's Specifications, Designs, Contracts and
                    Other Resources for Maintenance & Repair and Troubleshooting
                  </p>
                  <ul>
                    <li>
                      AI helps organizations improve overall efficiency and
                      reduce costs by enabling field personnel to access
                      information and resources quickly and easily.
                    </li>
                  </ul>
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
              {/* <br /> */}
              {/* <div className="d-flex align-items-center">
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
                </div> */}
              <div className="text-center">
                <button
                  onClick={() =>
                    this.openWAChatWithCustomMessage("Schedule a meeting")
                  }
                  className="btn btn-secondary"
                >
                  Request a Demo Today!
                </button>
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
