import React from "react";
import { Link } from "gatsby";
import "./styles/footer.module.css";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                src={logo}
                alt="incede.ai"
                style={{ width: "14em", height: "10em" }}
              />
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
            </div>
            <div className="col-3">
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
            </div>
            <div className="col-3">
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
            </div>
            <div className="col-3">
              {" "}
              <a title="facebook" href="https://facebook.com">
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
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
