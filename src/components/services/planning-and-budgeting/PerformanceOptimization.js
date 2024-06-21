import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const PerformanceOptimization = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Performance Optimization</b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">System Audits and Health Checks:</b>{" "}
                  We conduct regular system audits and health checks to ensure
                  your IBM Planning Analytics environment is performing
                  optimally. This includes identifying potential issues and
                  implementing improvements.
                </p>
                <br />
                <p>
                  <b className="color-grey">Performance Tuning:</b> Our experts
                  fine-tune your planning models and workflows to enhance
                  performance and efficiency, ensuring you get the most out of
                  your investment.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PerformanceOptimization;
