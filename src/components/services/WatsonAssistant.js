import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import picture1 from "../../img/services/assistant-picture1.png";
import picture2 from "../../img/services/assistant-picture2.png";
import picture3 from "../../img/services/assistant-picture3.png";
import picture4 from "../../img/services/assistant-picture4.png";
import picture5 from "../../img/services/assistant-picture5.png";

class WatsonAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="services-content gap-y-half" id="3">
        <Container>
          <Row>
            <Col>
              <div className="content">
                <p>
                  Incede has deep experience in helping organizations utilize
                  conversational AI for a competitive advantage in their product
                  and services strategies.
                </p>
                <p>
                  <b>Watson Assistant</b> is IBM’s AI product that lets you
                  build, train, and deploy conversational interactions into any
                  application, device, or channel.Also known as chat bots or
                  virtual assistants, they are interactive software programs
                  powered by artificial intelligence to understand natural
                  language and simulate human conversations. They are
                  revolutionizing the way businesses engage with people in
                  customer service, IT service desk, employee self-service,
                  sales support, commerce and other application areas.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={5}
              className="mt-4 mt-lg-0 d-flex align-items-center flex-column"
            >
              <div className="image-section mt-5">
                <img src={picture1} alt="support image" />
              </div>
              <br />
              <div className="image-section">
                <img src={picture2} alt="support image" />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h1 className="text-left heading mb-5">
            Watson Assistant Design Services
          </h1>
          <Row>
            <Col>
              {/* <p className="content-heading mb-3">
                Watson Assistant Design Services
              </p> */}

              <div className="content">
                <p>
                  Key to a successful deployments designing a solution that is
                  tailored to your needs while delivering the user experience
                  you intend.
                </p>
                <p>
                  Incede develops a phased Conversational AI Design for a
                  solution that meets your UX, technology and strategic
                  priorities while reducing risk and delivering the necessary
                  business value.
                </p>
                <p>
                  We assess points of contact between the users and the
                  organization and plot user reactions and behaviors to various
                  conditions, situations and interactions. We identify triggers
                  for managed interactions such as escalations to a human agent
                  or invoking a transaction.
                </p>
                <p>
                  We plan for how to train and maintain the conversational AI
                  model and when to incorporate unplanned user requests.
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
                <img src={picture3} alt="support image" />
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h1 className="text-left heading mb-5">
            Watson Assistant Development Services
          </h1>
          <Row>
            <Col>
              {/* <p className="content-heading mb-3">
                Watson Assistant Development Services
              </p> */}

              <div className="content">
                <p>
                  Incede provides experienced, high-quality end-to-end
                  development capabilities required to create and deploy
                  conversational AI solutions.
                </p>
                <p>
                  Incede developers have created numerous solutions for our own
                  internal use and for customers. We have developed patterns on
                  which permutations of frameworks, APIs, and plugins will work
                  best for the most common use cases.
                </p>
                <ul>
                  <li>
                    <p>
                      <b>User Interface Development Services</b> accommodates
                      user interactions via text and voice and integrates
                      capabilities such as translations and channels.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Context Development Services</b> are the implementation
                      of the solution’s ability to successfully match user
                      inquiries with planned intents. For those intents, develop
                      the supporting conversational dialogs of responses,
                      triggers and decision trees.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Integration Development Services</b> expand available
                      context through back-end systems for security, data or
                      enterprise AI search of knowledge bases using Watson
                      Discovery.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Pre-Processing Development Services</b> minimizes false
                      negatives and false positives with a pre-processing
                      pipeline to handle common errors with dependency parsing,
                      lemmatization and parts of speech checking.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Channel Development Services</b> integrate
                      multi-channel deployments on mobile and web with
                      integrations to Facebook, Slack, Alexa, Google Assistant,
                      Siri, WhatsApp and third-party enterprise chatbot
                      solutions.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Exception Handling Services</b> identifies and models
                      outliners and escalations to ensure the routing of
                      requests that are not understood or poorly understood.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Solution Training Services</b> applies initial and
                      re-training of the solution to parse, identify languages
                      and various categories such as intents, actions, entities
                      and the context around which responses will be framed and
                      improved.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Deployment Services</b> deploy solutions on either
                      cloud or on-premise and utilize micro services and
                      REST-based architectures for minimal downtime.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Post-Production Support Services</b> are ongoing
                      support and monitoring for live services, including
                      ongoing optimization of the solution.
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
              className="mt-4 mt-lg-0 d-flex align-items-center flex-column"
            >
              <div className="image-section mt-5">
                <img src={picture4} alt="support image" />
              </div>
              <br />
              <div className="">
                <img src={picture5} alt="support image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WatsonAssistant;
