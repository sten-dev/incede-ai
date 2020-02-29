import React, { Component } from "react";
import "../../../styles/navbar.scss";

class SolutionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li><a href="/">
          Customer Service
          </a>
        </li>
        <li><a href="/">
          Human Resource Services
          </a>
        </li>
        <li><a href="/">
          IT Service Desk
          </a>
        </li>
        <li><a href="/">
          Sales Support
          </a>
        </li>
      </ul>
    );
  }
}

export default SolutionMenu;
