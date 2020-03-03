import React from "react";
import { Row, Col, Container } from "reactstrap";
import SolutionImage from "../../img/solutions/banner-solution.png"
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  { name: "Customer Service" },
  { name: "Human Resource Services" },
  { name: "IT Service Desk" },
  { name: "Sales Support" }
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

class SolutionsHeader extends React.Component {
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
      wheel: false
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    let url = "/solutions/customer-service";
    switch (key) {
      case "Customer Service":
        url = "/solutions/customer-service";
        break;
      case "Human Resource Services":
        url = "/solutions/human-resource-services";
        break;
      case "IT Service Desk":
        url = "/solutions/it-service-desk";
        break;
      case "Sales Support":
        url = "/solutions/sales-support-solutions";
        break;
      default:
        url = "/solutions/customer-service";
        break;
    }
    window.location.href = url;
  };

  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/solutions/customer-service":
        this.setState({ selected: "Customer Service" });
        break;
      case "/solutions/human-resource-services":
        this.setState({ selected: "Human Resource Services" });
        break;
      case "/solutions/it-service-desk":
        this.setState({ selected: "IT Service Desk" });
        break;
      case "/solutions/sales-support-solutions":
        this.setState({ selected: "Sales Support" });
        break;
      default:
        this.setState({ selected: "Customer Service" });
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
            <Col lg={8} md={7} sm={12} xs={12}>
              <article className="gap-y-half  text-left mt-0 mt-sm-3">
                <h1 className="title">
                  Solutions
          </h1>
                <h5 className="text-white sub-title">
                  The maturity and sophistication of AI is establishing a new standard for next-generation services.  Enterprise search and AI with chat solutions are enabling organizations to re-engage where resource constraints or stressed business processes were barriers to accessing the organization’s full knowledgebase and providing the ideal user experience.  Natural language understanding and natural language processing creates a personalized exchange that encourages asking questions and finding answers that everyone can trust.
          </h5>
              </article>
            </Col>
            <Col lg={4} md={5} className="d-none d-md-block position-initial">
              <div className="image-section gap-y">
                <img className="w-100" src={SolutionImage} alt="hero" />
              </div>
            </Col>
          </Row>
          <br />
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
              ref={el => (this.menu = el)}
              selected={this.state.selected}
              transition={this.state.transition}
              translate={this.state.translate}
              wheel={this.state.wheel}
            />
          </Container>
        </Container>
      </section>
    );
  }
}

export default SolutionsHeader;


