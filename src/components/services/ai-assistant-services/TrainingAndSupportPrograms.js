import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const TrainingAndSupportPrograms = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Training and Support Programs</b>
                </h4>
                <br />
                <p>
                  Deliver comprehensive training for client teams on effectively
                  using Agentic AI powered by IBM Watsonx Orchestrate. Provide
                  ongoing technical support, troubleshooting, and performance
                  monitoring to ensure agents operate optimally and continuously
                  evolve with business needs.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TrainingAndSupportPrograms;
