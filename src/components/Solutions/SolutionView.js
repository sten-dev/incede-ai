import React, { Component } from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Card, CardBody } from "reactstrap";

const SolutionView = ({ solution }) => {
  return (
    <Card className="card-section">
      <div className="image-section">
        <PreviewCompatibleImage
          imageInfo={{
            image: solution.image,
            alt: `featured image thumbnail`,
            style: { width: "100%" }
          }}
        />
      </div>
      <CardBody className="text-center">
        <h4>{solution.title}</h4>
        <h6 className="subTitle">{solution.subTitle}</h6>
      </CardBody>
    </Card>
  );
};

export default SolutionView;