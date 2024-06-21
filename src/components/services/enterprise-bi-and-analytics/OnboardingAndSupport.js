import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const OnboardingAndSupport = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Onboarding and Support</b>
                </h4>
                <br />
                <p>
                  Our onboarding programs help new users or stakeholders
                  integrate and become productive using the BI and analytics
                  tools, processes and systems. Our training programs ensure
                  your team can effectively use and manage their BI systems,
                  maximizing your investment.
                </p>
                <br />
                <p>
                  <b className="color-grey">Ongoing Support and Maintenance:</b>{" "}
                  Our ongoing support and maintenance services ensure your BI
                  systems remain efficient and secure. We offer regular system
                  checks, updates, and troubleshooting services to keep your BI
                  platforms running smoothly. Our dedicated support teams are
                  always available to assist you with any issues or questions
                  you may have.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default OnboardingAndSupport;
