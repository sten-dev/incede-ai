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
              {/* <h4 className="my-4">
                We are experts in IBM watsonx AI with tools to accelerate
                results
              </h4> */}
              <p className="sub-title mb-0 mb-lg-5">
                We combine our extensive experience with a visionary approach to
                navigate complex technological landscapes. Our team holds
                industry-recognized certifications in key areas such as
                Generative AI, Agentic AI, Business Intelligence, and Planning &
                Budgeting solutions—ensuring we deliver cutting-edge solutions
                tailored to our clients' needs. As trusted problem solvers, we
                leverage our expertise in Artificial Intelligence, Machine
                Learning, Cloud, Mobile, and emerging technologies to provide
                analytics strategies, phase-one projects, and full
                implementations that precisely fit your requirements.
              </p>
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
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>
              <p className="sub-title ">
                Our commitment to continuous learning and maintaining the
                highest standards of professional accreditation keeps us at the
                forefront of technology consulting. This ensures our clients can
                confidently leverage modern technology for sustained growth and
                success in a rapidly evolving digital landscape.
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
                  <Col lg={4} md={6} xs={12} className="p-2">
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
                  <Col lg={4} md={6} xs={12} className="p-2">
                    <Link
                      to="/services/ai-agentic-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      AI Agentic Services &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col lg={4} md={6} xs={12} className="p-2">
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
                  <Col lg={4} md={6} xs={12} className="p-2">
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
                  <Col lg={4} md={6} xs={12} className="p-2">
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
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CertifiedExpertise;
