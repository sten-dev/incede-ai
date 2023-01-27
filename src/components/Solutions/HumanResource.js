import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import SalesSupportImage from "../../img/solutions/sales-services.png";
// import communicationServices from "../../img/solutions/hr-services.png";
import communicationsImage from "../../img/solutions/communications-icon.png";
import Sidebar from "react-sidebar";
import { Link } from "gatsby";
import BotSection from "../Landing/BotSection";
class HumanResource extends Component {
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
            <Col>
              <div className="content">
                <h1 className="text-primary">Employee AI Self-Service</h1>
                <p>
                  Designed to automate routine questions and queries coming into
                  HR. These solutions provide answers to vacation time,
                  entitlements, hour tracking, overtime pay and the rules and
                  regulations in the workplace.
                </p>
                <br />
                <p>
                  <strong>Outcomes</strong>
                </p>
                <ul>
                  <li>
                    <p>
                      Allows HR specialists to serve exceptional or sensitive
                      matters.
                    </p>
                  </li>
                  <li>
                    <p>
                      Provides positional and employee-specific answers to
                      inquiries.
                    </p>
                  </li>
                  <li>
                    <p>
                      Available to support employees across all shifts, any time
                      of the day or night.
                    </p>
                  </li>
                  <li>
                    <p>
                      Re-engage employees to ask questions and become informed.
                    </p>
                  </li>
                  <li>
                    <p> Automation of employee claims and complaints.</p>
                  </li>
                  <li>
                    <p>
                      Comply with state and local workplace information sharing.
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>Learn more in</strong>
                </p>
                <br />
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="learn-more-icon"
                      src={communicationsImage}
                      alt="banking"
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
                <img src={SalesSupportImage} alt="support image" />
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

export default HumanResource;
