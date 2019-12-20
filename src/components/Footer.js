import React from "react";
import { Link } from "gatsby";
// import "./styles/footer.module.css";

import logo from "../img/logo_white.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import { Row, Container, Col } from "reactstrap";
const Footer = class extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="6" sm="12" lg="6">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
              <div class="bg-light box-shadow mx-auto"></div>
            </Col>
            <Col md="6" sm="12" lg="6">
              <h2 class="display-5">Another headline</h2>
              <p class="lead">And an even wittier subheading.</p>
              <div class="bg-dark box-shadow mx-auto"></div>
            </Col>
          </Row>
        </Container>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="3" sm="12" lg="3">
                <img
                  src={logo}
                  alt="incede.ai"
                  style={{ width: "10em", height: "6.5em" }}
                />
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
                      <Link className="navbar-item" to="/products">
                        Our Customers
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
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
                      <Link className="navbar-item" to="/about">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Industries
                      </Link>
                    </li>
                  </ul>
                </section>
              </Col>
              <Col md="3" sm="12" lg="3">
                <section className="menu">
                  <ul className="list-unstyled">
                    <li>
                      <h6>Contact Us</h6>
                    </li>

                    <li>
                      <p>408-898-4606, info@locussolutions,com</p>
                    </li>
                    <li>
                      <address>
                        5201 Great American Parkway, Suite #320, Santa Clara, CA
                        95054
                      </address>
                    </li>
                  </ul>
                </section>
              </Col>
              <Col md="3" sm="12" lg="3">
                <section className="social">
                  <a title="facebook" href="https://facebook.com">
                    {/* <i style="fas fa-instagram" /> */}
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </section>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
};

export default Footer;
