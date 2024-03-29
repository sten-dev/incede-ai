import React, { Component } from "react";
import solutions1 from "../../img/solutions/solutions-1.png";
import solutions2 from "../../img/solutions/solutions-2.png";
import solutions3 from "../../img/solutions/solutions-3.png";
import solutions4 from "../../img/solutions/solutions-4.png";
class SolutionsImageBySlug extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getSolutionsImageBySlug = () => {
    switch (this.props.slug) {
      case "human-resource-services":
        return (
          <img className="service-img-slug" src={solutions1} alt="service-1" />
        );
      case "ai-for-customer-care":
        return (
          <img className="service-img-slug" src={solutions2} alt="service-2" />
        );
      case "it-service-desk":
        return (
          <img className="service-img-slug" src={solutions3} alt="service-3" />
        );
      case "sales-support-solutions":
        return (
          <img className="service-img-slug" src={solutions4} alt="service-3" />
        );
      default:
        return (
          <img className="service-img-slug" src={solutions1} alt="service-1" />
        );
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.slug && this.getSolutionsImageBySlug()}
      </React.Fragment>
    );
  }
}

export default SolutionsImageBySlug;
