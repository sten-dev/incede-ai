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
                  <b className="color-grey">Customization and Integration</b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">Custom Planning Solutions:</b> We
                  develop customized planning and budgeting solutions that cater
                  to your unique business requirements. This includes creating
                  bespoke models and templates that streamline your planning
                  processes.
                </p>
                <br />
                <p>
                  <b className="color-grey">
                    Integration with Existing Systems:
                  </b>{" "}
                  Our services ensure smooth integration of IBM Planning
                  Analytics with your existing BI and ERP systems, allowing for
                  cohesive data management and reporting.
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
