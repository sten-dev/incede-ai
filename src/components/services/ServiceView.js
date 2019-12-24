import React from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { Card, CardBody } from "reactstrap";

const ServiceView = ({ service }) => {
    return (
        <Card className="card-section">
            <div className="image-section">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: service.image,
                        alt: `featured image thumbnail`,
                        style: { width: "100%" }
                    }}
                />
            </div>
            <CardBody className="text-center pt-0">
                <h4>{service.title}</h4>
                <h6 className="subTitle">{service.subTitle}</h6>
            </CardBody>
        </Card>
    );
};

export default ServiceView;
