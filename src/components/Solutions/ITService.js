import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import solutions3 from "../../img/solutions/solutions-3.png";
import { Link } from "gatsby";
class ITService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="solutions-content gap-y-half" id="3">
        <Container>
          <Row>
            <Col>
              <div className="content">
                <p>
                  Conversational AI solutions for IT are designed to automate
                  parts of the service desk and to effectively solve IT problems
                  more quickly.
                </p>
                <p>
                  Typical IT service desk solutions provide answers to product
                  questions, return and exchange policies, damaged in shipping
                  claims and credit card disputes.
                </p>
                <ul>
                  <li>
                    <p>Automate onboarding, offboarding tasks for employees.</p>
                  </li>
                  <li>
                    <p>Provide troubleshooting and suggestions to problems.</p>
                  </li>
                  <li>
                    <p>
                      Validate problem tickets contain relevant, required
                      information.
                    </p>
                  </li>
                  <li>
                    <p>
                      Augment suggestions with AI to recommend most-helpful
                      answers and resources.
                    </p>
                  </li>
                  <li>
                    <p>
                      Streamline and integrate channels for incoming requests
                      and outgoing answers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Auto-escalate issues to human agents to serve
                      highest-urgency problems.
                    </p>
                  </li>
                  <li>
                    <p>Automation of routine tasks such as password resets.</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={solutions3} alt="support image" />
              </div>
            </Col>
          </Row>
          <div>
            <h4>Learn more..</h4>
            <Link
              to="/industries/banking-insurance"
              className="btn btn-outline-secondary learn-more"
            >
              Banking & Insurance
            </Link>
            &nbsp;&nbsp;
            <Link
              to="/industries/communications-services"
              className="btn btn-outline-secondary learn-more"
            >
              Communications & Services
            </Link>
          </div>
        </Container>
      </section>
    );
  }
}

export default ITService;
