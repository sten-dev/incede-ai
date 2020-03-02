import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import solutions1 from "../../img/solutions/solutions-1.png";
import { Link } from "gatsby";
class HumanResource extends Component {
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
                  Designed to automate routine questions and queries coming into
                  HR using a conversational AI solution.
                </p>
                <p>
                  Typical HR solutions provide answers to vacation time,
                  entitlements, hour tracking, overtime pay and the rules and
                  regulations in the workplace.
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
                      Provides positional- and employee-specific answers to
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
                      Re-engage employees to ask questions, become informed.
                    </p>
                  </li>
                  <li>
                    <p>Automation of employee claims and complaints.</p>
                  </li>
                  <li>
                    <p>
                      Comply with state and local workplace information sharing.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={solutions1} alt="support image" />
              </div>
            </Col>
          </Row>
          <div>
            <h4>Learn more..</h4>
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

export default HumanResource;
