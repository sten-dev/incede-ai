import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import menu from "../img/menu.svg";
import "../styles/navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
  Row,
  Col
} from "reactstrap";
import SolutionsMenu from "./menu/SolutionsMenu";
import ServicesMenu from "./menu/ServicesMenu";
import IndustriesMenu from "./menu/IndustriesMenu";

const INavbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleWhatWeDoMenu = () => setPopoverOpen(!popoverOpen);
  return (
    <nav className="incede-nav">
      <Navbar color="white" expand="lg" fixed>
        <NavbarBrand href="/">
          <img src={logo} alt="incede" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <img src={menu} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="btn">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="btn">
              <Link to="/about">About Us</Link>
            </NavItem>
            <NavItem id="whatWeDo" className="btn">
              <a>What We Do</a>
            </NavItem>
            <NavItem className="btn">
              <Link to="/customers">Our Customers</Link>
            </NavItem>
            <NavItem className="btn">
              <Link to="/contact">Contact us</Link>
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
      >
        {/* <PopoverHeader>Popover Title</PopoverHeader> */}
        <PopoverBody>
          <Container fluid className="p-4">
            <Row>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h1 className="display-4 text-gray d-none d-sm-block">
                  What we do
                </h1>
                <h2
                  onClick={toggleWhatWeDoMenu}
                  className="btn d-block d-sm-none"
                >
                  ❌
                </h2>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h3>Services</h3>
                <ServicesMenu />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h3>Solutions</h3>
                <SolutionsMenu />
              </Col>
              <Col lg={3} md={3} sm={6} xs={12}>
                <h3>Industries</h3>
                <IndustriesMenu />
              </Col>
            </Row>
          </Container>
        </PopoverBody>
      </Popover>
    </nav>
  );
};

export default INavbar;
