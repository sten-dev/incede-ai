import React, { Component } from "react";
import "../../../styles/navbar.scss";
import { Link } from "gatsby";

class SolutionMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu-links">
        <li>
          <Link to="/solutions/reseller-distributor-service">
            Resellers & Distributors AI Knowledge Base Self-Service
          </Link>
        </li>
        <li>
          <Link to="/solutions/customer-service">Consumer AI Self-Service</Link>
        </li>
        <li>
          <Link to="/solutions/human-resource-services">
            Employee AI Self-Service
          </Link>
        </li>
        <li>
          <Link to="/solutions/mass-tort-service">
            Mass Tort & Class Action Fees Management
          </Link>
        </li>
        <li>
          <Link to="/solutions/planning-analytics-service">
            Planning Analytics Managed Service
          </Link>
        </li>
        {/* <li>
          <Link to="/solutions/customer-service">Customer Service</Link>
        </li>
        <li>
          <Link to="/solutions/human-resource-services">
            Human Resource Services
          </Link>
        </li>
        <li>
          <Link to="/solutions/it-service-desk">IT Service Desk</Link>
        </li>
        <li>
          <Link to="/solutions/sales-support-solutions">
            Sales Support Solutions
          </Link>
        </li> */}
      </ul>
    );
  }
}

export default SolutionMenu;
