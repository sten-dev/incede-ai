import React from "react";
import { Row, Col, Container } from "reactstrap";
import SolutionImage from "../../img/solutions/banner-solution.png";
import ScrollMenu from "react-horizontal-scrolling-menu";

let list = [
  { name: "Resellers & Distributors AI Knowledge Base Self-Service" },
  { name: "Consumer AI Self-Service" },
  { name: "Employee AI Self-Service" },
  { name: "Mass Tort & Class Action Fees Management" },
  { name: "Planning Analytics Managed Service" },
  // { name: "Customer Service" },
  // { name: "Human Resource Services" },
  // { name: "IT Service Desk" },
  // { name: "Sales Support" }
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
      wheel: false,
    };
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onSelect = (key) => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
    let url = "/solutions/reseller-distributor-service";
    switch (key) {
      case "Resellers & Distributors AI Knowledge Base Self-Service":
        url = "/solutions/reseller-distributor-service";
        break;
      case "Consumer AI Self-Service":
        url = "/solutions/customer-service";
        break;
      case "Employee AI Self-Service":
        url = "/solutions/human-resource-services";
        break;
      case "Mass Tort & Class Action Fees Management":
        url = "/solutions/mass-tort-service";
        break;
      case "Planning Analytics Managed Service":
        url = "/solutions/planning-analytics-service";
        break;
      // case "Customer Service":
      //   url = "/solutions/customer-service";
      //   break;
      // case "Human Resource Services":
      //   url = "/solutions/human-resource-services";
      //   break;
      // case "IT Service Desk":
      //   url = "/solutions/it-service-desk";
      //   break;
      // case "Sales Support":
      //   url = "/solutions/sales-support-solutions";
      //   break;
      default:
        url = "/solutions/reseller-distributor-service";
        break;
    }
    window.location.href = url;
  };

  componentDidMount = () => {
    let path = window.location.pathname;
    switch (path) {
      case "/solutions/reseller-distributor-service":
      case "/solutions/reseller-distributor-service/":
        this.setState({
          selected: "Resellers & Distributors AI Knowledge Base Self-Service",
        });
        break;
      case "/solutions/customer-service":
      case "/solutions/customer-service/":
        this.setState({ selected: "Consumer AI Self-Service" });
        break;
      case "/solutions/human-resource-services":
      case "/solutions/human-resource-services/":
        this.setState({ selected: "Employee AI Self-Service" });
        break;
      case "/solutions/mass-tort-service":
      case "/solutions/mass-tort-service/":
        this.setState({ selected: "Mass Tort & Class Action Fees Management" });
        break;
      case "/solutions/planning-analytics-service":
      case "/solutions/planning-analytics-service/":
        this.setState({ selected: "Planning Analytics Managed Service" });
        break;
      // case "/solutions/customer-service":
      // case "/solutions/customer-service/":
      //   this.setState({ selected: "Customer Service" });
      //   break;
      // case "/solutions/human-resource-services":
      // case "/solutions/human-resource-services/":
      //   this.setState({ selected: "Human Resource Services" });
      //   break;
      // case "/solutions/it-service-desk":
      // case "/solutions/it-service-desk/":
      //   this.setState({ selected: "IT Service Desk" });
      //   break;
      // case "/solutions/sales-support-solutions":
      // case "/solutions/sales-support-solutions/":
      //   this.setState({ selected: "Sales Support" });
      //   break;
      default:
        this.setState({
          selected: "Resellers & Distributors AI Knowledge Base Self-Service",
        });
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
                <h1 className="title display-3">Solutions</h1>
                <h5 className="text-white sub-title">
                  Incede puts IBM Watson to work in solution areas that deliver
                  real value for the business.
                </h5>
              </article>
            </Col>
            <Col lg={4} md={5} className="d-none d-md-block position-initial">
              <div className="image-section solutions-header-image">
                <img src={SolutionImage} alt="hero" />
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
    );
  }
}

export default SolutionsHeader;
