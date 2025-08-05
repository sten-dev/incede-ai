import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import PrebuiltPlanningTemplates from "./planning-budgeting-analytics-services/PrebuiltPlanningTemplates";
import CollaborativeForecastingScenarioModeling from "./planning-budgeting-analytics-services/CollaborativeForecastingScenarioModeling";
import AIPoweredAnalytics from "./planning-budgeting-analytics-services/AIPoweredAnalytics";

const serviceSubItems = [
  {
    image: "/img/watson-assistant/design-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/design-services-inactive.png", // Placeholder
    title: "Prebuilt Planning Templates",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/development-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/development-services-inactive.png", // Placeholder
    title: "Collaborative Forecasting & Scenario Modeling",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/channel-development.png", // Placeholder
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png", // Placeholder
    title: "AI-Powered Analytics"
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

class PlanningBudgetingAnalyticsServices extends Component {
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
        case "prebuilt-planning-templates":
          activeIndex = 0;
          itemIndex = 0;
          break;
        case "collaborative-forecasting-scenario-modeling":
          activeIndex = 1;
          itemIndex = 1;
          break;
        case "ai-powered-analytics":
          activeIndex = 2;
          itemIndex = 2;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          hash = "prebuilt-planning-templates";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(
            serviceSubItems.slice(0, serviceSubItems.length),
            itemIndex
          ),
          linkId: "planning-budgeting-analytics-id"
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
        linkId = "prebuilt-planning-templates";
        break;
      case 1:
        linkId = "collaborative-forecasting-scenario-modeling";
        break;
      case 2:
        linkId = "ai-powered-analytics";
        break;
      default:
        linkId = "prebuilt-planning-templates";
        break;
    }
    this.setState(
      {
        activeIndex: activeIndex,
        menuItems: menuItems,
        linkId: "planning-budgeting-analytics-id"
      },
      () => {
        setTimeout(() => {
          document.getElementById("custom-react-link").click();
          window.history.pushState(
            "",
            "",
            `/services/planning-budgeting-and-analytics#${linkId}`
          );
        });
      }
    );
  };

  render() {
    let menu = this.state.menuItems;
    return (
      <section className="services-content gap-y-half pb-0" id="3">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <p id="planning-budgeting-analytics-id" className="pt-2"></p>
                <h1 className="title text-primary">
                  <b>Planning Budgeting and Analytics</b>
                  <Link
                    id="custom-react-link"
                    to={this.state.linkId}
                    className="d-none"
                    smooth={true}
                  />
                </h1>
                <p>
                  Incede.ai helps organizations modernize their planning and analytics by unifying data, models, and users into a single ecosystem. We empower teams with collaborative forecasting, dynamic scenario modeling, and real-time insights so they can make faster, smarter decisions.
                </p>
                <p>
                  Our solutions combine enterprise-grade planning tools with GenAI-powered analytics assistants that deliver clear, explainable answers in everyday language. From agile budgeting to insight generation, Incede.ai enables business leaders to confidently plan, adapt, and scale with precision, built on IBM’s trusted analytics platforms and tailored to your operational needs.
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
              {this.state.activeIndex === 0 && <PrebuiltPlanningTemplates />}
              {this.state.activeIndex === 1 && <CollaborativeForecastingScenarioModeling />}
              {this.state.activeIndex === 2 && <AIPoweredAnalytics />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PlanningBudgetingAnalyticsServices;
