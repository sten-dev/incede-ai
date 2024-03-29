import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import SolutionsHeader from "../../components/Solutions/SolutionsHeader";
// import resellerImg from "../../img/solutions/reseller.jpg";
import BotSection from "../../components/Landing/BotSection";
import Sidebar from "react-sidebar";
import SalesSupportImage from "../../img/solutions/sales-services.png";
class ResellersDistributors extends React.Component {
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
      <Layout pageTitle="Resellers & Distributors | Incede">
        <Transition>
          <section className="industry-solution">
            <SolutionsHeader
              header={"Resellers & Distributors"}
              title={""}
            />
            <Container>
              <section className="solutions-content gap-y-half" id="3">
                <Container>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <div className="content">
                        <h1 className="text-primary">
                          Resellers & Distributors AI Knowledge Base
                          Self-Service
                        </h1>
                        <p>
                          Powered by IBM Watson, a conversational AI agent that
                          brings your organization's knowledge base of
                          documents, references and other resources to the
                          fingertips of your reseller and distributor community
                          - securely, anytime and anywhere.
                        </p>
                        <br />
                        <p>
                          In an industry that demands precision, your resellers
                          and distributors need access to your knowledge base of
                          specifications to quickly assess how to meet the
                          customer's complex requirements.
                        </p>
                        <p>
                          To grow the company requires scaling your
                          organization's support capabilities which is where the
                          business case for Incede's Resellers & Distributor AI
                          Knowledge Base Self-Service becomes clear, urgent and
                          highly valued. The solution features include:
                        </p>

                        <ul>
                          <li>
                            <p>
                              <strong>Increase Engineer Productivity - </strong>{" "}
                              Access Relevant Information from a Natural
                              Language Interface
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>
                                Improve Distributor and Dealer Satisfaction{" "}
                              </strong>
                              Accelerate Support Engineer Responses
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong> Increase Capacity - </strong> Accelerate
                              New Engineer On-Boarding and Improve Capacity for
                              Complex Requests
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>
                                Ensure Accuracy of Support Engineer Answers -{" "}
                              </strong>
                              Enable AI, Natural Language on your Knowledge base
                            </p>
                          </li>
                        </ul>
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
                        <br />
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
                        <img src={SalesSupportImage} alt="support image" />
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

export default ResellersDistributors;
