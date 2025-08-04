import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-scroll";
import ImplementationAndCustomizationServices from "./ai-assistant-services/ImplementationAndCustomizationServices";
import AutomationAndEfficiencySolutions from "./ai-assistant-services/AutomationAndEfficiencySolutions";
import TrainingAndSupportPrograms from "./ai-assistant-services/TrainingAndSupportPrograms";
import SecurityAndInnovationWorkshops from "./ai-assistant-services/SecurityAndInnovationWorkshops";

const subItems = [
  {
    image: "/img/watson-assistant/development-services.png",
    inactiveImage: "/img/watson-assistant/development-services-inactive.png",
    title: "Implementation and Customization Services",
  },
  {
    image: "/img/watson-assistant/integration-development.png",
    inactiveImage: "/img/watson-assistant/integration-development-inactive.png",
    title: "Automation and Efficiency Solutions",
  },
  {
    image: "/img/watson-assistant/solution-training.png",
    inactiveImage: "/img/watson-assistant/solution-training-inactive.png",
    title: "Training and Support Programs",
  },
  {
    image: "/img/watson-assistant/design-services.png",
    inactiveImage: "/img/watson-assistant/design-services-inactive.png",
    title: "Security and Innovation Workshops",
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
class AIAssistantServices extends Component {
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
        case "implementation-and-customization-services":
          activeIndex = 0;
          break;
        case "automation-and-efficiency-solutions":
          activeIndex = 1;
          break;
        case "training-and-support-programs":
          activeIndex = 2;
          break;
        case "security-and-innovation-workshops":
          activeIndex = 3;
          break;
        default:
          activeIndex = 0;
          hash = "implementation-and-customization-services";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "ai-agentic-services",
        },
        () => {
          setTimeout(() => {
            document
              .getElementById("custom-react-link-ai-agentic-services")
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
        linkId = "implementation-and-customization-services";
        break;
      case 1:
        linkId = "automation-and-efficiency-solutions";
        break;
      case 2:
        linkId = "training-and-support-programs";
        break;
      case 3:
        linkId = "security-and-innovation-workshops";
        break;
      default:
        linkId = "implementation-and-customization-services";
        break;
    }
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "ai-agentic-services",
      },
      () => {
        setTimeout(() => {
          document
            .getElementById("custom-react-link-ai-agentic-services")
            .click();
          window.history.pushState(
            "",
            "",
            `/services/ai-agentic-services#${linkId}`
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
                  <b>Agentic AI Services</b>
                </h1>
                <p>
                  At Incede, we leverage our years of experience to deliver
                  cutting-edge Agentic AI services tailored to drive enterprise
                  productivity. With deep expertise in IBM's watsonx platform,
                  we help organizations implement intelligent agents that
                  transform business operations through task automation,
                  orchestration, and seamless integration.
                </p>
                <p>
                  Our Agentic AI consulting services utilize IBM watsonx
                  Orchestrate to deploy autonomous agents that streamline
                  workflows and enhance operational efficiency across
                  departments like HR, customer service, and IT. Using a robust
                  library of pre-built actions, we customize each solution to
                  your specific needs—offering full integration support, ongoing
                  optimization, and scalable architectures that evolve with your
                  business.
                  <span id="ai-agentic-services" className="pt-1"></span>
                </p>
                <Link
                  id="custom-react-link-ai-agentic-services"
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
              {this.state.activeIndex === 0 && (
                <ImplementationAndCustomizationServices />
              )}
              {this.state.activeIndex === 1 && (
                <AutomationAndEfficiencySolutions />
              )}
              {this.state.activeIndex === 2 && <TrainingAndSupportPrograms />}
              {this.state.activeIndex === 3 && (
                <SecurityAndInnovationWorkshops />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AIAssistantServices;
