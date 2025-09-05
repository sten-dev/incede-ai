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
                We deploy private and hybrid AI environments tailored for enterprises that require full control over sensitive data. Whether on-premises, in a private cloud, or within hybrid infrastructures, our solutions ensure secure model hosting, governance, and compliance while maintaining enterprise scalability. </p>
              <p>
               We also connect LLMs with enterprise data through retrieval-augmented generation (RAG), semantic search, and vector databases such as FAISS, Pinecone, Weaviate etc. Our integration approach includes data pipelines, middleware, and orchestration frameworks that unify legacy and modern systems. </p>
          <p>
            For customer-facing solutions, we design custom UIs and embed AI into websites and mobile apps, enabling real-time engagement, automation, and decision support.
We deploy AI across cloud, hybrid, and on-premises environments, depending on compliance and business needs.

          </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PrivateAI;
