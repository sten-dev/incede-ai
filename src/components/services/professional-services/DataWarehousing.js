import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

const DataWarehousing = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <h2 className="m-0">Data Warehousing</h2>
            <br />
            <p>
              There is no shortage of data in today’s enterprises. Creating,
              managing, governing, delivering, and transforming that data into
              trusted information is the key to achieving return on your
              enterprise investments. Incede.ai understands how to transform
              data into valuable information for competitive advantages,
              business optimization and improved business outcomes.
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
                    Design and model a data warehouse for analysis of trends and
                    patterns
                  </p>
                </li>
                <li>
                  <p>
                    Tailor a data mart for application-specific or business
                    process analysis
                  </p>
                </li>
                <li>
                  <p>
                    Design and develop extract, transform, and load processes
                    that ensure data completeness
                  </p>
                </li>
                <li>
                  <p>
                    Create flexible and real time data governance for greater
                    trust and understanding of the organization’s data
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
                src="https://www.youtube.com/embed/bBFDPefg5lc"
                title="Modernize Your Data Warehouse with Information Integration a"
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
export default DataWarehousing;
