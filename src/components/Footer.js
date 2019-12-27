import React from "react";
import { Link } from "gatsby";
import "../styles/footer.scss";

import logo from "../img/logo_white.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import { Row, Container, Col } from "reactstrap";
import FooterLocation from "./FooterLocation";
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col className="incede-img" md="12" sm="12" lg="12">
              <Row>
                <Col>
                  <img src={logo} alt="incede.ai" />
                </Col>
                <Col className="text-right">
                  <section className="social">
                    <a title="facebook" href="https://facebook.com">
                      {/* <i style="fas fa-instagram" /> */}
                      <img src={facebook} alt="Facebook" />
                    </a>
                    <a title="twitter" href="https://twitter.com">
                      <img className="fas fa-lg" src={twitter} alt="Twitter" />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img src={instagram} alt="Instagram" />
                    </a>
                  </section>
                </Col>
              </Row>
            </Col>
            <Col md="3" sm="12" lg="3">
              <section className="half-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/customers">
                      Our Customers
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </Col>
            <Col md="3" sm="12" lg="3">
              <section className="menu">
                <ul className="list-unstyled">
                  <li>
                    <h6>What We Do</h6>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/">
                      Industries
                    </Link>
                  </li>
                </ul>
              </section>
            </Col>
            <Col md="3" sm="12" lg="3">
              <section className="menu">
                <FooterLocation />
              </section>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
};

export default Footer;
