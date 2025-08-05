import React from "react";
import { Row, Col } from "reactstrap";
import "../../styles/server-page-cards.scss";

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
    points: [
      { text: "Prebuilt Agents", image: solutionTrainingIcon },
      { text: "Custom AI Agent Development", image: developmentServicesIcon },
      { text: "Website AI Assistant", image: channelDevelopmentIcon },
    ],
  },
  {
    heading: "GEN AI IMPLEMENTATION",
    points: [
      { text: "AI Roadmapping", image: designServicesIcon },
      { text: "Private AI", image: cloudProfessionalServicesIcon },
      { text: "Application Integration", image: integrationDevelopmentIcon },
      { text: "Custom Model Training", image: developmentServicesIcon },
    ],
  },
  {
    heading: "AI-POWERED BUSINESS PROCESS AUTOMATION",
    points: [
      { text: "Process Mapping", image: bigDataServicesIcon },
      { text: "Gen AI + Automation", image: orchestrateIcon },
      { text: "AI-Powered Analytics", image: customerAnalyticsIcon },
    ],
  },
  {
    heading: "PLANNING AND ANALYTICS",
    points: [
      { text: "Prebuilt Templates", image: watsonProfessionalServicesIcon },
      { text: "Collaborative Forecasting", image: salesPerformanceManagementIcon },
      { text: "Custom Model Training", image: speechToTextIcon },
    ],
  },
];

const ServicePageCards = () => (
  <div className="subscription-cards-section">
    <div className="subscription-cards-container">
      <Row className="justify-content-center mx-4">
        {servicePageCardsData.map((card, idx) => (
          <Col key={idx} xs={12} sm={6} lg={3} className="mb-4 d-flex px-2">
            <div className="subscription-card">
              <h6 className="subscription-card-heading">{card.heading}</h6>
              <ul className="subscription-card-points">
                {card.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="subscription-card-point-item">
                    <img src={point.image} alt={point.text} className="point-image" />
                    <p className="point-text">{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default ServicePageCards;
