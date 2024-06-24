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
                  Ensure all AI solutions are secure and compliant with
                  industry standards and regulations. Conduct workshops and
                  brainstorming sessions to explore innovative applications of
                  AI Assistants in the business environment, encouraging ongoing
                  adaptation and technological advancement.
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
