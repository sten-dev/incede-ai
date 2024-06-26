import React from "react";
import { Row, Col, Container } from "reactstrap";
// import technologyPartners from "../../../img/why-incede/partners.png";
import ibmPartner from "../../../img/why-incede/ibm-partner.png";
import microsoftPartner from "../../../img/why-incede/microsoft-partner.png";
import arrowPartner from "../../../img/why-incede/arrow-partner.png";

const TechnologyPartners = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="d-flex">
            <div>
              <h1 className="text-left heading">Incede Technology Partners</h1>
              <h4 className="my-4">
                We service every aspect of planning, licensing, developing,
                deploying & training
              </h4>
              <p className="sub-title">
                We are dedicated to delivering specialized solutions in AI
                technology, business intelligence, and planning & budgeting
                through our robust partnerships with leading technology
                providers.
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <h5 className="color-grey">
              <b>IBM</b>
            </h5>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} className="d-flex">
            <p className="sub-title">
              We partner with to leverage their advanced AI platforms and tools,
              including IBM watsonx, to offer sophisticated AI solutions that
              enhance decision-making and operational efficiency. This
              partnership allows us to provide robust business intelligence and
              planning solutions that integrate seamlessly with your existing
              systems.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className="mt-4 mt-lg-0 d-flex align-items-center justify-content-center"
          >
            <div className="partner-image-section">
              <img width={"240px"} src={ibmPartner} alt="ibm partner" />
            </div>
          </Col>
          <Col xs={12}>
            <h5 className="color-grey">
              <b>Microsoft</b>
            </h5>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} className="d-flex">
            <p className="sub-title">
              Our collaboration with Microsoft, particularly with Azure AI and
              Power BI, enhances our capabilities in cloud-based business
              intelligence and analytics solutions. This partnership ensures we
              can offer scalable, secure, and comprehensive data analysis tools
              that support your strategic planning and budgeting needs.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className="mt-4 mt-lg-0 d-flex align-items-center justify-content-center"
          >
            <div className="partner-image-section">
              <img width={240} src={microsoftPartner} alt="ibm partner" />
            </div>
          </Col>
          <Col xs={12}>
            <h5 className="color-grey">
              <b>Arrow Electronics</b>
            </h5>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} className="d-flex">
            <p className="sub-title">
              Our partnership with Arrow Electronics enhances our ability to
              deliver advanced technology solutions by providing access to a
              broad range of electronic components and computing solutions,
              ensuring our clients benefit from the latest innovations and
              robust supply chain expertise.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className="mt-4 mt-lg-0 d-flex align-items-center justify-content-center"
          >
            <div className="partner-image-section">
              <img width={240} src={arrowPartner} alt="arrow-partner" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="d-flex">
            <div>
              <br />
              <h4 className="my-4">
                <b>Why Our Partnerships Matter</b>
              </h4>
              <p className="sub-title">
                Our strategic alliances with these technology leaders are
                crucial in providing you with state-of-the-art AI, business
                intelligence, and planning & budgeting solutions. These
                partnerships grant access to the latest technological
                innovations, ensuring that our clients are equipped with the
                tools necessary to thrive in a digitally driven market. We focus
                on integrating these technologies into cohesive systems that not
                only solve complex business problems but also unlock new
                opportunities for growth and efficiency.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="d-flex">
            <div>
              <br />
              <h4 className="my-4">
                <b>Commitment to Excellence</b>
              </h4>
              <p className="sub-title">
                At Incede, we are committed to harnessing our strong
                partnerships to deliver exceptional technology solutions that
                propel your business forward. Through these collaborations, we
                provide tailored solutions that are innovative, effective, and
                aligned with your business objectives. Explore how our strategic
                technology partnerships can transform your organization,
                enabling you to leverage the full potential of AI, business
                intelligence, and advanced planning capabilities.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TechnologyPartners;
