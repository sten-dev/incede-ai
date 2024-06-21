import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-scroll";
import IBMPlanningAnalyticsImplementation from "./planning-and-budgeting/IBMPlanningAnalyticsImplementation";
import CustomizationAndIntegration from "./planning-and-budgeting/CustomizationAndIntegration";
import TrainingAndEnablement from "./planning-and-budgeting/TrainingAndEnablement";
import PerformanceOptimization from "./planning-and-budgeting/PerformanceOptimization";

const subItems = [
  {
    image: "/img/watson-assistant/channel-development.png",
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png",
    title: "IBM Planning Analytics Implementation",
  },
  {
    image: "/img/watson-discovery/smart-document-development.png",
    inactiveImage:
      "/img/watson-discovery/smart-document-development-inactive.png",
    title: "Customization and Integration",
  },
  {
    image: "/img/watson-assistant/development-services.png",
    inactiveImage: "/img/watson-assistant/development-services-inactive.png",
    title: "Training and Enablement",
  },
  {
    image: "/img/watsonx-orchestrate/orchestrate.png",
    inactiveImage: "/img/watsonx-orchestrate/orchestrate-inactive.png",
    title: "Performance Optimization",
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
class PlanningAndBudgeting extends Component {
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
        case "ibm-planning-analytics-implementation":
          activeIndex = 0;
          break;
        case "customization-and-integration":
          activeIndex = 1;
          break;
        case "training-and-enablement":
          activeIndex = 2;
          break;
        case "performance-optimization":
          activeIndex = 3;
          break;
        default:
          activeIndex = 0;
          hash = "ibm-planning-analytics-implementation";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "planning-and-budgeting",
        },
        () => {
          setTimeout(() => {
            document
              .getElementById("custom-react-link-planning-and-budgeting")
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
        linkId = "ibm-planning-analytics-implementation";
        break;
      case 1:
        linkId = "customization-and-integration";
        break;
      case 2:
        linkId = "training-and-enablement";
        break;
      case 3:
        linkId = "performance-optimization";
        break;
      default:
        linkId = "ibm-planning-analytics-implementation";
        break;
    }
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "planning-and-budgeting",
      },
      () => {
        setTimeout(() => {
          document
            .getElementById("custom-react-link-planning-and-budgeting")
            .click();
          window.history.pushState(
            "",
            "",
            `/services/planning-and-budgeting#${linkId}`
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
                  <b>Planning and Budgeting</b>
                </h1>
                <p>
                  Maximize the efficiency of your financial planning, budgeting,
                  and forecasting processes with our specialized consulting
                  services for IBM Planning Analytics. Our team of experts is
                  dedicated to helping you implement and optimize IBM Planning
                  Analytics, ensuring you achieve accurate, insightful, and
                  strategic financial planning.
                  <span id="planning-and-budgeting" className="pt-1"></span>
                </p>
                <Link
                  id="custom-react-link-planning-and-budgeting"
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
                <IBMPlanningAnalyticsImplementation />
              )}
              {this.state.activeIndex === 1 && <CustomizationAndIntegration />}
              {this.state.activeIndex === 2 && <TrainingAndEnablement />}
              {this.state.activeIndex === 3 && <PerformanceOptimization />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PlanningAndBudgeting;
