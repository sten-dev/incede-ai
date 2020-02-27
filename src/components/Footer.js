import React from "react";
import { Link } from "gatsby";
import "../styles/footer.scss";

import logo from "../img/logo_white.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import { Row, Container, Col } from "reactstrap";
import FooterLocation from "./FooterLocation";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer gap-y-half">
        <Container>
          <Row>
            <Col className="incede-img" md="12" sm="12" lg="12">
              <Row>
                <Col>
                  <img src={logo} alt="incede.ai" />
                </Col>
                <Col className="text-right">
                  {/* <section className="social">
                      <img src={facebook} alt="Facebook" />
                    </a>
                    <a title="twitter" href="https://twitter.com">
                      <img className="fas fa-lg" src={twitter} alt="Twitter" />
                    </a>
                    <a title="instagram" href="https://instagram.com">
                      <img src={instagram} alt="Instagram" />
                    </a>
                  </section> */}
                </Col>
              </Row>
            </Col>
            <Col md="3" sm="3" xs="12" lg="3">
              <section className="half-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/case-study">
                      Case Studies
                    </Link>
                    {/* <Link className="navbar-item" to="/customers">
                      Our Customers
                    </Link> */}
                  </li>

                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </section>
            </Col>
            <Col md="3" sm="3" xs="12" lg="3">
              <section className="menu">
                <ul className="list-unstyled">
                  <li>
                    <h6>What We Do</h6>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/solutions">
                      Solutions
                    </Link>
                  </li>
                  {/* <li>
                    <Link className='navbar-item' to='/industries'>
                      Industries
                    </Link>
                  </li> */}
                </ul>
              </section>
            </Col>
            <Col md="3" sm="3" xs="12" lg="3">
              <section className="menu">
                <FooterLocation />
              </section>
            </Col>
            <Col lg="12" md="12" sm="12" xs="12">
              <p className="m-0">© Copyright 2020 Incede AI</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
