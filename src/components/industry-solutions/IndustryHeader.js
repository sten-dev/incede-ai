import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  { name: "Retail/Distribution" },
  { name: "Industrial/Manufacturing" },
  { name: "Banking & Insurance" },
  { name: "Communications & Services" }
];
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });
const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class IndustryHeader extends Component {
  constructor(props) {
    super(props);
    this.menu = null;

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
      wheel: false
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }
  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    let url = "/industries/retail-distribution";
    switch (key) {
      case "Retail/Distribution":
        url = "/industries/retail-distribution";
        break;
      case "Industrial/Manufacturing":
        url = "/industries/industrial-manufacturing";
        break;
      case "Banking & Insurance":
        url = "/industries/banking-insurance";
        break;
      case "Communications & Services":
        url = "/industries/communications-services";
        break;

      default:
        url = "/industries/retail-distribution";
        break;
    }
    window.location.href = url;
  };
  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/industries/retail-distribution":
        this.setState({ selected: "Retail/Distribution" });
        break;
      case "/industries/industrial-manufacturing":
        this.setState({ selected: "Industrial/Manufacturing" });
        break;
      case "/industries/banking-insurance":
        this.setState({ selected: "Banking & Insurance" });
        break;
      case "/industries/communications-services":
        this.setState({ selected: "Communications & Services" });
        break;
      default:
        this.setState({ selected: "Retail/Distribution" });
        break;
    }
  };
  render() {
    const menu = this.menuItems;
    return (
      <section className="header-section text-center">
        <Container>
          <br />
          <br />
          <Row>
            <Col className="text-left">
              <p className="mb-1 display-3">Industry</p>
              <p className="my-0 h3">Solutions</p>
            </Col>
          </Row>
          <br />
          <br />
          <br />

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
        </Container>
      </section>
    );
  }
}

export default IndustryHeader;
