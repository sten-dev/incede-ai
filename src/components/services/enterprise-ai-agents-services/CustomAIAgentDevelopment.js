import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class CustomAIAgentDevelopment extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Custom AI Agent Development</b>
            </h4>
            <div className="content">
              <p>
                At Incede, we help enterprises build custom AI agents that align with real-world workflows, whether through no-code orchestration or developer-grade builds.
              </p>
              <p>
                For business teams, we use IBM’s no-code Orchestrate interface to rapidly configure and deploy agents that automate tasks, trigger workflows, and integrate with enterprise systems.
              </p>
              <p>
                For more complex or unique needs, our experts leverage IBM’s Agent Development Kit (ADK) to build highly customized agents from the ground up designed to handle advanced logic, proprietary systems, and mission-critical processes.
              </p>
              <h5>What We Deliver:</h5>
              <ul className="check-list">
                <li>Intelligent agents engineered around your business processes</li>
                <li>Deep integration with your enterprise tools (e.g. SAP, Workday, Salesforce, custom apps)</li>
                <li>Secure, governed automation that scales with your organization</li>
                <li>Full-service delivery: from design and development to testing, deployment, and optimization</li>
                <li>Technical flexibility to support both business-led use cases and IT-led implementations</li>
              </ul>
              <p>
                We build intelligent agents that adapt to your enterprise - not the other way around.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomAIAgentDevelopment;
