import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/services.scss";

class ApplicationIntegration extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Application Integration</b>
            </h4>
            <div className="content">
              <p>
                Incede.ai specializes in connecting the disconnected. Enterprise operations often span legacy and modern systems with limited or no integration pathways. We bridge these gaps using a mix of traditional integrations, APIs, and Robotic Process Automation (RPA) to create seamless, intelligent workflows that unify your business-critical applications.
              </p>
              <p>
                Where APIs exist, we design secure, scalable connections across platforms like CRM, ERP, databases, and email. When APIs aren’t available, we deploy automation bots that replicate human interactions with systems. The result: synchronized data, streamlined approvals, and reduced manual effort and enabling more resilient, efficient, and future-ready operations without requiring system overhauls.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApplicationIntegration;
