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
        <li>Watson Assistant Services</li>
        <li>Watson Discovery Services</li>
        <li>Watson API Services</li>
      </ul>
    );
  }
}

export default ServiceMenu;
