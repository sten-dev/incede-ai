import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class CustomFoundationModelTraining extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Custom Foundation Model Training</b>
            </h4>
            <div className="content">
              <p>
                Generic models often fall short in capturing domain expertise and business context. Incede.ai helps enterprises build and fine-tune foundation models that understand your language, industry, and compliance needs—delivering AI systems that are aligned, accurate, and ready for real-world use.
              </p>
              <p>
                We support training across open-source and enterprise models—from IBM Granite to specialized LLMs like FinBERT and Med-PaLM. Our services span dataset preparation, prompt tuning, full fine-tuning, and rigorous evaluation for accuracy and safety. Whether you’re deploying on cloud or private infrastructure, we ensure your models are secure, governance-ready, and optimized for production success.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomFoundationModelTraining;
