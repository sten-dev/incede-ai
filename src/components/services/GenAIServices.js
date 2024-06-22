import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-scroll";
import ModelAccuracyAndReliability from "./gen-ai-services/ModelAccuracyAndReliability";
// import ScalabilityAndIntegration from "./gen-ai-services/ScalabilityAndIntegration";
import GovernanceAndCompliance from "./gen-ai-services/GovernanceAndCompliance";
import DataSecurityAndPrivacy from "./gen-ai-services/DataSecurityAndPrivacy";
// import PerformanceAndEfficiency from "./gen-ai-services/PerformanceAndEfficiency";
import InterpretableAndExplainableAI from "./gen-ai-services/InterpretableAndExplainableAI";
import AIIntegrationAndOptimizationService from "./gen-ai-services/AIIntegrationAndOptimizationService";

const subItems = [
  {
    image: "/img/watson-assistant/solution-training.png",
    inactiveImage: "/img/watson-assistant/solution-training-inactive.png",
    title: "Model Accuracy and Reliability",
  },
  {
    image: "/img/watson-assistant/integration-development.png",
    inactiveImage: "/img/watson-assistant/integration-development-inactive.png",
    title: "AI Integration and Optimization Service",
  },
  {
    image: "/img/watson-assistant/channel-development.png",
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png",
    title: "Governance and Compliance",
  },
  // {
  //   image: "/img/watson-discovery/enrich-development-service.png",
  //   inactiveImage:
  //     "/img/watson-discovery/enrich-development-service-inactive.png",
  //   title: "Performance and Efficiency",
  // },
  {
    image: "/img/watson-assistant/design-services.png",
    inactiveImage: "/img/watson-assistant/design-services-inactive.png",
    title: "Data Security and Privacy",
  },
  {
    image: "/img/watson-discovery/smart-document-development.png",
    inactiveImage:
      "/img/watson-discovery/smart-document-development-inactive.png",
    title: "Interpretable and Explainable AI",
  },
];

export const Menu = (subItems, activeIndex) =>
  subItems.map((x, i) => {
    let data = x;
    return (
      <div className="wwd-list-card api-services-cards mb-0" key={i}>
        <ServicesSmallCardsList
          service={data}
          index={i}
          isActive={activeIndex === i ? true : false}
          onItemClick={() => {}}
        />
      </div>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
class GenAIServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      clickWhenDrag: false,
      alignCenter: false,
      dragging: true,
      hideArrows: false,
      hideSingleArrow: true,
      itemsCount: subItems.length,
      scrollToSelected: false,
      selected: 0,
      translate: 0,
      transition: 0.3,
      wheel: false,
      menuItems: Menu(subItems.slice(0, subItems.length), 0),
      linkId: "",
    };
  }

  componentDidMount = () => {
    if (window.location.hash.length > 0) {
      let hash = window.location.hash.split("#")[1];
      let activeIndex = 0;
      switch (hash) {
        case "model-accuracy-and-reliability":
          activeIndex = 0;
          break;
        case "ai-integration-and-optimization-service":
          activeIndex = 1;
          break;
        case "governance-and-compliance":
          activeIndex = 2;
          break;
        // case "performance-and-efficiency":
        //   activeIndex = 3;
        //   break;
        case "data-security-and-privacy":
          activeIndex = 3;
          break;
        case "interpretable-and-explainable-ai":
          activeIndex = 4;
          break;
        default:
          activeIndex = 0;
          hash = "model-accuracy-and-reliability";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "gen-ai-services",
        },
        () => {
          setTimeout(() => {
            document
              .getElementById("custom-react-link-gen-ai-services")
              .click();
          }, 500);
        }
      );
    }
  };

  onSelect = (key) => {
    let linkId;
    switch (Number(key)) {
      case 0:
        linkId = "model-accuracy-and-reliability";
        break;
      case 1:
        linkId = "ai-integration-and-optimization-service";
        break;
      case 2:
        linkId = "governance-and-compliance";
        break;
      // case 3:
      //   linkId = "performance-and-efficiency";
      //   break;
      case 3:
        linkId = "data-security-and-privacy";
        break;
      case 4:
        linkId = "interpretable-and-explainable-ai";
        break;
      default:
        linkId = "model-accuracy-and-reliability";
        break;
    }
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "gen-ai-services",
      },
      () => {
        setTimeout(() => {
          document.getElementById("custom-react-link-gen-ai-services").click();
          window.history.pushState(
            "",
            "",
            `/services/gen-ai-services#${linkId}`
          );
        });
      }
    );
  };
  handleChange = (index) => {
    this.setState({ activeIndex: index });
  };
  render() {
    let menu = this.state.menuItems;
    return (
      <section className="services-content gap-y-half pb-0" id="3">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Generative AI Services</b>
                </h1>
                <p>
                  Transform your enterprise with our advanced Generative AI
                  consulting services. We specialize in integrating open-source
                  Large Language Models (LLMs) into your business processes,
                  enhancing workflow automation, and ensuring robust AI
                  governance. Our approach begins with a detailed assessment of
                  your current systems to identify opportunities for Gen AI
                  integration. We then provide a strategic roadmap outlining key
                  milestones and expected outcomes, ensuring a smooth transition
                  to Gen AI-powered operations.
                  <span id="gen-ai-services" className="pt-1"></span>
                </p>
                <Link
                  id="custom-react-link-gen-ai-services"
                  to={this.state.linkId}
                  className="d-none"
                  smooth={true}
                />
              </div>
            </Col>
          </Row>
          <div className="section-tabs-container watson-api-scroll-container custom-services-img">
            <ScrollMenu
              alignCenter={this.state.alignCenter}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              clickWhenDrag={this.state.clickWhenDrag}
              data={menu}
              dragging={this.state.dragging}
              hideArrows={this.state.hideArrows}
              hideSingleArrow={this.state.hideSingleArrow}
              onSelect={this.onSelect}
              onUpdate={this.onUpdate}
              ref={(el) => (this.menu = el)}
              selected={this.state.selected}
              transition={this.state.transition}
              translate={this.state.translate}
              wheel={this.state.wheel}
            />
          </div>
        </Container>
        <Container
          fluid
          style={{ background: "rgba(122, 121, 121, 0.06)" }}
          className="gap-y"
        >
          <Row>
            <Col xs={12}>
              {this.state.activeIndex === 0 && <ModelAccuracyAndReliability />}
              {this.state.activeIndex === 1 && <AIIntegrationAndOptimizationService />}
              {this.state.activeIndex === 2 && <GovernanceAndCompliance />}
              {/* {this.state.activeIndex === 3 && <PerformanceAndEfficiency />} */}
              {this.state.activeIndex === 3 && <DataSecurityAndPrivacy />}
              {this.state.activeIndex === 4 && (
                <InterpretableAndExplainableAI />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default GenAIServices;
