import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class AIPoweredWebAgent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">AI-Powered Web Agent</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai transforms your website into a smart assistant—without requiring a redesign. Our AI-powered chatbot indexes your existing site content and delivers real-time, conversational support that understands your offerings, engages users, and answers questions with precision.
              </p>
              <p>
                Using Retrieval-Augmented Generation (RAG), semantic search, and backend integrations, the assistant provides context-aware responses that enhance lead conversion and reduce support effort. Easily connect it to your CRM or knowledge base, and launch in days with enterprise-grade privacy, accuracy, and customization. It’s a seamless way to turn static content into dynamic, interactive engagement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AIPoweredWebAgent;
