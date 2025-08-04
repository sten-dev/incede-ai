import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const AutomationAndEfficiencySolutions = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">
                    Automation and Efficiency Solutions
                  </b>
                </h4>
                <br />
                <p>
                  Leverage Agentic AI to automate routine and multi-step tasks,
                  boosting productivity and operational efficiency. Develop
                  tailored automation strategies that harness the capabilities
                  of IBM Watsonx Orchestrate to solve complex business
                  challenges, orchestrate workflows, and streamline
                  decision-making across the enterprise.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AutomationAndEfficiencySolutions;
