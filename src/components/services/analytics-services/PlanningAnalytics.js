import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const PlanningAnalytics = (props) => {
  return (
    <React.Fragment>
      <section className="services-content gap-y-half pb-0">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Planning Analytics</b>
                  <p id="applications-development" className="pt-1"></p>
                </h1>
                <p>
                  Using IBM Cognos Financial Performance Management Locus
                  Solutions enables you to collaborate on strategic plans and
                  corporate budgets, perform sophisticated financial analysis
                  and adapt to change quickly with frequent, driver-based
                  rolling forecasts. With mobile capabilities, Locus Solutions
                  can enable organizations to engage all users in the planning
                  process regardless of location or mobility. In addition, the
                  increasing availability of on-cloud deployment options offers
                  organizations faster time to value even as you support a wider
                  range of users, locations, and work profiles.
                </p>
              </div>
            </Col>
            <Col xs={12} className="pb-3">
              <div className="content-outcomes">
                <h5>
                  <p>
                    Locus Solutions can help you automate planning and budgeting
                    and perform driver-based forecasting, “what-if” scenario
                    modeling and multidimensional financial analysis.
                  </p>
                </h5>
                <p>Locus Solutions helps you:</p>
                <ul>
                  <li>
                    <p>
                      Deploy powerful planning and analysis solutions that
                      enables you to collaborate on plans, budgets and
                      forecasts.
                    </p>
                  </li>
                  <li>
                    <p>
                      Design and develop models that support even the most
                      complex organizations and business processes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enable the business to own and administer the solution and
                      make changes on their timelines, with their resources and
                      to their specifications
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
                  src="https://www.youtube.com/embed/D6AbnH1WCKA"
                  title="IBM Planning Analytics for speed agility and foresight"
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
export default PlanningAnalytics;
