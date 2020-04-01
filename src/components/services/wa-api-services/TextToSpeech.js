import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

const TextToSpeech = props => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} id="text-to-speech">
            <h2 className="m-0">Text to Speech</h2>
            <br />
            <strong>Powerful speech recognition</strong>
            <p>
              Customized speech-to-text capabilities, driven by machine learning, let customers ask their questions in natural language – fast-tracking them to the answer. You can also blend texting and voice simultaneously for instant information exchange by connecting Watson Speech to Text with Watson Assistant over the phone.
            </p>
            <br />
            <strong>Advanced Machine Learning</strong>
            <p>
              Speech to Text service relies on two key modeling capabilities: language modeling, that leverages a neural network-based language model to generate training text and acoustic modeling, that uses a fairly compact model to accommodate the resource limitations of the cloud. To train this compact model, IBM uses "teacher-student training / knowledge distillation." Large and strong neural networks such as Long Short-Term Memory (LSTM), VGG, and the Residual Network (ResNet) are first trained. The output of these networks is then used as teacher signals to train a compact model for actual deployment.
            </p>
            <br />
            <strong>Automatically transcribes proper nouns and context-specific formatting</strong>
            <p>
              Speech-to-Text is tailored to work well with real-life speech and can accurately transcribe your audio in real-time or via uploaded batch files using any of our available out-of-the-box language models, audio frequency options and transcription output features. Format and organize your transcripts as you need by using features such as speaker labels, smart formatting, keyword spotting, numeric redaction, word timestamps, confidence and alternatives.
            </p>
            <br />
            <strong>Hands-on speech training capabilities</strong>
            <p>
              Improve accuracy for your use case, especially around domain-specific terminology, acronyms, names, jargons, expressions, dialects and acoustical
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TextToSpeech;
