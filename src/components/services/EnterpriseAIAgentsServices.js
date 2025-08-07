import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "../../styles/services.scss";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import PrebuiltAgents from "./enterprise-ai-agents-services/PrebuiltAgents";
import CustomAIAgentDevelopment from "./enterprise-ai-agents-services/CustomAIAgentDevelopment";
import ContactModal from '../ContactModal'; // Import ContactModal
import { ServiceContext } from '../../context/ServiceContext';



const serviceSubItems = [
  {
    image: "/img/watson-assistant/design-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/design-services-inactive.png", // Placeholder
    title: "Prebuilt Agents",
    className: "text-initial"
  },
  {
    image: "/img/watson-assistant/development-services.png", // Placeholder
    inactiveImage: "/img/watson-assistant/development-services-inactive.png", // Placeholder
    title: "Custom AI Agent Development",
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

class EnterpriseAIAgentsServices extends Component {
  static contextType = ServiceContext;
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
      linkId: "",
      showContactModal: false, // Add state for ContactModal
    };
  }

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };

  componentDidMount = () => {
    if (window.location.hash.length > 0) {
      // let hash = window.location.hash.split("#")[1];
      let hash = this.context.selectedSubServiceHash;
      let activeIndex = 0;
      let itemIndex = 0;
      switch (hash) {
        case "prebuilt-agents":
          activeIndex = 0;
          itemIndex = 0;
          break;
        case "custom-ai-agent-development":
          activeIndex = 1;
          itemIndex = 1;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          hash = "prebuilt-agents";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(
            serviceSubItems.slice(0, serviceSubItems.length),
            itemIndex
          ),
          linkId: "enterprise-ai-agents-id"
        },
        () => {
          setTimeout(() => {
            document.getElementById("custom-react-link").click();
          }, 1000);
        }
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // debugger
    // Check if the context hash value has changed
    if (
      this.context.selectedSubServiceHash &&
      this.context.selectedSubServiceHash !==
      (prevState._lastContextHash || "")
    ) {
      let hash = this.context.selectedSubServiceHash;
      let activeIndex = 0;
      let itemIndex = 0;
      switch (hash) {
        case "prebuilt-agents":
          activeIndex = 0;
          itemIndex = 0;
          break;
        case "custom-ai-agent-development":
          activeIndex = 1;
          itemIndex = 1;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          break;
      }
      this.setState({
        activeIndex,
        menuItems: Menu(
          serviceSubItems.slice(0, serviceSubItems.length),
          itemIndex
        ),
        _lastContextHash: hash, // Track last context hash to avoid loops
      });
    }
  }

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
        linkId = "prebuilt-agents";
        break;
      case 1:
        linkId = "custom-ai-agent-development";
        break;
      default:
        linkId = "prebuilt-agents";
        break;
    }
     this.setState(
      {
        activeIndex: activeIndex,
        menuItems: menuItems,
        linkId: linkId
      },
      () => {
        setTimeout(() => {
          window.history.pushState(
            "",
            "",
            `/services/enterprise-ai-agents#${linkId}`
          );
          this.context.updateServiceSelection(window.location.pathname,linkId);
          // document.getElementById("custom-react-link").click();
   
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
                <p id="enterprise-ai-agents-id" className="pt-2"></p>
                <h1 className="title text-primary">
                  <b>Enterprise AI Agents</b>
                  <Link
                    id="custom-react-link"
                    to={this.state.linkId}
                    className="d-none"
                    smooth={true}
                  />
                </h1>
                <p>
                  Incede.ai delivers AI Agents that function as autonomous teammates—powered by enterprise logic and foundation models. Integrated with platforms like SAP, Workday, and Salesforce, and embedded in tools like Teams and Slack, they automate high-value tasks where work happens.
                </p>
                <p>
                  With IBM watsonx Orchestrate and Multi-Client Protocol (MCP), we design and deploy multi-agent workflows that coordinate action, accelerate outcomes, and scale across business functions.
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
              {this.state.activeIndex === 0 && <PrebuiltAgents />}
              {this.state.activeIndex === 1 && <CustomAIAgentDevelopment />}
            </Col>
          </Row>
        </Container>
        <ContactModal
          isOpen={this.state.showContactModal}
          onClose={this.handleModalClose}
        />
      </section>
    );
  }
}

export default EnterpriseAIAgentsServices;
