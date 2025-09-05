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
                Incede.ai helps enterprises fine-tune foundation models to capture domain expertise and business context, delivering AI that is accurate, secure, and production ready. We support both open-source and enterprise models, including IBM Granite, GPT, LLaMA, Mistral, Claude, FinBERT, and Med-PaLM. Our services cover dataset preparation, prompt tuning, fine-tuning, and rigorous evaluation for accuracy, safety, and governance—ensuring models meet compliance requirements and deliver measurable business impact across cloud or private environments. </p>
              <p>
                We also bring flexibility by supporting open-source AI stacks such as Hugging Face, LangChain, and FAISS, alongside enterprise-grade frameworks. Beyond text, our expertise extends into document and image generation use cases—enabling automation in marketing, creative, and knowledge workflows. By tailoring foundation and large language models with domain-specific data, Incede.ai ensures enterprises unlock measurable ROI while maintaining compliance, security, and business alignment. </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomFoundationModelTraining;
