import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class ProcessMapping extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Process Mapping</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai helps organizations uncover inefficiencies and build a foundation for AI and automation. Through collaborative discovery sessions using IBM Blueworks Live, we map workflows across departments, capturing manual steps, bottlenecks, and delays with precision.
              </p>
              <p>
                Our experts create visual, real-world process blueprints for critical operations like claims, invoicing, and approvals. These models reveal high-impact automation opportunities and serve as an actionable baseline for transformation. You'll receive a prioritized roadmap that aligns stakeholders and accelerates readiness for GenAI and automation, ensuring your investments drive measurable, strategic outcomes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProcessMapping;
