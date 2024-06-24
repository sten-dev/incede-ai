import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const CustomizationAndIntegration = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Custom System Configuration</b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">Tailored Data Models:</b> We design
                  and implement data models that accurately reflect your
                  organization's operational and financial structure, ensuring
                  the tools deliver relevant and actionable insights.
                </p>
                <br />
                <p>
                  <b className="color-grey">Reporting Frameworks:</b> Custom
                  reporting frameworks are developed to provide clear visibility
                  into performance metrics, facilitating quick and informed
                  decision-making.
                </p>
                <br />
                <p>
                  <b className="color-grey">Workflow Optimization:</b> We
                  streamline workflows by automating routine data processing
                  tasks, enabling your team to focus on strategic activities and
                  reduce manual errors.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CustomizationAndIntegration;
