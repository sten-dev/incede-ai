import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import "../../styles/case-study-page.scss";

class CaseStudyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, description, image } = this.props;
    let desLen = description.length;
    return (
      <React.Fragment>
        <Card>
          <div className="card-img">
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `case study`
              }}
            />
          </div>
          <CardBody style={{ color: "black" }}>
            <CardTitle>{title}</CardTitle>

            <CardText>
              {desLen > 150 ? description.substr(0, 150) + ".." : description}
            </CardText>
            <br />
            <div className="text-right">
              <Link className="btn btn-primary">View</Link>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default CaseStudyCard;
