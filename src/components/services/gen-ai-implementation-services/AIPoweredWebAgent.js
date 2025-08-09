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
              <h5 className=""><b>Embed an AI Agent on Your Website — No Redesign Needed</b></h5>
              <p>
                Incede.ai adds an enterprise-grade AI agent to your existing website that engages visitors in real time, powered by your current site content. The agent understands your offerings, answers questions with precision, and guides users toward the right actions — without altering your site’s design or structure.
              </p>
              <p>
                Beyond Q&A, we can enable high-impact features tailored to your goals, such as:
              </p>
              <ul>
                <li>Appointment scheduling directly within the chat</li>
                <li>Lead capture and qualification</li>
                <li>Product or service recommendations</li>
                <li>Knowledge base and document lookup</li>
                <li>Customer support handoff to live agents</li>
              </ul>
              <p>
                Using Retrieval-Augmented Generation (RAG), semantic search, and backend integrations, the agent delivers context-aware, accurate responses that boost conversion and reduce support load. Launch in days with enterprise-grade privacy, accuracy, and customization.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AIPoweredWebAgent;
