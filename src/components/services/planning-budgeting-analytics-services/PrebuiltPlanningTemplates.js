import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class PrebuiltPlanningTemplates extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Prebuilt Planning Templates</b>
            </h4>
            <div className="content">
              <p>
                IBM’s Planning Analytics Core Financial Applications offer prebuilt templates for financial planning, workforce modelling, forecasting, and capital expenditures—delivering a fast, reliable starting point without spreadsheet sprawl. At Incede.ai, we tailor these templates to your KPIs, hierarchies, and operational logic for immediate value and long-term flexibility.
              </p>
              <p>
                Whether planning headcount or simulating supply chain scenarios, we adapt IBM’s tools to your needs and train teams on both web-based workspace and Excel-based environments. The result is a collaborative, real-time, and governed planning system—deployed quickly on IBM infrastructure and optimized by Incede.ai for scale, precision, and faster decision-making.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PrebuiltPlanningTemplates;
