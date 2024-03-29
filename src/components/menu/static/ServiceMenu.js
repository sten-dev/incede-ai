import React from "react";
import "../../../styles/navbar.scss";
import { Link } from "gatsby";

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>
          <Link to="/services/watson-assistant-services">
            watsonx Assistant Services
          </Link>
        </li>
        <li>
          <Link to="/services/watson-discovery-services">
            Watson Discovery Services
          </Link>
        </li>
        <li>
          <Link to="/services/watsonx-platform-services">watsonx Platform Services</Link>
        </li>
        <li>
          <Link to="/services/applications-development">Applications Development</Link>
        </li>
        <li>
          <Link to="/services/professional-services">Professional Services</Link>
        </li>
      </ul>
    );
  }
}

export default ServiceMenu;
