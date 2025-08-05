import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class GenAIAutomation extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Gen AI + Automation</b>
            </h4>
            <div className="content">
              <p>
                At Incede.ai, we fuse Gen AI with automation to streamline decisions and task execution. By leveraging techniques like summarization, classification, entity extraction, and decision automation, we minimize manual intervention and improve speed, accuracy, and outcomes across core business processes.
              </p>
              <p>
                Our intelligent workflows handle use cases such as loan processing, claims prioritization, and healthcare pre-authorizations, working seamlessly across your data and systems. Built using IBM watsonx.ai and automation frameworks, these solutions deliver smarter automation and meaningful gains in efficiency, consistency, and insight. The result is end-to-end operational intelligence tailored to your needs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GenAIAutomation;
