import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const ImplementationAndCustomizationServices = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">
                    Implementation and Customization Services
                  </b>
                </h4>
                <br />
                <p>
                  Offer full implementation services for AI Assistants,
                  including integration with existing systems and platforms.
                  Customize AI solutions to align with specific business
                  processes and objectives, ensuring that AI Assistants enhance
                  workflow efficiency and effectiveness.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ImplementationAndCustomizationServices;
