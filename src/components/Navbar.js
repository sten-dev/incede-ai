import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import menu from "../img/menu.svg";
import "../styles/navbar.scss";
import "../styles/bot.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Popover,
  PopoverBody,
  Container,
  Row,
  Col,
  Modal,
  ModalBody
} from "reactstrap";
import SolutionsMenu from "./menu/SolutionsMenu";
import ServicesMenu from "./menu/ServicesMenu";
import IndustriesMenu from "./menu/IndustriesMenu";
import dropdown from "../img/dropdown.svg";
import MenuSection from "./menu/MenuSection";

class INavbar extends Component {
  window
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      popoverOpen: false
    }
  }

  componentDidMount() {
    this.window = window
  }

  parseJwt = () => {
    let token = this.getToken();
    if (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(this.window.atob(base64));
    }
    return '';
  };

  getToken = () => {
    let obj = this.window.localStorage.getItem('userAuthToken');
    return obj;
  };

  isTokenExpired = () => {
    var token = this.getToken();
    if (token) {
      let user = this.parseJwt();
      var cur_time = new Date().getTime() / 1000;
      if (user && user.exp && cur_time < user.exp) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleWhatWeDoMenu = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.isTokenExpired() ? (
          <nav className="incede-nav">
            <Navbar color="white" expand="lg" light>
              <NavbarBrand>
                <Link to="/">
                  <img src={logo} alt="incede" />
                </Link>
              </NavbarBrand>
            </Navbar>
          </nav>
        ) : (

            <nav className="incede-nav">
              <Navbar color="white" expand="lg" light>
                <NavbarBrand>
                  <Link to="/">
                    <img src={logo} alt="incede" />
                  </Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}>
                  <img src={menu} alt="menu" />
                </NavbarToggler>
                <Collapse isOpen={false} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="btn">
                      <Link activeClassName="selected" to="/">Home</Link>
                    </NavItem>
                    <NavItem className="btn">
                      <Link activeClassName="selected" to="/about">About Us</Link>
                    </NavItem>
                    <NavItem id="whatWeDo" className="btn">
                      <a>
                        What We Do{" "}
                        <img
                          className={`${this.state.popoverOpen ? "active-what-we-do" : ""}`}
                          alt="send"
                          src={dropdown}
                        // onClick={props.onClick}
                        />{" "}
                      </a>
                    </NavItem>
                    <NavItem className="btn">
                      <Link activeClassName="selected" to="/case-study">Case Studies</Link>
                    </NavItem>
                    {/* <NavItem className="btn">
              <Link activeClassName="selected" to="/customers">Our Customers</Link>
            </NavItem> */}
                    <NavItem className="btn">
                      <Link activeClassName="selected" to="/contact">Contact Us</Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>

              <Popover
                popperClassName="what-we-do-menu"
                boundariesElement="window"
                placement="bottom"
                isOpen={this.state.popoverOpen}
                target="whatWeDo"
                toggle={this.toggleWhatWeDoMenu}
                trigger="legacy"
              >
                {/* <PopoverHeader>Popover Title</PopoverHeader> */}
                <PopoverBody>
                  <Container fluid className="p-4">
                    <Row>
                      <Col lg={3} md={3} sm={12} xs={12}>
                        <h1 className="text-gray d-none d-sm-block">
                          What we do
                </h1>
                        <h4 onClick={this.toggleWhatWeDoMenu} className="d-block d-sm-none">
                          <img className="back-icon" alt="send" src={dropdown} /> What
                          We Do
                </h4>
                      </Col>
                      <br className="d-block d-md-none" />
                      <br className="d-block d-md-none" />
                      <br className="d-block d-md-none" />
                      <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="mt-0">Services</h5>
                        <ServicesMenu />
                      </Col>
                      <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="mt-0">Solutions</h5>
                        <SolutionsMenu />
                      </Col>
                      <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="mt-0">Industries</h5>
                        <IndustriesMenu />
                      </Col>
                    </Row>
                  </Container>
                </PopoverBody>
              </Popover>
              <Modal
                isOpen={this.state.isOpen}
                toggle={this.toggle}
                className="bot-side-menu"
                backdrop="static"
              >
                <ModalBody>
                  <MenuSection toggle={this.toggle} />
                </ModalBody>
              </Modal>
            </nav>
          )}
      </React.Fragment>
    );
  }
}

export default INavbar;