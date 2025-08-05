import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class PrivateAI extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Private AI</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai helps enterprises unlock actionable intelligence from unstructured content—policies, contracts, SOPs, and reports—by deploying domain-specific GenAI retrieval patterns. We go beyond basic search, enabling document intelligence solutions that extract insights, explain context, and drive real outcomes.
              </p>
              <p>
                Our services combine techniques like RAG, semantic classification, clause detection, and summarization with hybrid architectures that balance self-hosted and cloud-based models for compliance and control. From legal clause automation to financial document analysis, each deployment is tailored to your operational needs, ensuring secure, scalable, and effective AI-powered document workflows.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PrivateAI;
