import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const UpgradesAndMigrations = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>
                  <b className="color-grey">Upgrades and Migrations </b>
                </h4>
                <br />
                <p>
                  <b className="color-grey">System Upgrades:</b> Stay ahead with
                  our system upgrade services. We help you upgrade your BI
                  platforms to the latest versions, ensuring you benefit from
                  the latest features, performance improvements, and security
                  enhancements. Our upgrade process is designed to be seamless
                  and minimally disruptive to your operations.
                </p>
                <br />
                <p>
                  <b className="color-grey">Data and System Migrations:</b> We
                  provide expert data and system migration services, helping you
                  transition from legacy platforms to modern BI solutions. Our
                  meticulous approach ensures data integrity and minimizes
                  downtime, allowing you to quickly take advantage of new
                  technologies without interrupting your business.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default UpgradesAndMigrations;
