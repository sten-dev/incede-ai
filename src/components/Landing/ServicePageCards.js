import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "gatsby";
import "../../styles/server-page-cards.scss";
import { ServiceContext } from '../../context/ServiceContext';

import solutionTrainingIcon from "../../../static/img/watson-assistant/solution-training.png";
import developmentServicesIcon from "../../../static/img/watson-assistant/development-services.png";
import channelDevelopmentIcon from "../../../static/img/watson-assistant/channel-development.png";
import designServicesIcon from "../../../static/img/watson-assistant/design-services.png";
import cloudProfessionalServicesIcon from "../../../static/img/cloud-professional-services.png";
import integrationDevelopmentIcon from "../../../static/img/watson-assistant/integration-development.png";
import bigDataServicesIcon from "../../../static/img/big-data-services.png";
import orchestrateIcon from "../../../static/img/watsonx-orchestrate/orchestrate.png";
import customerAnalyticsIcon from "../../../static/img/customer-analytics.png";
import watsonProfessionalServicesIcon from "../../../static/img/watson-professional-services.png";
import salesPerformanceManagementIcon from "../../../static/img/sales-performance-management.png";
import speechToTextIcon from "../../../static/img/watson-api/speech-to-text.png";

const servicePageCardsData = [
  {
    heading: "ENTERPRISE AI AGENTS",
    url: "/services/enterprise-ai-agents",
    points: [
      {
        text: "Prebuilt Agents",
        image: solutionTrainingIcon,
        url: "/services/enterprise-ai-agents#prebuilt-agents",
      },
      {
        text: "Custom AI Agent Development",
        image: developmentServicesIcon,
        url: "/services/enterprise-ai-agents#custom-ai-agent-development",
      },
    ],
  },
  {
    heading: "GEN AI IMPLEMENTATION",
    url: "/services/gen-ai-implementation",
    points: [
      {
        text: "AI Roadmapping",
        image: designServicesIcon,
        url: "/services/gen-ai-implementation#ai-roadmapping",
      },
      {
        text: "Private AI",
        image: cloudProfessionalServicesIcon,
        url: "/services/gen-ai-implementation#private-ai",
      },
      {
        text: "Website AI Assistant",
        image: integrationDevelopmentIcon,
        url:
          "/services/gen-ai-implementation#ai-powered-website-assistant",
      },
      {
        text: "Custom Model Training",
        image: developmentServicesIcon,
        url: "/services/gen-ai-implementation#custom-foundation-model-training",
      },
    ],
  },
  {
    heading: "AI-POWERED BUSINESS PROCESS AUTOMATION",
    url: "/services/ai-powered-business-process-automation",
    points: [
      {
        text: "Process Mapping",
        image: bigDataServicesIcon,
        url: "/services/ai-powered-business-process-automation#process-mapping",
      },
      {
        text: "Gen AI + Automation",
        image: orchestrateIcon,
        url:
          "/services/ai-powered-business-process-automation#gen-ai-automation",
      },
      {
        text: "Application Integration ",
        image: customerAnalyticsIcon,
        url: "/services/ai-powered-business-process-automation#application-integration",
      },
    ],
  },
  {
    heading: "PLANNING AND ANALYTICS",
    url: "/services/planning-budgeting-and-analytics",
    points: [
      {
        text: "Prebuilt Templates",
        image: watsonProfessionalServicesIcon,
        url:
          "/services/planning-budgeting-and-analytics#prebuilt-planning-templates",
      },
      {
        text: "Collaborative Forecasting",
        image: salesPerformanceManagementIcon,
        url:
          "/services/planning-budgeting-and-analytics#collaborative-forecasting-scenario-modeling",
      },
      {
        text: "AI-Powered Analytics",
        image: speechToTextIcon,
        url: "/services/planning-budgeting-and-analytics#ai-powered-analytics",
      },
    ],
  },
];

const ServicePageCards = () => {
  const { updateServiceSelection } = useContext(ServiceContext);

  return (
    <div className="subscription-cards-section">
      <div className="subscription-cards-container">
        <Row className="justify-content-center mx-4">
          {servicePageCardsData.map((card, idx) => (
            <Col key={idx} xs={12} sm={6} lg={3} className="mb-4 d-flex px-2">
            <Link to={card.url} className="link-card" onClick={() => updateServiceSelection(card.url, '')}>
                <div className="subscription-card">
                  <h6 className="subscription-card-heading">{card.heading}</h6>
                  <ul className="subscription-card-points">
                    {card.points.map((point, pointIdx) => (
                      <Link
                        to={point.url}
                        className="link-list"
                        onClick={() => updateServiceSelection(point.url.split('#')[0], point.url.split('#')[1])}
                      >
                        <li
                          key={pointIdx}
                          className="subscription-card-point-item"
                        >
                          <img
                            src={point.image}
                            alt={point.text}
                            className="point-image"
                          />
                          <p className="point-text">{point.text}</p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
            </Link>
              </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicePageCards;
