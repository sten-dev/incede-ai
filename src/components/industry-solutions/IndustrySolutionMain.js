import React from "react";
import IndustryManufacturing from "./IndustryManufacturing";
import Banking from "./Banking";
import Communication from "./Communication";
import RetailDistribution from "./RetailDistribution";
import ViewMore from "./ViewMore";
import { Container, Row, Col } from "reactstrap";
import "../../styles/industry-solution.scss";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

class IndustrySolutionMain extends React.Component {
  refs;
  constructor(props) {
    super(props);
    this.state = { activeIndex: 1 };
  }

  handelClick = index => {
    this.setState({ activeIndex: index }, () => {
      scroller.scrollTo(String(index));
    });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <section className="industry-solution">
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
            <br />
            <Row className="list-scroll">
              <Col>
                <p
                  id="retail-distribution"
                  onClick={() => this.handelClick(1)}
                  className={`tab pointer ${activeIndex === 1 ? "active" : ""}`}
                >
                  Retail / Distribution / CPM
                </p>
              </Col>
              <Col>
                <p
                  id="industrial-manufacturing"
                  onClick={() => this.handelClick(2)}
                  className={`tab pointer ${activeIndex === 2 ? "active" : ""}`}
                >
                  Industrial / Manufacturing
                </p>
              </Col>
              <Col>
                <p
                  id="banking-insurance"
                  onClick={() => this.handelClick(3)}
                  className={`tab pointer ${activeIndex === 3 ? "active" : ""}`}
                >
                  Banking & Insurance
                </p>
              </Col>
              <Col>
                <p
                  id="communications-services"
                  onClick={() => this.handelClick(4)}
                  className={`tab pointer ${activeIndex === 4 ? "active" : ""}`}
                >
                  Communications & Services
                </p>
              </Col>
              {/* <Col>
                <p
                  onClick={() => this.handelClick(5)}
                  className={`tab pointer ${activeIndex === 5 ? "active" : ""}`}
                >
                  View More Industries
                </p>
              </Col> */}
            </Row>
            <br />
          </Container>
        </section>
        <Container>
          {/* {activeIndex === 1 && <RetailDistribution />}
          {activeIndex === 2 && <IndustryManufacturing />}
          {activeIndex === 3 && <Banking />}
          {activeIndex === 4 && <Communication />}
          {activeIndex === 5 && <ViewMore />} */}

          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <RetailDistribution />
          </Link>
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <IndustryManufacturing />
          </Link>
          <Link
            activeClass="active"
            to="3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Banking />
          </Link>
          <Link
            activeClass="active"
            to="4"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Communication />
          </Link>
        </Container>
      </section>
    );
  }
}

export default IndustrySolutionMain;
