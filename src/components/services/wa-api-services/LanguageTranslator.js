import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

const LanguageTranslator = props => {
  return (
    <React.Fragment>
      <Container>
        <Row className="api-services-content">
          <Col lg={12} md={12} sm={12} id="language-translator">
            <h2 className="m-0">Language Translator</h2>
            <br />
            <p>
              With the increasing importance of being multilingual, Watson Language Translator is a service to help you expand your content and reach new markets. The service allows users to translate text from one language to another. Anyone can embed this functionality to translate applications, websites, documents, chats, and more! The service comes pre-trained for immediate use out of the box; however, you can train the service to allow domain specific customizations. Language translator supports 40+ languages and provides the capability to build industry or region-specific custom models via a forced glossary or parallel corpus
            </p>
            <br />
            <strong>
              Advanced Machine Learning
            </strong>
            <p>
              Language translation service leverages Neural machine translation. By default all language pairs leverage neural machine translation. This new technology uses deep learning to improve translation speed and accuracy.
            </p>
            <br />
            <strong>
              Document Translator
            </strong>
            <p>
              Translate documents from one language to another while preserving file formatting and type. Supported file types include: MS Office, Open Office, PDF, HTML, JSON, TXT & and XML
            </p>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default LanguageTranslator;
