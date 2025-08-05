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
    value: "17"
  },
  {
    label: "SUCCESSFUL IBM PROJECTS",
    value: "+500"
  },
  {
    label: "CUSTOMERS",
    value: "+200"
  }
];

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-header">
      <h2 className="stats-title">Grow with Incede.ai</h2>
    </div>
    <div className="stats-container">
      <Container fluid>
        <Row className="justify-content-center">
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