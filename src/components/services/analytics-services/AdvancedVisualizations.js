import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const AdvancedVisualizations = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <h2 className="m-0">Advanced Visualizations</h2>
            <br />
            <p>
              Understand much more about the underlying numbers in your data
              when you visualize them. Too often, you must resort to inflexible
              spreadsheet apps for showing data in graphs and charts. And, you
              want to do more than review standard dashboards and scorecards for
              exploratory analysis. Visualization tools enable you to get past
              these frustrations. IBM data visualization can help businesses,
              large and small, get a better understanding of their data.
            </p>
          </Col>
          <Col lg={12} md={12} sm={12} className="pb-3">
            <div className="content-outcomes">
              <h5 className="mb-0">
                <p>Incede.ai helps you:</p>
              </h5>
              <ul>
                <li>
                  <p>
                    Communicate complex ideas, relationships and trends in your
                    business data.
                  </p>
                </li>
                <li>
                  <p>
                    Display associations related to time, hierarchies and themes
                    for exploratory analysis.
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
    </React.Fragment>
  );
};
export default AdvancedVisualizations;
