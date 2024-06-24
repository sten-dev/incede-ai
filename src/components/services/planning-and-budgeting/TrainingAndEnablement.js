import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const TrainingAndEnablement = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Training and Enablement</b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">Comprehensive Training Programs:</b>{" "}
                  We offer tailored training sessions that are designed to equip
                  your staff with the necessary skills to utilize IBM Planning
                  Analytics effectively. Training covers everything from basic
                  navigation to advanced features, ensuring all users are
                  competent and confident.
                </p>
                <br />
                <p>
                  <b className="color-grey">Resource Provisioning:</b> Alongside
                  training, we provide extensive documentation and online
                  resources to support ongoing learning and problem-solving.
                </p>
                <br />
                <p>
                  <b className="color-grey">Continuous Improvement:</b> We engage in
                  an ongoing dialogue with your team to gather feedback and
                  implement enhancements, ensuring the system remains effective
                  and aligned with your growing business needs.
                </p>
                <br />
                <p>
                  <b className="color-grey">Proactive Support:</b> Our
                  dedicated support team is available to address any issues that
                  arise, ensuring continuous system availability and
                  performance.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TrainingAndEnablement;
