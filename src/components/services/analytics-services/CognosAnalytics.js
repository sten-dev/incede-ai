import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const CognosAnalytics = (props) => {
  return (
    <React.Fragment>
      <section className="services-content gap-y-half pb-0">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Cognos Analytics</b>
                  <p id="applications-development" className="pt-1"></p>
                </h1>
                <p>
                  Innovations in BI provide broader analytic capabilities so
                  that everyone has the relevant information they need to drive
                  your business forward. IBM Cognos Analytics delivered by Locus
                  Solutions are simple to serve the needs of the entire
                  organization yet powerful to high standards for integration
                  and performance. Start addressing your most pressing BI needs
                  with the confidence that you can grow your solution over time
                  to meet future requirements.
                </p>
              </div>
            </Col>
            <Col xs={12} className="pb-3">
              <div className="content-outcomes">
                <h5 className="mb-0">
                  <p>
                    On-premise or on the cloud, IBM Cognos Analytics is designed
                    for the individual, workgroup, department, midsize business
                    and large enterprise – to help everyone in your organization
                    make the decisions that achieve better business outcomes.
                  </p>
                </h5>
                <p>Locus Solutions helps you:</p>
                <ul>
                  <li>
                    <p>
                      Design tailored dashboards to visualize, monitor and guide
                      performance at a glance.
                    </p>
                  </li>
                  <li>
                    <p>
                      Monitor performance with simple-to-sophisticated
                      scorecards
                    </p>
                  </li>
                  <li>
                    <p>
                      Deploy the right reports to establish the foundation to
                      gain insights and make better business decisions.
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
                  src="https://www.youtube.com/embed/ChtGsM5Su1I"
                  title="Broadened Perspectives to Make Better Decisions"
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
export default CognosAnalytics;
