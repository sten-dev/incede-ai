import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import "../styles/navbar.scss"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const INavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="incede-nav">
      <Navbar color="white" expand="lg" >
        <NavbarBrand href="/">
          <img src={logo} alt="incede" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                What We Do
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                Our Customers
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/">
                Contact us
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};


export default INavbar;
