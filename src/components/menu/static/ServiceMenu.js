import React from "react";
import "../../../styles/navbar.scss";
import { Link } from "gatsby";

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>
          <Link to="/services/ai-powered-business-process-automation">
            AI-Powered Business Process Automation
          </Link>
        </li>
        <li>
          <Link to="/services/enterprise-ai-agents">Enterprise AI Agents</Link>
        </li>
        <li>
          <Link to="/services/gen-ai-implementation">
            Gen AI Implementation
          </Link>
        </li>
        <li>
          <Link to="/services/planning-budgeting-and-analytics">
            Planning, Budgeting and Analytics
          </Link>
        </li>
        {/* <li>
          <Link to="/services/watson-assistant-services">
            watsonx Assistant Services
          </Link>
        </li>
        <li>
          <Link to="/services/watson-discovery-services">
            Watson Discovery Services
          </Link>
        </li>
        <li>
          <Link to="/services/watsonx-platform-services">watsonx Platform Services</Link>
        </li>
        <li>
          <Link to="/services/watsonx-orchestrate">watsonx Orchestrate</Link>
        </li> */}
        {/* <li>
          <Link to="/services/gen-ai-services">Generative AI Services</Link>
        </li>
        <li>
          <Link to="/services/ai-agentic-services">AI Agentic Services</Link>
        </li>
        <li>
          <Link to="/services/enterprise-bi-and-analytics">Enterprise BI and Analytics</Link>
        </li>
        <li>
          <Link to="/services/planning-and-budgeting">Planning and Budgeting</Link>
        </li>
        <li>
          <Link to="/services/applications-development">Applications Development</Link>
        </li> */}
        {/* <li>
          <Link to="/services/professional-services">Professional Services</Link>
        </li> */}
      </ul>
    );
  }
}

export default ServiceMenu;
