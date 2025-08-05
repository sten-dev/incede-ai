import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "../../../styles/services.scss";
import ContactModal from '../../ContactModal'; // Import ContactModal

class PrebuiltAgents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactModal: false,
    };
  }

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h4>
              <b className="color-grey">Prebuilt Agents</b>
            </h4>
            <div className="content">
              <p>
                These domain-specific agents spanning HR, Sales, Procurement, Support, IT, and Document workflows are enterprise-ready and customizable. They accelerate deployments, reduce risk, and deliver rapid ROI for clients across industries.
              </p>
              <Table bordered responsive className="custom-table">
                <thead>
                  <tr>
                    <th>Agent Type</th>
                    <th>Use Cases</th>
                    <th>Primary Integrations</th>
                    <th>CTA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HR Agents</td>
                    <td>Automate employee support, time-off, onboarding, payroll, and hiring—reducing manual effort.</td>
                    <td>Workday, SAP, SuccessFactors</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>Sales Agents</td>
                    <td>Qualify leads, update CRMs, summarize deals, and prep sellers—shortening sales cycles.</td>
                    <td>Salesforce, Seismic, HubSpot</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>Procurement Agents</td>
                    <td>Manage sourcing, vendors, POs, and contracts—streamlining workflows across procurement platforms.</td>
                    <td>SAP Ariba, Coupa, Oracle</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>Customer Support Agents</td>
                    <td>Handle inquiries, fulfill AI requests, and manage escalations—boosting CSAT and first-touch resolution.</td>
                    <td>Zendesk, Salesforce Service, Voice/Chat APIs</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>IT Service Agents</td>
                    <td>Automate tickets, user access, and assets—improving efficiency across IT operations.</td>
                    <td>ServiceNow, Jira, Okta</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>Productivity Agents</td>
                    <td>Schedule meetings, manage documents, send updates, and handle lists—within tools your teams already use.</td>
                    <td>Teams, Slack, Outlook, SharePoint, Google Workspace</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                  <tr>
                    <td>Document & Collaboration Agents</td>
                    <td>Enable advanced Box/SharePoint tasks like permissions, folders, and comments—all via chat.</td>
                    <td>Box, SharePoint, OneDrive</td>
                    <td className="cta-column"><button className="btn bg-secondary text-white" onClick={this.handleContactClick}>Get Demo</button></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <ContactModal
          isOpen={this.state.showContactModal}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

export default PrebuiltAgents;
