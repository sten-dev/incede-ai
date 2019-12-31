import React, { useState } from "react";
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
const INavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleWhatWeDoMenu = () => setPopoverOpen(!popoverOpen);
  return (
    <nav className="incede-nav">
      <Navbar color="white" expand="lg" light>
        <NavbarBrand href="/">
          <img src={logo} alt="incede" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <img src={menu} alt="menu" />
        </NavbarToggler>
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="btn">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="btn">
              <Link to="/about">About Us</Link>
            </NavItem>
            <NavItem id="whatWeDo" className="btn">
              <a>
                What We Do{" "}
                <img
                  className={`${popoverOpen ? "active-what-we-do" : ""}`}
                  alt="send"
                  src={dropdown}
                  // onClick={props.onClick}
                />{" "}
              </a>
            </NavItem>
            <NavItem className="btn">
              <Link to="/customers">Our Customers</Link>
            </NavItem>
            <NavItem className="btn">
              <Link to="/contact">Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Popover
        popperClassName="what-we-do-menu"
        boundariesElement="window"
        placement="bottom"
        isOpen={popoverOpen}
        target="whatWeDo"
        toggle={toggleWhatWeDoMenu}
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
                <h4 onClick={toggleWhatWeDoMenu} className="d-block d-sm-none">
                  <img className="back-icon" alt="send" src={dropdown} /> What
                  We Do
                </h4>
              </Col>
              <br className="d-block d-md-none" />
              <br className="d-block d-md-none" />
              <br className="d-block d-md-none" />
              <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                <h5>Services</h5>
                <ServicesMenu />
              </Col>
              <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                <h5>Solutions</h5>
                <SolutionsMenu />
              </Col>
              <Col className="wwd-sub-menu" lg={3} md={3} sm={6} xs={12}>
                <h5>Industries</h5>
                <IndustriesMenu />
              </Col>
            </Row>
          </Container>
        </PopoverBody>
      </Popover>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className="bot-side-menu"
        backdrop="static"
      >
        <ModalBody>
          <MenuSection toggle={toggle} />
        </ModalBody>
      </Modal>
    </nav>
  );
};

export default INavbar;
