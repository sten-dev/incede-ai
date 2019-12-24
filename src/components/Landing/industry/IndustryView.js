import React from "react";
import { Card, CardBody } from "reactstrap";
import PreviewCompatibleImage from '../../PreviewCompatibleImage';

const IndustryView = ({ industry }) => {
    return (
        <Card className="card-section">
            <div className="image-section">
                <PreviewCompatibleImage
                    imageInfo={{
                        image: industry.image,
                        alt: `featured image thumbnail`,
                        style: { width: "100%" }
                    }}
                />
            </div>
            <CardBody className="text-center pt-0">
                <h4>{industry.title}</h4>
                <h6 className="subTitle">{industry.subTitle}</h6>
            </CardBody>
        </Card>
    );
};

export default IndustryView;
