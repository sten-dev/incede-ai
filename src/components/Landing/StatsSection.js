import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/stats-section.scss";

const stats = [
  {
    label: "EXCLUSIVE IBM FOCUS",
    value: "100%"
  },
  {
    label: "YEARS IN BUSINESS",
    value: "10+"
  },
  {
    label: "SUCCESSFUL PROJECTS",
    value: "500+"
  },
  {
    label: "CUSTOMERS",
    value: "200+"
  }
];

const StatsSection = () => (
  <section className="stats-section bg-primary ">
    <div className="stats-container">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <h2 className="text-white text-center">Grow with Incede.ai</h2>
          </Col>
          {stats.map((stat, idx) => (
            <Col key={idx} xs={6} md={3} className="stats-col">
              <div className="stats-card">
                <div className="stats-label">
                  {stat.label}
                </div>
                <div className="stats-value">
                  {stat.value}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </section>
);

export default StatsSection;