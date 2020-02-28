import React, { Component } from "react";
import "../../../styles/navBar.scss";

class SolutionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>Customer Service </li>
        <li>Human Resource Services</li>
        <li>IT Service Desk</li>
        <li>Sales Support</li>
      </ul>
    );
  }
}

export default SolutionMenu;
