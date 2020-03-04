import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import picture1 from "../../img/services/watson-assistant-1.png";
import picture2 from "../../img/services/watson-assistant-2.png";
import picture3 from "../../img/services/watson-assistant-3.png";
import picture4 from "../../img/services/watson-assistant-4.png";
import ServicesSmallCardsList from "./ServicesSmallCardsList";

class WatsonAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  handleChange = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const assistantSubItems = [
      {
        image: "/img/watson-api/text-to-speech.png",
        inactiveImage: "/img/watson-api/text-to-speech-inactive.png",
        title: "Watson Assistant Design Services"
      },
      {
        image: "/img/watson-api/text-to-speech.png",
        inactiveImage: "/img/watson-api/text-to-speech-inactive.png",
        title: "Watson Assistant Development Services"
      }
    ];
    return (
      <section className="services-content gap-y-half pb-0" id="3">
        <Container>
          {/* <Row>
            <Col>
              <div className="content">
                <h1 className="title text-primary text-uppercase">
                  <b>Watson Assistant</b>
                </h1>
                <p>
                  Incede has deep experience in helping organizations utilize
                  conversational AI for a competitive advantage in their product
                  and services strategies.
                </p>
              </div>
              <br />
              <div className="image-section">
                <img src={picture1} alt="support image" />
              </div>
              <br />
              <div className="content">
                <p>
                  Watson Assistant is IBM’s AI product that lets you build,
                  train, and deploy conversational interactions into any
                  application, device, or channel. Also known as chatbots or
                  virtual assistants, they are interactive software programs
                  powered by artificial intelligence to understand natural
                  language and simulate human conversations. They are
                  revolutionizing the way businesses engage with people in
                  customer service, IT service desk, employee self-service,
                  sales support, commerce and other application areas.
                </p>
              </div>
              <div className="content-outcomes">
                <h5>
                  <b className="color-grey">Outcomes</b>
                </h5>
                <ul>
                  <li>
                    <p>
                      Search for an answer from a knowledge base, know when to
                      ask for clarity and when to direct users to a human.
                    </p>
                  </li>
                  <li>
                    <p>
                      Extends investments by integrating with existing messaging
                      channels, voice channels, service desk and other systems.
                    </p>
                  </li>
                  <li>
                    <p>Deployed in any cloud or on-premises environment.</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <br /> */}
          <Row className="wwd-list custom-services-img">
            {assistantSubItems.map((x, i) => {
              let data = x;
              return (
                <Col
                  key={i}
                  className="wwd-list-card mb-0"
                  xs={6}
                  sm={4}
                  lg={2}
                >
                  <ServicesSmallCardsList
                    service={data}
                    index={i}
                    isActive={this.state.activeIndex === i ? true : false}
                    onItemClick={index => this.handleChange(index)}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container
          fluid
          style={{ background: "rgba(122, 121, 121, 0.06)" }}
          className="gap-y"
        >
          <Row>
            <Col xs={12}>
              {this.state.activeIndex === 0 && (
                <Container>
                  <Row>
                    <Col>
                      <h4 className="text-uppercase">
                        <b className="color-grey">
                          Watson Assistant Design Services
                        </b>
                      </h4>

                      <div className="content">
                        <p>
                          Key to a successful deployments designing a solution
                          that is tailored to your needs while delivering the
                          user experience you intend.Incede develops a phased
                          Conversational AI Design for a solution that meets
                          your UX, technology and strategic priorities while
                          reducing risk and delivering the necessary business
                          value.
                        </p>
                        <p>
                          We assess points of contact between the users and the
                          organization and plot user reactions and behaviors to
                          various conditions, situations and interactions. We
                          identify triggers for managed interactions such as
                          escalations to a human agent or invoking a
                          transaction. We plan for how to train and maintain the
                          conversational AI model and when to incorporate
                          unplanned user requests.
                        </p>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={5}
                      className="mt-4 mt-lg-0 d-flex align-items-center"
                    >
                      <div className="image-section">
                        <img src={picture2} alt="support image" />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="content-outcomes">
                        <h5>
                          <b className="color-grey">Outcomes</b>
                        </h5>
                        <ul>
                          <li>
                            <p>
                              Phased approach that delivers incremental business
                              value quickly.
                            </p>
                          </li>
                          <li>
                            <p>
                              Blueprints for the common integrations of people,
                              processes and AI.
                            </p>
                          </li>
                          <li>
                            <p>
                              Detailed plan of the resources needed to design,
                              develop, train and monitor the AI solution.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
              )}
              {this.state.activeIndex === 1 && (
                <Container>
                  <Row>
                    <Col>
                      <h4 className="text-uppercase">
                        <b className="color-grey">
                          Watson Assistant Development Services
                        </b>
                      </h4>

                      <div className="content">
                        <p>
                          Incede provides experienced, high-quality end-to-end
                          development capabilities required to create and deploy
                          conversational AI solutions.
                        </p>
                        <p>
                          Incede developers have created numerous solutions for
                          our own internal use and for customers. We have
                          developed patterns on which permutations of
                          frameworks, APIs, and plugins will work best for the
                          most common use cases.
                        </p>
                      </div>
                      <div className="content-outcomes">
                        <h5>
                          <b className="color-grey">Outcomes</b>
                        </h5>
                        <ul>
                          <li>
                            <p>
                              Seamless integration of structured and
                              unstructured data.
                            </p>
                          </li>
                          <li>
                            <p>
                              Optimized relevancy training to improves user’s
                              trust in answers.
                            </p>
                          </li>
                          <li>
                            <p>
                              Best practices based development for greater
                              sustainability.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={5}
                      className="mt-4 mt-lg-0 d-flex align-items-center"
                    >
                      <div className="image-section mt-5">
                        <img src={picture3} alt="support image" />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <Row className="my-5">
                    <Col xs={12}>
                      <div className="image-section">
                        <img src={picture4} alt="support image" />
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <Row>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          User Interface Development Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          It accommodates user interactions via text and voice
                          and integrates capabilities such as translations and
                          channels.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Context Development Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          These are the implementation of the solution’s ability
                          to successfully match user inquiries with planned
                          intents. For those intents, develop the supporting
                          conversational dialogs of responses, triggers and
                          decision trees
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Integration Development Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          They expand available context through back-end systems
                          for security, data or enterprise AI search of
                          knowledge bases using Watson Discovery.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Pre-Processing Development Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          Minimizes false negatives and false positives with a
                          pre-processing pipeline to handle common errors with
                          dependency parsing, lemmatization and parts of speech
                          checking.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Channel Development Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          Integrate multi-channel deployments on mobile and web
                          with integrations to Facebook, Slack, Alexa, Google
                          Assistant, Siri, WhatsApp and third-party enterprise
                          chatbot solutions.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Exception Handling Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          Identifies and models outliners and escalations to
                          ensure the routing of requests that are not understood
                          or poorly understood.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">Solution Training Services</b>
                      </h4>
                      <div className="content">
                        <p>
                          Applies initial and re-training of the solution to
                          parse, identify languages and various categories such
                          as intents, actions, entities and the context around
                          which responses will be framed and improved.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">Deployment Services</b>
                      </h4>
                      <div className="content">
                        <p>
                          Deploy solutions on either cloud or on-premise and
                          utilize microservices and REST-based architectures for
                          minimal downtime.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <h4 className="mb-0">
                        <b className="color-grey">
                          Post-Production Support Services
                        </b>
                      </h4>
                      <div className="content">
                        <p>
                          These are ongoing support and monitoring for live
                          services, including ongoing optimization of the
                          solution.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WatsonAssistant;
