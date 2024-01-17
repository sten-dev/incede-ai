import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const AdvancedVisualizations = (props) => {
  return (
    <React.Fragment>
      <section className="services-content gap-y-half pb-0">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Advanced Visualizations</b>
                  <p id="applications-development" className="pt-1"></p>
                </h1>
                <p>
                  Understand much more about the underlying numbers in your data
                  when you visualize them. Too often, you must resort to
                  inflexible spreadsheet apps for showing data in graphs and
                  charts. And, you want to do more than review standard
                  dashboards and scorecards for exploratory analysis.
                  Visualization tools enable you to get past these frustrations.
                  IBM data visualization can help businesses, large and small,
                  get a better understanding of their data.
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
                    <p>
                      Communicate complex ideas, relationships and trends in
                      your business data.
                    </p>
                  </li>
                  <li>
                    <p>
                      Display associations related to time, hierarchies and
                      themes for exploratory analysis.
                    </p>
                  </li>
                  <li>
                    <p>
                      Realize the promise of big data analytics at both the
                      operational and strategic levels.
                    </p>
                  </li>
                  <li>
                    <p>
                      Tap into your data in ways that were previously out of
                      reach.
                    </p>
                  </li>
                  <li>
                    <p>
                      Support the predictive and BI needs of users, no matter
                      their interests and expertise.
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
                  src="https://www.youtube.com/embed/y2zVQUiBjNo"
                  title="The Future of Visual Analytics with IBM Many Eyes"
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
export default AdvancedVisualizations;
