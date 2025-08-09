import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link, animateScroll as scroll } from "react-scroll";

// Import sub-components for each tab
import ProcessMapping from "./ai-powered-bpa-services/ProcessMapping";
import GenAIAutomation from "./ai-powered-bpa-services/GenAIAutomation";
import ApplicationIntegration from "./ai-powered-bpa-services/ApplicationIntegration";

const serviceSubItems = [
  {
    image: "/img/watson-assistant/design-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/design-services-inactive.png", // Placeholder
    title: "Process Mapping",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/development-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/development-services-inactive.png", // Placeholder
    title: "Gen AI + Automation",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/channel-development.png", // Placeholder
    inactiveImage: "/img/watson-assistant/channel-development-inactive.png", // Placeholder
    title: "Application Integration",
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

class AIPoweredBPAServices extends Component {
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
        case "process-mapping":
          activeIndex = 0;
          itemIndex = 0;
          break;
        case "gen-ai-automation":
          activeIndex = 1;
          itemIndex = 1;
          break;
        case "application-integration":
          activeIndex = 2;
          itemIndex = 2;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          hash = "process-mapping";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(
            serviceSubItems.slice(0, serviceSubItems.length),
            itemIndex
          ),
          linkId: "ai-powered-bpa-id"
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
        linkId = "process-mapping";
        break;
      case 1:
        linkId = "gen-ai-automation";
        break;
      case 2:
        linkId = "application-integration";
        break;
      default:
        linkId = "process-mapping";
        break;
    }
    this.setState(
      {
        activeIndex: activeIndex,
        menuItems: menuItems,
        linkId: "ai-powered-bpa-id"
      },
      () => {
        setTimeout(() => {
          document.getElementById("custom-react-link").click();
          window.history.pushState(
            "",
            "",
            `/services/ai-powered-business-process-automation#${linkId}`
          );
        });
      }
    );
  };

  render() {
    let menu = this.state.menuItems;
    return (
      <section className="services-content gap-y-half pb-0" id="ai">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="content">
                <p id="ai-powered-bpa-id" className="pt-2"></p>
                <h1 className="title text-primary">
                  <b>AI-Powered Business Process Automation</b>
                  <Link
                    id="custom-react-link"
                    to={this.state.linkId}
                    className="d-none"
                    smooth={true}
                  />
                </h1>
                <p>
                  Incede.ai accelerates enterprise operations by automating high-impact workflows across departments without requiring system overhauls. From approvals to document handling, our intelligent automation integrates with platforms like SAP, Salesforce, Workday, ServiceNow and many more enterprise or home-grown applications.
                </p>
                <p>
                  Using GenAI, we go beyond data movement, extracting intent, applying real-time logic, and scaling decisions. Built on IBM Business Automation Workflow, our solutions deliver measurable impact through shorter cycles, lower costs, and enterprise-grade compliance.
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
              {this.state.activeIndex === 0 && <ProcessMapping />}
              {this.state.activeIndex === 1 && <GenAIAutomation />}
              {this.state.activeIndex === 2 && <ApplicationIntegration />}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AIPoweredBPAServices;
