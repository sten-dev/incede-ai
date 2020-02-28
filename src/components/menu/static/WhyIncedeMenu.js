import React, { Component } from "react";
import "../../../styles/navBar.scss";

class WhyIncedeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>Our Process</li>
        <li>Our Expertise</li>
        <li>Our Experience</li>
      </ul>
    );
  }
}

export default WhyIncedeMenu;
