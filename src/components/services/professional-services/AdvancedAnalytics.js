import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const AdvancedAnalytics = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <h2 className="m-0">Advanced Analytics</h2>
            <br />
            <p>
              With extensive analytics capabilities delivered by Incede.ai, you
              can understand what happened, what will happen and what should
              happen. Easily engage both business and technical users to uncover
              opportunities and address big issues. Operationalize analytics
              into business processes.
            </p>
          </Col>
          <Col lg={12} md={12} sm={12} className="pb-3">
            <div className="content-outcomes">
              <h5 className="mb-0">
                <p>Incede.ai helps you:</p>
              </h5>
              <ul>
                <li>
                  <p>Reveal hidden patterns and relationships in your data</p>
                </li>
                <li>
                  <p>
                    Tell stories with powerful visual cues and automated
                    visualizations
                  </p>
                </li>
                <li>
                  <p>
                    Allow diverse users, from subject matter experts to data
                    scientists, to explore data easily, ask questions and get
                    insightful answers
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="pb-3">
            <div className="d-flex justify-content-center">
              <iframe
                width="398"
                height="224"
                src="https://www.youtube.com/embed/ueQG-pA2NW4"
                title="IBM SPSS Statistics Overview 10Youtube com"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="pb-3">
            <div className="d-flex justify-content-center">
              <iframe
                width="398"
                height="224"
                src="https://www.youtube.com/embed/rL9TI7tAgbk"
                title="IBM SPSS Modeler The power of predictive intelligence 10Youtube com"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default AdvancedAnalytics;
