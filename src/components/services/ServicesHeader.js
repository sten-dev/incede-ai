import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import ServicesImage from "../../img/services/banner-services.png";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ServicePageCards from "../Landing/ServicePageCards";
import ContactModal from '../ContactModal';

let list = [
  // { name: "watsonx Assistant Services", className: "text-initial" },
  // { name: "Watson Discovery Services" },
  // { name: "watsonx Platform Services", className: "text-initial" },
  // { name: "watsonx Orchestrate", className: "text-initial" },
  { name: "Generative AI Services" },
  { name: "Agentic AI Services" },
  { name: "Enterprise BI and Analytics" },
  { name: "Planning and Budgeting" },
  { name: "Applications Development" },
  // { name: "Professional Services" },
];
const MenuItem = ({ text, selected, className }) => {
  return (
    <div
      className={`menu-item ${className ? className : ""} ${
        selected ? "active" : ""
      }`}
    >
      {text}
    </div>
  );
};
export const Menu = (list, selected) =>
  list.map((el, index) => {
    // const { name } = el;
    return (
      <MenuItem
        text={el?.name}
        key={index}
        selected={selected}
        className={el?.className}
      />
    );
  });
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class ServicesHeader extends Component {
  state = {
    email: "",
    showContactModal: false,
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };
  constructor(props) {
    super(props);
    this.state = {
      clickWhenDrag: false,
      alignCenter: false,
      dragging: true,
      hideArrows: false,
      hideSingleArrow: true,
      itemsCount: list.length,
      scrollToSelected: false,
      selected: "0",
      translate: 0,
      transition: 0.3,
      wheel: false,
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }
  onSelect = (key) => {
    this.setState({ selected: key });
    console.log(`onSelect: ${key}`);
    let url = "/services/gen-ai-services";
    switch (Number(key)) {
      // case 0:
      //   url = "/services/watson-assistant-services";
      //   break;
      // case 1:
      //   url = "/services/watson-discovery-services";
      //   break;
      // case 2:
      //   url = "/services/watsonx-platform-services";
      //   break;
      // case 3:
      //   url = "/services/watsonx-orchestrate";
      //   break;
      // case 4:
      //   url = "/services/applications-development";
      //   break;
      // case 5:
      //   url = "/services/professional-services";
      //   break;
      // default:
      //   url = "/services/watson-assistant-services";
      //   break;

      case 0:
        url = "/services/gen-ai-services";
        break;
      case 1:
        url = "/services/ai-agentic-services";
        break;
      case 2:
        url = "/services/enterprise-bi-and-analytics";
        break;
      case 3:
        url = "/services/planning-and-budgeting";
        break;
      case 4:
        url = "/services/applications-development";
        break;
      default:
        url = "/services/gen-ai-services";
        break;
    }
    window.location.href = url;
  };
  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/services/gen-ai-services":
      case "/services/gen-ai-services/":
        this.setState({ selected: "0" });
        break;
      case "/services/ai-agentic-services":
      case "/services/ai-agentic-services/":
        this.setState({ selected: "1" });
        break;
      case "/services/enterprise-bi-and-analytics":
      case "/services/enterprise-bi-and-analytics/":
        this.setState({ selected: "2" });
        break;
      case "/services/planning-and-budgeting":
      case "/services/planning-and-budgeting/":
        this.setState({ selected: "3" });
        break;
      // case "/services/watsonx-orchestrate":
      // case "/services/watsonx-orchestrate/":
      //   this.setState({ selected: "3" });
      //   break;
      case "/services/applications-development":
      case "/services/applications-development/":
        this.setState({ selected: "4" });
        break;
      // case "/services/professional-services":
      // case "/services/professional-services/":
      //   this.setState({ selected: "5" });
      //   break;
      default:
        this.setState({ selected: "0" });
        break;
    }
  };
  render() {
    const menu = this.menuItems;
    return (
      <section className="services-header header-section text-center">
        <Container>
          {/* <Row className="gap-y-quarter"> */}
          {/* <Col lg={8} md={7} sm={12} xs={12}> */}
          <article className="flex justify-content-center align-items-center gap-y-half text-center mt-0 mt-sm-3 mt-lg-4">
            <h4 className="text-white bold pt-0">SERVICES OVERVIEW</h4>
            <h1 className="text-white bold">Builds Outcome-Driven AI</h1>
            <p className="text-white">
              Incede.ai delivers modular AI services—from intelligent agents and
              Gen AI strategy to automated workflows and agile planning. We help
              enterprises streamline operations, boost decision-making, and
              scale transformation by offering targeted solutions or end-to-end
              support tailored to your business needs.
            </p>
          </article>
          {/* <article className="text-left">
                <h1 className="title display-3">Services</h1>
                <h5 className="text-white sub-title">
                  Incede specializes in Generative AI Consulting, Agentic AI Services, Enterprise BI, and Custom Applications Development.
                  We enhance workflow automation, boost productivity, and drive
                  strategic decisions. Discover our innovative services for
                  business transformation and growth. Contact us today to start
                  your journey.
                </h5>
              </article> */}
          {/* </Col> */}
          {/* <Col
              lg={4}
              md={5}
              className="d-none d-md-flex position-initial align-items-center"
            >
              <div className="image-section">
                <img src={ServicesImage} alt="hero" />
              </div>
            </Col> */}
          {/* </Row> */}
        </Container>
        
        <ServicePageCards />
        <Container>
          <Row className='w-50 my-5 d-flex justify-content-between align-items-center mx-auto'>
            <Col xs={12} md={8} className="pr-md-2 mb-2 mb-md-0">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </Col>
            <Col xs={12} md={4} className="pl-md-2">
              <button
                className="btn btn-block bg-secondary text-white"
                onClick={this.handleContactClick}
              >
                Schedule
              </button>
            </Col>
            {/* Contact Modal */}
            <ContactModal
              isOpen={this.state.showContactModal}
              onClose={this.handleModalClose}
              prefillEmail={this.state.email}
            />
          </Row>
        </Container>
        <Container fluid className="section-tabs-container">
          <Container>
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
              scrollToSelected={true}
            />
          </Container>
        </Container>
      </section>
    );
  }
}

export default ServicesHeader;
