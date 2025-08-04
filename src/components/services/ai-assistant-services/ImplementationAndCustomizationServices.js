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
                  Offer full implementation services for Agentic AI solutions,
                  including seamless integration with existing systems and
                  platforms. Customize IBM watsonx-powered agents to align with
                  specific business processes and objectives—ensuring they drive
                  workflow efficiency, automation, and measurable impact.
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
