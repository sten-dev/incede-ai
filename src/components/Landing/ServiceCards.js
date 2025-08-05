import React from "react";
import { Row, Col, Button } from "reactstrap";
import solutionTrainingIcon from "../../../static/img/watson-assistant/solution-training.png";
import integrationDevelopmentIcon from "../../../static/img/watson-assistant/integration-development.png";
import channelDevelopmentIcon from "../../../static/img/watson-assistant/channel-development.png";
import designServicesIcon from "../../../static/img/watson-assistant/design-services.png";
import "../../styles/service-cards.scss";

const cards = [
  {
    icon: solutionTrainingIcon,
    title: "Enterprise AI Agents",
    desc: "Deploy AI Agents as autonomous teammates—powered by models, logic, and built for action.",
    demo: "Get a demo",
    learn: "Learn more"
  },
  {
    icon: integrationDevelopmentIcon,
    title: "Gen AI Implementation",
    desc: "From Documents to Decisions—Turn Gen AI into Enterprise-Ready, Actionable Intelligence at Scale.",
    demo: "Get a demo",
    learn: "Learn more"
  },
  {
    icon: channelDevelopmentIcon,
    title: "AI-Powered Business Process Automation",
    desc: "Streamline operations, reduce costs, and accelerate workflows—powered by enterprise-grade GenAI.",
    demo: "Get a demo",
    learn: "Learn more"
  },
  {
    icon: designServicesIcon,
    title: "Planning & Analytics",
    desc: "Modernize planning and analytics with real-time collaboration, agile forecasting, and GenAI-powered decision intelligence.",
    demo: "Get a demo",
    learn: "Learn more"
  }
];

const ServiceCards = ({ onDemoClick }) => (
  <div className="service-cards-section">
    <div className="service-cards-header">
      <h1 className="service-cards-main-title">Operationalize AI. Maximize Results</h1>
      <p className="service-cards-main-desc">Unlock enterprise value—one tailored AI solution at a time.</p>
    </div>
    <div className="service-cards-container">
      <Row className="justify-content-center mx-4">
        {cards.map((card, idx) => (
          <Col key={idx} xs={12} sm={6} lg={3} className="mb-4 d-flex justify-content-center px-2">
            <div className="service-card">
              <div className="service-card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h4 className="service-card-title">{card.title}</h4>
              <p className="service-card-desc">{card.desc}</p>
              <Button
                className="service-card-btn"
                onClick={onDemoClick}
              >
                {card.demo}
              </Button>
              <span className="service-card-learn">{card.learn}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default ServiceCards;