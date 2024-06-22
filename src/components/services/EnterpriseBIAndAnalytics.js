import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-scroll";
import DataStrategyAndManagement from "./enterprise-bi-and-analytics/DataStrategyAndManagement";
import EnterpriseBIImplementation from "./enterprise-bi-and-analytics/EnterpriseBIImplementation";
import OnboardingAndSupport from "./enterprise-bi-and-analytics/OnboardingAndSupport";
import UpgradesAndMigrations from "./enterprise-bi-and-analytics/UpgradesAndMigrations";
import EmbeddedBIConsulting from "./enterprise-bi-and-analytics/EmbeddedBIConsulting";

const subItems = [
  {
    image: "/img/watson-assistant/solution-training.png",
    inactiveImage: "/img/watson-assistant/solution-training-inactive.png",
    title: "Data Strategy and Management",
  },
  {
    image: "/img/watson-assistant/development-services.png",
    inactiveImage: "/img/watson-assistant/development-services-inactive.png",
    title: "Enterprise BI Implementation",
  },
  {
    image: "/img/watson-discovery/smart-document-development.png",
    inactiveImage:
      "/img/watson-discovery/smart-document-development-inactive.png",
    title: "Embedded BI Consulting",
  },
  {
    image: "/img/watson-assistant/integration-development.png",
    inactiveImage: "/img/watson-assistant/integration-development-inactive.png",
    title: "Onboarding and Support",
  },
  {
    image: "/img/watson-assistant/design-services.png",
    inactiveImage: "/img/watson-assistant/design-services-inactive.png",
    title: "Upgrades and Migrations",
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
class EnterpriseBIAndAnalytics extends Component {
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
        case "data-strategy-and-management":
          activeIndex = 0;
          break;
        case "enterprise-bi-implementation":
          activeIndex = 1;
          break;
        case "embedded-bi-consulting":
          activeIndex = 2;
          break;
        case "onboarding-and-support":
          activeIndex = 3;
          break;
        case "upgrades-and-migration":
          activeIndex = 4;
          break;
        default:
          activeIndex = 0;
          hash = "data-strategy-and-management";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(subItems.slice(0, subItems.length), activeIndex),
          linkId: "enterprise-bi-and-analytics",
        },
        () => {
          setTimeout(() => {
            document
              .getElementById("custom-react-link-enterprise-bi-and-analytics")
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
        linkId = "data-strategy-and-management";
        break;
      case 1:
        linkId = "enterprise-bi-implementation";
        break;
      case 2:
        linkId = "embedded-bi-consulting";
        break;
      case 3:
        linkId = "onboarding-and-support";
        break;
      case 4:
        linkId = "upgrades-and-migration";
        break;
      default:
        linkId = "data-strategy-and-management";
        break;
    }
    this.setState(
      {
        activeIndex: Number(key),
        menuItems: Menu(subItems.slice(0, subItems.length), Number(key)),
        linkId: "enterprise-bi-and-analytics",
      },
      () => {
        setTimeout(() => {
          document
            .getElementById("custom-react-link-enterprise-bi-and-analytics")
            .click();
          window.history.pushState(
            "",
            "",
            `/services/enterprise-bi-and-analytics#${linkId}`
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
                  <b>Enterprise BI and Analytics</b>
                </h1>
                <p>
                  Unlock the full potential of your data with our comprehensive
                  Enterprise Business Intelligence (BI) and Analytics consulting
                  services. We specialize in transforming complex data from
                  modern data sources into clear, actionable insights that drive
                  strategic decision-making and business growth. Our team of
                  experts is dedicated to helping you leverage advanced BI and
                  analytics tools to enhance your data strategy, analytics, and
                  overall business performance.
                  <span
                    id="enterprise-bi-and-analytics"
                    className="pt-1"
                  ></span>
                </p>
                <Link
                  id="custom-react-link-enterprise-bi-and-analytics"
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
              {this.state.activeIndex === 0 && <DataStrategyAndManagement />}
              {this.state.activeIndex === 1 && <EnterpriseBIImplementation />}
              {this.state.activeIndex === 2 && <EmbeddedBIConsulting />}
              {this.state.activeIndex === 3 && <OnboardingAndSupport />}
              {this.state.activeIndex === 4 && <UpgradesAndMigrations />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default EnterpriseBIAndAnalytics;
