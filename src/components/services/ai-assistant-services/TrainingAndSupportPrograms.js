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
                  Provide comprehensive training for client teams on how to
                  effectively use AI Assistants. Include ongoing technical
                  support, troubleshooting, and performance monitoring to ensure
                  the AI Assistants continue to operate optimally and evolve
                  with the business.
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
