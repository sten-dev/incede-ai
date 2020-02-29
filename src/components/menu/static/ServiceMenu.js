import React from "react";
import "../../../styles/navbar.scss";

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>
          <a href="/">
            Watson Assistant Services
            </a>
        </li>
        <li>
          <a href="/">
            Watson Discovery Services
            </a>
        </li>
        <li>
          <a href="/">
            Watson API Services
            </a>
        </li>
      </ul>
    );
  }
}

export default ServiceMenu;
