import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services.scss";
import ServicesSmallCardsList from "./ServicesSmallCardsList";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link, animateScroll as scroll } from "react-scroll";

const assistantSubItems = [
  {
    image: "/img/watsonx-orchestrate/orchestrate.png",
    inactiveImage: "/img/watsonx-orchestrate/orchestrate-inactive.png",
    title: "watsonx ORCHESTRATE",
    className: "text-initial",
  },
];
export const Menu = (assistantSubItems, activeIndex) =>
  assistantSubItems.map((x, i) => {
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

class WatsonxOrchestrate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      clickWhenDrag: false,
      alignCenter: false,
      dragging: true,
      hideArrows: false,
      hideSingleArrow: true,
      itemsCount: assistantSubItems.length,
      scrollToSelected: false,
      selected: 0,
      translate: 0,
      transition: 0.3,
      wheel: false,
      menuItems: Menu(assistantSubItems.slice(0, assistantSubItems.length), 0),
      linkId: "",
    };
  }
  componentDidMount = () => {
    if (window.location.hash.length > 0) {
      let hash = window.location.hash.split("#")[1];
      let activeIndex = 0;
      let itemIndex = 0;
      switch (hash) {
        case "watson-orchestrate":
          activeIndex = 0;
          itemIndex = 0;
          break;
        default:
          activeIndex = 0;
          itemIndex = 0;
          hash = "watson-orchestrate";
          break;
      }
      this.setState(
        {
          activeIndex,
          menuItems: Menu(
            assistantSubItems.slice(0, assistantSubItems.length),
            itemIndex
          ),
          linkId: "watson-orchestrate-id",
        },
        () => {
          setTimeout(() => {
            document.getElementById("custom-react-link").click();
          }, 1000);
        }
      );
    }
  };

  handleChange = (index) => {
    this.setState({ activeIndex: index });
  };
  onSelect = (key) => {
    let activeIndex = Number(key);
    let menuItems = Menu(
      assistantSubItems.slice(0, assistantSubItems.length),
      Number(key)
    );
    let linkId;
    switch (Number(key)) {
      case 0:
        linkId = "watson-orchestrate";
        break;
      default:
        linkId = "watson-orchestrate";
        break;
    }
    this.setState(
      {
        activeIndex: activeIndex,
        menuItems: menuItems,
        linkId: "watson-orchestrate-id",
      },
      () => {
        setTimeout(() => {
          document.getElementById("custom-react-link").click();
          window.history.pushState(
            "",
            "",
            `/services/watsonx-orchestrate#${linkId}`
          );
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
                <p id="watson-orchestrate-id" className="pt-2"></p>
                <h1 className="title text-primary">
                  <b>watsonx ORCHESTRATE</b>
                  <Link
                    id="custom-react-link"
                    to={this.state.linkId}
                    className="d-none"
                    smooth={true}
                  />
                </h1>
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
              {this.state.activeIndex === 0 && (
                <Container>
                  <Row>
                    <Col>
                      <h4>
                        <b className="color-grey">RETHINK YOUR WORK DAY</b>
                      </h4>

                      <div className="content">
                        <p>
                          In an era where agility and efficiency define market
                          leaders, Incede delivers AI automation with watsonx
                          Orchestrate as a pivotal force in transforming
                          business operations. Our robust solutions harness the
                          power of AI to automate complex workflows, enabling
                          your organization to focus on strategic growth and
                          innovation.
                        </p>
                      </div>
                    </Col>
                    {/* <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={5}
                      className="mt-4 mt-lg-0 d-flex align-items-center"
                    >
                      <div className="image-section">
                        <img src={picture2} alt="support image" />
                      </div>
                    </Col> */}
                    <Col xs={12}>
                      <div className="content-outcomes">
                        <h5>
                          <b className="color-grey">Outcomes</b>
                        </h5>
                        <ul>
                          <li>
                            <p>
                              Redirect focus from routine tasks to core business
                              strategies, significantly boosting organizational
                              output.
                            </p>
                          </li>
                          <li>
                            <p>
                              Minimize expenses associated with manual processes
                              and reduce the scope for human error, resulting in
                              substantial cost savings.
                            </p>
                          </li>
                          <li>
                            <p>
                              Achieve higher precision in process execution,
                              leading to improved quality and customer
                              satisfaction.
                            </p>
                          </li>
                          <li>
                            <p>
                              Rapidly adapt to market changes and operational
                              demands with flexible and responsive automation
                              tools.
                            </p>
                          </li>
                          <li>
                            <p>
                              Leverage detailed analytics to make informed
                              strategic decisions that propel your business
                              forward.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Container>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default WatsonxOrchestrate;
