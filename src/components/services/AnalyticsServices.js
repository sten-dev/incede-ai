import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-scroll";
import AdvancedAnalytics from "./analytics-services/AdvancedAnalytics";
import CognosAnalytics from "./analytics-services/CognosAnalytics";
import PlanningAnalytics from "./analytics-services/PlanningAnalytics";
import AdvancedVisualizations from "./analytics-services/AdvancedVisualizations";
import DataWarehousing from "./analytics-services/DataWarehousing";

const subItems = [
  {
    image: "/img/watson-assistant/design-services.png",
    inactiveImage: "/img/watson-assistant/design-services-inactive.png",
    title: "Advanced Analytics",
    className: "text-initial",
  },
  {
    image: "/img/watson-assistant/development-services.png",
    inactiveImage: "/img/watson-assistant/development-services-inactive.png",
    title: "Cognos Analytics",
    className: "text-initial",
  },
  {
    image: "/img/watson-assistant/channel-development.png",
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png",
    title: "Planning Analytics",
  },
  {
    image: "/img/watson-assistant/integration-development.png",
    inactiveImage: "/img/watson-assistant/integration-development-inactive.png",
    title: "Advanced Visualizations",
  },
  {
    image: "/img/watson-assistant/solution-training.png",
    inactiveImage: "/img/watson-assistant/solution-training-inactive.png",
    title: "Data Warehousing",
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

class AnalyticsServices extends Component {
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
        case "advanced-analytics":
          activeIndex = 0;
          break;
        case "cognos-analytics":
          activeIndex = 1;
          break;
        case "planning-analytics":
          activeIndex = 2;
          break;
        case "advanced-visualizations":
          activeIndex = 3;
          break;
        case "data-warehousing":
          activeIndex = 4;
          break;
        default:
          activeIndex = 0;
          hash = "advanced-analytics";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "analytics-services",
        },
        () => {
          setTimeout(() => {
            document
              .getElementById("custom-react-link-analytics-services")
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
        linkId = "advanced-analytics";
        break;
      case 1:
        linkId = "cognos-analytics";
        break;
      case 2:
        linkId = "planning-analytics";
        break;
      case 3:
        linkId = "advanced-visualizations";
        break;
      case 4:
        linkId = "data-warehousing";
        break;
      default:
        linkId = "advanced-analytics";
        break;
    }
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "analytics-services",
      },
      () => {
        setTimeout(() => {
          document
            .getElementById("custom-react-link-analytics-services")
            .click();
          window.history.pushState(
            "",
            "",
            `/services/analytics-services#${linkId}`
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
        <Link
          id="custom-react-link-analytics-services"
          to={this.state.linkId}
          className="d-none"
          smooth={true}
        />
        <p id="analytics-services" className="pt-3"></p>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <h1 className="title mb-0 text-primary text-uppercase">
                  <b>Analytics Services</b>
                </h1>
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
              {this.state.activeIndex === 0 && <AdvancedAnalytics />}
              {this.state.activeIndex === 1 && <CognosAnalytics />}
              {this.state.activeIndex === 2 && <PlanningAnalytics />}
              {this.state.activeIndex === 3 && <AdvancedVisualizations />}
              {this.state.activeIndex === 4 && <DataWarehousing />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AnalyticsServices;
