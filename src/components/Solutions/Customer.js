import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import solutions2 from "../../img/solutions/solutions-2.png";
import { Link } from "gatsby";
class Customer extends Component {
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
                  Conversational AI solutions primarily designed to take over
                  inquiries coming into the customer service desk.
                </p>
                <p>
                  Typical customer service solutions provide answers to product
                  questions, return and exchange policies, damaged in shipping
                  claims and credit card disputes.
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
                <img src={solutions2} alt="support image" />
              </div>
            </Col>
          </Row>
          <div>
            <h4>Learn more..</h4>
            <Link
              to="/industries/retail-distribution"
              className="btn btn-secondary learn-more"
            >
              Retail / Distribution
            </Link>
            &nbsp;&nbsp;
            <Link
              to="/industries/communications-services"
              className="btn btn-secondary learn-more"
            >
              Communications & Services
            </Link>
          </div>
        </Container>
      </section>
    );
  }
}

export default Customer;
