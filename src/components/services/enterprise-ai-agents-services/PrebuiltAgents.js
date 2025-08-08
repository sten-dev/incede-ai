import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import ContactModal from '../../ContactModal';

const prebuiltAgentsData = [
  {
    type: "HR Agents",
    useCases: "Automate employee support, time-off, onboarding, payroll, and hiring—reducing manual effort.",
    integrations: ["Workday", "SAP", "SuccessFactors"],
  },
  {
    type: "Sales Agents",
    useCases: "Qualify leads, update CRMs, summarize deals, and prep sellers—shortening sales cycles.",
    integrations: ["Salesforce", "Seismic", "HubSpot"],
  },
  {
    type: "Procurement Agents",
    useCases: "Manage sourcing, vendors, POs, and contracts—streamlining workflows across procurement platforms.",
    integrations: ["SAP Ariba", "Coupa", "Oracle"],
  },
  {
    type: "Customer Support Agents",
    useCases: "Handle inquiries, fulfill AI requests, and manage escalations—boosting CSAT and first-touch resolution.",
    integrations: ["Zendesk", "Salesforce Service", "Voice/Chat APIs"],
  },
  {
    type: "IT Service Agents",
    useCases: "Automate tickets, user access, and assets—improving efficiency across IT operations.",
    integrations: ["ServiceNow", "Jira", "Okta"],
  },
  {
    type: "Productivity Agents",
    useCases: "Schedule meetings, manage documents, send updates, and handle lists—within tools your teams already use.",
    integrations: ["Teams", "Slack", "Outlook", "SharePoint", "Google Workspace"],
  },
  {
    type: "Document & Collaboration Agents",
    useCases: "Enable advanced Box/SharePoint tasks like permissions, folders, and comments—all via chat.",
    integrations: ["Box", "SharePoint", "OneDrive"],
  },
];

class PrebuiltAgents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactModal: false,
      screenWidth: typeof window !== 'undefined' ? window.innerWidth : 1200,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateScreenWidth);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateScreenWidth);
    }
  }

  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };

  renderAgentCard = (agent, index) => (
    <div key={index} className="agent-card">
      <h5 className="card-title">{agent.type}</h5>
      
      <div className="use-cases-section">
        <h6 className="section-title">Use Cases</h6>
        <p className="use-cases-text">{agent.useCases}</p>
      </div>
      
      <div className="integrations-section">
        <h6 className="section-title">Primary Integrations</h6>
        <div className="integrations-container">
          {agent.integrations.map((integration, idx) => (
            <span key={idx} className="integration-badge">
              {integration}
            </span>
          ))}
        </div>
      </div>
      
      <button className="demo-button" onClick={this.handleContactClick}>
        Get Demo
      </button>
    </div>
  );

  getCardsContainerStyle = () => {
    const { screenWidth } = this.state;
    let gridTemplateColumns = '1fr';
    
    if (screenWidth >= 768 && screenWidth < 992) {
      gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (screenWidth < 768) {
      gridTemplateColumns = '1fr';
    }

    return {
      display: 'grid',
      gridTemplateColumns,
      gap: '20px',
      marginTop: '20px'
    };
  };

  render() {
    const { screenWidth } = this.state;
    const isDesktop = screenWidth >= 992;

    return (
      <Container className="prebuilt-agents-container">
        <Row>
          <Col>
            <h4 className="main-title">
              <b className="color-grey">Prebuilt Agents</b>
            </h4>
            <div className="content">
              <p className="description">
                These domain-specific agents spanning HR, Sales, Procurement, Support, IT, and Document workflows are enterprise-ready and customizable. They accelerate deployments, reduce risk, and deliver rapid ROI for clients across industries.
              </p>
              
              {/* Table for larger screens */}
              {isDesktop ? (
                <Table bordered responsive className="agents-table">
                  <thead>
                    <tr>
                      <th className="table-header">Agent Type</th>
                      <th className="table-header">Use Cases</th>
                      <th className="table-header">Primary Integrations</th>
                      <th className="table-header"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {prebuiltAgentsData.map((agent, index) => (
                      <tr key={index}>
                        <td className="table-cell">{agent.type}</td>
                        <td className="table-cell">{agent.useCases}</td>
                        <td className="table-cell">
                          {agent.integrations.map((integration, i) => (
                            <span key={i} className="integration-tag-table">{integration}</span>
                          ))}
                        </td>
                        <td className="table-cell cta-column">
                          <button className="table-demo-button demo-button" onClick={this.handleContactClick}>
                            Get Demo
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                /* Cards for smaller screens */
                <div style={this.getCardsContainerStyle()}>
                  {prebuiltAgentsData.map((agent, index) => 
                    this.renderAgentCard(agent, index)
                  )}
                </div>
              )}
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
