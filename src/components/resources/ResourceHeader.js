import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ResourceImage from "../../img/industry-solution/banner-industry.png";

let list = [
  // { name: "Resource Library" },
  // { name: "Events" },
  { name: "Case Studies" },
];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

export class ResourceHeader extends Component {
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
      selected: "Resource Library",
      translate: 0,
      transition: 0.3,
      wheel: false,
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onSelect = (key) => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    let url = "/resources/resource-library";
    switch (key) {
      case "Resource Library":
        url = "/resources/resource-library";
        break;
      case "Events":
        url = "/resources/events";
        break;
      case "Case Studies":
        url = "/resources/case-studies";
        break;
      default:
        url = "/resources/resource-library";
        break;
    }
    window.location.href = url;
  };

  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/resources/resource-library":
      case "/resources/resource-library/":
        this.setState({ selected: "Resource Library" });
        break;
      case "/resources/events":
      case "/resources/events/":
        this.setState({ selected: "Events" });
        break;
      case "/resources/case-studies":
      case "/resources/case-studies/":
        this.setState({ selected: "Case Studies" });
        break;
      default:
        this.setState({ selected: "Resource Library" });
        break;
    }
  };

  render() {
    const menu = this.menuItems;
    return (
      <section className="solutions-header header-section text-center">
        <Container>
          <Row className="gap-y-quarter">
            <Col lg={8} md={7} sm={12} xs={12}>
              <article className="text-left">
                <h1 className="title display-3">Resources</h1>
                <h5 className="text-white sub-title">
                  Incede's resources are experts in helping organizations
                  understand and incorporate IBM's watsonx technology. We provide
                  end-to-end capabilities in developing conversational
                  interfaces and cognitive enterprise search applications with
                  watsonx.
                </h5>
              </article>
            </Col>
            <Col lg={4} md={5} className="d-none d-md-block position-initial">
              <div className="image-section solutions-header-image">
                <img src={ResourceImage} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* <Container fluid className="section-tabs-container">
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
        </Container> */}
      </section>
    );
  }
}

export default ResourceHeader;
