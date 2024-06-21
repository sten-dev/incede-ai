import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const IBMPlanningAnalyticsImplementation = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">
                    IBM Planning Analytics Implementation
                  </b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">
                    Tool Selection and Implementation:
                  </b>{" "}
                  We assist you in selecting the right tools within the IBM
                  Planning Analytics suite to fit your specific business needs.
                  Our seamless implementation process ensures minimal disruption
                  and quick adoption.
                </p>
                <br />
                <p>
                  <b className="color-grey">System Configuration:</b> We
                  configure IBM Planning Analytics to align with your financial
                  planning processes, including setting up data models,
                  workflows, and reporting structures tailored to your
                  organization.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default IBMPlanningAnalyticsImplementation;
