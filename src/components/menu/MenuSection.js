import React, { Component } from "react";
import "../../styles/menu.scss";
import { Row, Container, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import arrow from "../../img/arrow.svg";
import close from "../../img/close.svg";
import { Link } from "gatsby";
import ServicesMenu from "./ServicesMenu";
import SolutionsMenu from "./SolutionsMenu";
import IndustriesMenu from "./IndustriesMenu";

class MenuSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenu: false
    };
  }
  handleSubMenu = () => {
    this.setState({ subMenu: !this.state.subMenu });
  };
  render() {
    return (
      <section className="menu-section">
        <Container fluid style={{ padding: " 0.5rem 1rem" }}>
          <Row className="m-0 flex-column ">
            <Col className="d-flex justify-content-between">
              <div>
                <img
                  src={logo}
                  alt="incede.ai"
                  style={{ width: "10em", height: "5em" }}
                />
              </div>
              <div className="align-self-center menu-close">
                <img src={close} alt="close" style={{ width: "16px" }} onClick={this.props.toggle} />
              </div>
            </Col>
            {!this.state.subMenu && (
              <React.Fragment>
                <Col className="menu-items">
                  <Link to="/">
                    <span onClick={this.props.toggle}>Home</span>
                  </Link>
                </Col>
                <Col className="menu-items">
                  <Link to="/about">
                    <span onClick={this.props.toggle}>About Us</span>
                  </Link>
                </Col>
              </React.Fragment>
            )}
            <Col className="menu-items">
              <span onClick={this.handleSubMenu} className="d-inline-flex">
                {this.state.subMenu && (
                  <React.Fragment>
                    <img
                      src={arrow}
                      alt="next"
                      style={{ width: "11px", transform: "scaleX(-1)" }}
                    />
                    &nbsp;&nbsp;
                  </React.Fragment>
                )}
                What We Do
                {!this.state.subMenu && (
                  <React.Fragment>
                    &nbsp;&nbsp;
                    <img src={arrow} alt="next" style={{ width: "11px" }} />
                  </React.Fragment>
                )}
              </span>
            </Col>
            {!this.state.subMenu && (
              <React.Fragment>
                <Col className="menu-items">
                  <Link to="/customers">
                    <span onClick={this.props.toggle}>Our Customers</span>
                  </Link>
                </Col>
                <Col className="menu-items">
                  <Link to="/contact">
                    <span onClick={this.props.toggle}>Contact Us</span>
                  </Link>
                </Col>
              </React.Fragment>
            )}
            {this.state.subMenu && (
              <React.Fragment>
                <Col>
                  <Row xs="1" sm="2" md="3" className="pl-3 sub-menu">
                    <Col className="pb-4">
                      <h5 className="mt-0">Services</h5>
                      <span className="sub-menu-items">
                        <ServicesMenu />
                      </span>
                    </Col>
                    <Col className="pb-4">
                      <h5 className="mt-0">Solutions</h5>
                      <span className="sub-menu-items">
                        <SolutionsMenu />
                      </span>
                    </Col>
                    <Col className="pb-4">
                      <h5 className="mt-0">Industries</h5>
                      <span className="sub-menu-items">
                        <IndustriesMenu />
                      </span>
                    </Col>
                  </Row>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </Container>
      </section>
    );
  }
}

export default MenuSection;
