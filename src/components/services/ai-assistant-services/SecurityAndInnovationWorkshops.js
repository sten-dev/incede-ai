import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const SecurityAndInnovationWorkshops = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">
                    Security and Innovation Workshops
                  </b>
                </h4>
                <br />
                <p>
                  Ensure all Agentic AI solutions are secure, compliant, and
                  aligned with industry regulations. Conduct collaborative
                  workshops to explore innovative use cases, helping
                  organizations uncover new opportunities for automation,
                  continuous improvement, and enterprise-wide AI adoption.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SecurityAndInnovationWorkshops;
