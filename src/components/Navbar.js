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
      <Navbar color="white" expand="md" >
        <NavbarBrand href="/">
          <img src={logo} alt="incede" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
            <NavItem>
              <Link to="/components/">Home</Link>
            </NavItem>
            <NavItem>
              <Link  to="https://github.com/reactstrap/reactstrap">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link to="https://github.com/reactstrap/reactstrap">
                What We Do
              </Link>
            </NavItem>
            <NavItem>
              <Link to="https://github.com/reactstrap/reactstrap">
                Our Customers
              </Link>
            </NavItem>
            <NavItem>
              <Link to="https://github.com/reactstrap/reactstrap">
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
