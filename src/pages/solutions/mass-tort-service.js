import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import SolutionsHeader from "../../components/Solutions/SolutionsHeader";
import massTortImg from "../../img/solutions/mass-tort.jpg";
import BotSection from "../../components/Landing/BotSection";
import Sidebar from "react-sidebar";

class MassTortClassActionFees extends React.Component {
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
      <Layout pageTitle="Mass Tort & Class Action Fees Management | Incede">
        <Transition>
          <section className="industry-solution">
            <SolutionsHeader
              header={"Mass Tort & Class Action Fees Management"}
              title={""}
            />
            <Container>
              <section className="solutions-content gap-y-half" id="3">
                <Container>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <div className="content">
                        <h1 className="text-primary">
                          Mass Tort & Class Action Fees Management
                        </h1>
                        <p>
                          Steering committee leadership that handles
                          case-staffing, time-keeping and expense reimbursement
                          for mass tort and class action lawsuits face the
                          unique challenge of collecting, organizing and
                          conforming the fees from dozens, if not hundreds, of
                          firms and then ensuring they comply with the court's
                          rules and expectations.
                        </p>
                        <br />
                        <p>
                          Incede's Mass Tort & Class Action Fees Management
                          solution streamlines the integration of all firm-level
                          time and expenses for the steering committee
                          leadership to analyze and apply the court's case
                          management protocols. It is the case-related fees
                          system of record for the firms, leadership committee
                          and the court with extensive analysis, audit and
                          compliance features.
                        </p>
                        <ul>
                          <li>
                            <p>
                              Support Court-Mandated Metrics, Analytics and
                              Reporting
                            </p>
                          </li>
                          <li>
                            <p>Impartial to any Firm, any Case and any Court</p>
                          </li>
                          <li>
                            <p>
                              Private instance for each case with world-class
                              security & controls
                            </p>
                          </li>
                          <li>
                            <p>
                              Protocol Enforcement with Audit Logs and Edit
                              Tracing
                            </p>
                          </li>
                        </ul>
                        <br />
                        <div className="text-center">
                          <button
                            onClick={() =>
                              this.openWAChatWithCustomMessage(
                                "Schedule a meeting"
                              )
                            }
                            className="btn btn-secondary"
                          >
                            Request a Demo Today!
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      className="mt-4 mt-lg-0 d-flex"
                    >
                      <div className="image-section">
                        <img src={massTortImg} alt="support image" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Container>
          </section>
        </Transition>
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
      </Layout>
    );
  }
}

export default MassTortClassActionFees;
