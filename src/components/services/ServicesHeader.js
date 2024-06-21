import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import ServicesImage from "../../img/services/banner-services.png";
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  // { name: "watsonx Assistant Services", className: "text-initial" },
  // { name: "Watson Discovery Services" },
  // { name: "watsonx Platform Services", className: "text-initial" },
  // { name: "watsonx Orchestrate", className: "text-initial" },
  { name: "Gen AI Services" },
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
    let url = "/services/watson-assistant-services";
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
        url = "/services/enterprise-bi-and-analytics";
        break;
      case 2:
        url = "/services/planning-and-budgeting";
        break;
      case 3:
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
      case "/services/enterprise-bi-and-analytics":
      case "/services/enterprise-bi-and-analytics/":
        this.setState({ selected: "1" });
        break;
      case "/services/planning-and-budgeting":
      case "/services/planning-and-budgeting/":
        this.setState({ selected: "2" });
        break;
      // case "/services/watsonx-orchestrate":
      // case "/services/watsonx-orchestrate/":
      //   this.setState({ selected: "3" });
      //   break;
      case "/services/applications-development":
      case "/services/applications-development/":
        this.setState({ selected: "3" });
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
          <Row className="gap-y-quarter">
            <Col lg={8} md={7} sm={12} xs={12}>
              <article className="text-left">
                <h1 className="title display-3">Services</h1>
                <h5 className="text-white sub-title">
                  Incede helps organizations integrate Gen AI to enhance
                  business processes and drive innovation. We offer
                  comprehensive solutions from strategy to implementation.
                  Specializing in enterprise business intelligence and planning
                  analytics consulting, we provide advanced data analytics,
                  visualization, reporting, and financial planning and budgeting
                  services. Our expertise ensures optimized performance,
                  streamlined operations, and informed decision-making, driving
                  sustained growth and supporting strategic initiatives.
                </h5>
              </article>
            </Col>
            <Col lg={4} md={5} className="d-none d-md-flex position-initial align-items-center">
              <div className="image-section">
                <img src={ServicesImage} alt="hero" />
              </div>
            </Col>
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
