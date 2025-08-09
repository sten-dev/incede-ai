import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class AIPoweredAnalytics extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">AI-Powered Analytics</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai helps organizations turn business intelligence into a strategic advantage with AI-powered analytics. Using IBM watsonx.bi and Cognos Analytics, we enable natural language exploration of enterprise data with no coding or SQL required. Business users can instantly ask complex questions, analyze trends, and uncover insights across finance, sales, and operations in a conversational, intuitive way.
              </p>
              <p>
                From setup and data integration to governance alignment, Incede ensures your AI insights are accurate, secure, and policy-compliant. We help you build dashboards, embed analytics into workflows, and empower every team to make faster, smarter decisions. With Incede, AI-driven analytics becomes explainable, actionable, and accessible for all.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AIPoweredAnalytics;
