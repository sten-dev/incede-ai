import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import ServicesImage from "../../img/services/banner-services.png";
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  { name: "Advanced Analytics", className: "text-initial" },
  { name: "Cognos Analytics" },
  { name: "Planning Analytics" },
  { name: "Advanced Visualizations" },
  { name: "Data Warehousing" },
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

class AnalyticsHeader extends Component {
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
      selected: "Retail/Distribution",
      translate: 0,
      transition: 0.3,
      wheel: false,
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }
  onSelect = (key) => {
    this.setState({ selected: key });
    let url = "/services/analytics-services/advanced-analytics";
    switch (Number(key)) {
      case 0:
        url = "/services/analytics-services/advanced-analytics";
        break;
      case 1:
        url = "/services/analytics-services/cognos-analytics";
        break;
      case 2:
        url = "/services/analytics-services/planning-analytics";
        break;
      case 3:
        url = "/services/analytics-services/advanced-visualizations";
        break;
      case 4:
        url = "/services/analytics-services/data-warehousing";
        break;
      default:
        url = "/services/analytics-services/advanced-analytics";
        break;
    }
    window.location.href = url;
  };
  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/services/analytics-services/advanced-analytics":
      case "/services/analytics-services/advanced-analytics/":
        this.setState({ selected: "0" });
        break;
      case "/services/analytics-services/cognos-analytics":
      case "/services/analytics-services/cognos-analytics/":
        this.setState({ selected: "1" });
        break;
      case "/services/analytics-services/planning-analytics":
      case "/services/analytics-services/planning-analytics/":
        this.setState({ selected: "2" });
        break;
      case "/services/analytics-services/advanced-visualizations":
      case "/services/analytics-services/advanced-visualizations/":
        this.setState({ selected: "3" });
        break;
      case "/services/analytics-services/data-warehousing":
      case "/services/analytics-services/data-warehousing/":
        this.setState({ selected: "4" });
        break;
      default:
        this.setState({ selected: "0" });
        break;
    }
  };
  render() {
    const menu = this.menuItems;
    return (
      <>
        <section className="services-header header-section text-center">
          <Container>
            <Row className="gap-y-quarter">
              <Col lg={8} md={7} sm={12} xs={12}>
                <article className="text-left">
                  <h1 className="title display-3">
                    Professional Services
                  </h1>
                  <h5 className="text-white sub-title">
                    {/* Incede's resources are experts in helping organizations
                  understand and incorporate IBM’s watsonx technology. We provide
                  end-to-end capabilities in developing conversational
                  interfaces and cognitive enterprise search applications with
                  watsonx. */}
                  </h5>
                </article>
              </Col>
              <Col lg={4} md={5} className="d-none d-md-block position-initial">
                <div className="image-section">
                  {/* <img src={ServicesImage} alt="hero" /> */}
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
              />
            </Container>
          </Container>
        </section>
      </>
    );
  }
}

export default AnalyticsHeader;
