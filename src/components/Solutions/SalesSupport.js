import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/solutions.scss";
import solutions4 from "../../img/solutions/solutions-4.png";

class SalesSupport extends Component {
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
                  Support sales people during the sales cycle using Conversation
                  AI solutions.
                </p>
                <p>
                  Typical sales support solutions provide answers to product
                  questions, upsell and cross-sell recommendations, retrieve
                  product or service documentation and verify product
                  compatibility and cross-references.
                </p>
                <ul>
                  <li>
                    <p>
                      Allows support engineers and technicians to support
                      exceptional, high-value opportunities.
                    </p>
                  </li>
                  <li>
                    <p>
                      Provide customer-specific answers based on past and
                      current histories and activities.
                    </p>
                  </li>
                  <li>
                    <p>
                      Available to support sellers anytime – when their
                      prospects expect answers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Prompt sellers to gather and provide relevant, required
                      information about a product or service.
                    </p>
                  </li>
                  <li>
                    <p>
                      Guided automation of tasks such as returns, exchanges or
                      warranty claims.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={5} className="mt-4 mt-lg-0">
              <div className="image-section">
                <img src={solutions4} alt="support image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SalesSupport;
