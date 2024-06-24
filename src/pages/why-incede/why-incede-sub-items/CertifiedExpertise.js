import React from "react";
import { Row, Col, Container } from "reactstrap";
import certifiedExpertise from "../../../img/why-incede/certified-expertise.png";
import { Link } from "gatsby";
import arrowPrimary from "../../../img/arrow-primary.png";

const CertifiedExpertise = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={7}
            className="d-flex align-items-center"
          >
            <div>
              <h1 className="text-left heading">Certified Expertise</h1>
              <h4 className="my-4">
                We are experts in IBM watsonx AI with tools to accelerate
                results
              </h4>
              <p className="sub-title ">
                With decades of experience, we are visionary thinkers and
                recognized problem solvers who are trusted by our customers to
                navigate Artificial Intelligence, Machine learning, Cloud,
                Mobile and Emerging technologies to deliver right-fit solutions,
                analytics strategies, phase-one projects and full
                implementations.
              </p>
              <br />
              <Container fluid>
                <Row>
                  {/* <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/watson-assistant-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      watsonx Assistant Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/watson-discovery-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Watson Discovery Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/watsonx-platform-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      watsonx Platform Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/watsonx-orchestrate"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      watsonx Orchestrate &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col> */}
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/gen-ai-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Generative AI Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/ai-assistant-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      AI Assistant Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/enterprise-bi-and-analytics"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Enterprise BI and Analytics &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/planning-and-budgeting"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Planning and Budgeting &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/applications-development"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Applications Development &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  {/* <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/services/professional-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Professional Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col> */}
                </Row>
              </Container>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className="mt-4 mt-lg-0 d-flex align-items-center"
          >
            <div className="image-section">
              <img src={certifiedExpertise} alt="certified expertise" />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CertifiedExpertise;
