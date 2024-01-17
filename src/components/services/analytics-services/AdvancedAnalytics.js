import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const AdvancedAnalytics = (props) => {
  return (
    <React.Fragment>
      <section className="services-content gap-y-half pb-0">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Advanced Analytics</b>
                  <p id="applications-development" className="pt-1"></p>
                </h1>
                <p>
                  With extensive analytics capabilities delivered by Locus
                  Solutions, you can understand what happened, what will happen
                  and what should happen. Easily engage both business and
                  technical users to uncover opportunities and address big
                  issues. Operationalize analytics into business processes.
                </p>
              </div>
            </Col>
            <Col xs={12} className="pb-3">
              <div className="content-outcomes">
                <h5 className="mb-0">
                  <p>Locus Solutions helps you:</p>
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
            <Col xs={12} className="pb-3">
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
            <Col xs={12} className="pb-3">
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
      </section>
    </React.Fragment>
  );
};
export default AdvancedAnalytics;
