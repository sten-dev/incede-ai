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
                  We offer extensive training programs designed to equip your
                  team with the skills needed to effectively use IBM Planning
                  Analytics. This includes on-site workshops, remote training
                  sessions, and customized learning paths.
                </p>
                <br />
                <p>
                  <b className="color-grey">Ongoing Support and Mentoring:</b>{" "}
                  Our support doesn't end at implementation. We provide ongoing
                  support and mentoring to ensure your team can continuously
                  leverage the full capabilities of IBM Planning Analytics.
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
