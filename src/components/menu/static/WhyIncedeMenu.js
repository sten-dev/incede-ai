import React, { Component } from "react";
import "../../../styles/navbar.scss";

class WhyIncedeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li><a href="/">
          Our Process
          </a>
        </li>
        <li><a href="/">
          Our Expertise
          </a>
        </li>
        <li><a href="/">
          Our Experience
          </a>
        </li>
      </ul>
    );
  }
}

export default WhyIncedeMenu;
