import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class AIRoadmapping extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">AI Roadmapping</b>
            </h4>
            <div className="content">
              <p>
                Before launching GenAI initiatives, organizations must evaluate their current state and define a clear path forward. Incede.ai provides an enterprise-grade assessment across data infrastructure, governance, and team capabilities—scoring high-impact use cases using a feasibility-impact framework and aligning them to the IBM watsonx ecosystem.
              </p>
              <p>
                We then build a phased, stakeholder-aligned roadmap including solution architecture, integration points, risk modeling, and GenAI pattern recommendations like RAG or summarization. The final deliverables—a readiness scorecard, use case heatmap, and strategic blueprint—equip you to confidently move from exploration to execution with alignment, prioritization, and speed.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AIRoadmapping;
