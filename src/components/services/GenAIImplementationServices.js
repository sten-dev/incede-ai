import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import AIRoadmapping from "./gen-ai-implementation-services/AIRoadmapping";
import PrivateAI from "./gen-ai-implementation-services/PrivateAI";
import AIPoweredWebAgent from "./gen-ai-implementation-services/AIPoweredWebAgent";
import CustomFoundationModelTraining from "./gen-ai-implementation-services/CustomFoundationModelTraining";


const serviceSubItems = [
  {
    image: "/img/watson-assistant/design-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/design-services-inactive.png", // Placeholder
    title: "AI Roadmapping",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/development-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/development-services-inactive.png", // Placeholder
    title: "Private AI",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/channel-development.png", // Placeholder
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png", // Placeholder
    title: "AI-Powered Web Agent",
    className: "text-initial"

  },
  {
    image: "/img/watson-assistant/integration-development.png", // Placeholder
    inactiveImage: "/img/watson-assistant/integration-development-inactive.png", // Placeholder
    title: "Custom Foundation Model Training",
    className: "text-initial"
  }
];

export const Menu = (serviceSubItems, activeIndex) =>
  serviceSubItems.map((x, i) => {
    let data = x;
    return (
      <div className="wwd-list-card api-services-cards mb-0" key={i}>
        <ServicesSmallCardsList
          service={data}
          index={i}
          isActive={activeIndex === i ? true : false}
          onItemClick={() => { }}
        />
      </div>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class GenAIImplementationServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      clickWhenDrag: false,
      alignCenter: false,
      dragging: true,
      hideArrows: false,
      hideSingleArrow: true,
      itemsCount: serviceSubItems.length,
      scrollToSelected: false,
      selected: 0,
      translate: 0,
      transition: 0.3,
      wheel: false,
      menuItems: Menu(serviceSubItems.slice(0, serviceSubItems.length), 0),
      linkId: ""
    };
  }

  componentDidMount = () => {
    if (window.location.hash.length > 0) {
      let hash = window.location.hash.split("#")[1];
      let activeIndex = 0;
      let itemIndex = 0;
      switch (hash) {
        case "ai-roadmapping":
          activeIndex = 0;
          itemIndex = 0;
          break;
        case "private-ai":
          activeIndex = 1;
          itemIndex = 1;
          break;
        case "ai-powered-web-agent":
          activeIndex = 2;
          itemIndex = 2;
          break;
        case "custom-foundation-model-training":
          activeIndex = 3;
          itemIndex = 3;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          hash = "ai-roadmapping";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(
            serviceSubItems.slice(0, serviceSubItems.length),
            itemIndex
          ),
          linkId: "gen-ai-implementation-id"
        },
        () => {
          setTimeout(() => {
            document.getElementById("custom-react-link").click();
          }, 1000);
        }
      );
    }
  };

  handleChange = index => {
    this.setState({ activeIndex: index });
  };

  onSelect = key => {
    let activeIndex = Number(key);
    let menuItems = Menu(
      serviceSubItems.slice(0, serviceSubItems.length),
      Number(key)
    );
    let linkId;
    switch (Number(key)) {
      case 0:
        linkId = "ai-roadmapping";
        break;
      case 1:
        linkId = "private-ai";
        break;
      case 2:
        linkId = "ai-powered-web-agent";
        break;
      case 3:
        linkId = "custom-foundation-model-training";
        break;
      default:
        linkId = "ai-roadmapping";
        break;
    }
    this.setState(
      {
        activeIndex: activeIndex,
        menuItems: menuItems,
        linkId: "gen-ai-implementation-id"
      },
      () => {
        setTimeout(() => {
          document.getElementById("custom-react-link").click();
          window.history.pushState(
            "",
            "",
            `/services/gen-ai-implementation#${linkId}`
          );
        });
      }
    );
  };

  render() {
    let menu = this.state.menuItems;
    return (
      <section className="services-content gap-y-half pb-0" id="gen">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <p id="gen-ai-implementation-id" className="pt-2"></p>
                <h1 className="title text-primary">
                  <b>Gen AI Implementation</b>
                  <Link
                    id="custom-react-link"
                    to={this.state.linkId}
                    className="d-none"
                    smooth={true}
                  />
                </h1>
                <p>
                  Incede.ai partners with enterprises to operationalize Generative AI through a full-service lifecycle—starting with readiness assessments, strategic AI roadmapping, and secure model training, through to robust deployment. Our solutions span: private AI for intelligent document understanding; AI-powered website assistants that deliver real-time support without redesign; and advanced implementations of retrieval-augmented generation (RAG), summarization, and classification. Together, these accelerate insight, automation, and decision-making across the enterprise.
                </p>
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
              ref={el => (this.menu = el)}
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
              {this.state.activeIndex === 0 && <AIRoadmapping />}
              {this.state.activeIndex === 1 && <PrivateAI />}
              {this.state.activeIndex === 2 && <AIPoweredWebAgent />}
              {this.state.activeIndex === 3 && <CustomFoundationModelTraining />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default GenAIImplementationServices;
