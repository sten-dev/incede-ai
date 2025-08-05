import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class CollaborativeForecastingScenarioModeling extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Collaborative Forecasting & Scenario Modeling</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai enables agile planning by unifying predictive modeling and collaborative decision-making with IBM Planning Analytics. Teams can simulate what-if scenarios, analyze trends, and forecast outcomes supporting smarter decisions across revenue, workforce, and supply chain planning. Our solutions help enterprises stress-test assumptions and respond with confidence.
              </p>
              <p>
                We empower cross-functional teams to collaborate securely and in real time, with model governance, version control, and scorecard tracking built in. Stakeholders can align on strategy, compare scenarios, and adapt to change without data silos. Whether in finance, HR, or operations, these offerings turn planning into a competitive edge with speed, precision, and control.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CollaborativeForecastingScenarioModeling;
