import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "gatsby";
import arrowPrimary from "../../../img/arrow-primary.png";
import customerSuccess from "../../../img/why-incede/customer-success.png";

const CustomerSuccess = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7} className="d-flex">
            <div>
              <h1 className="text-left heading">Customer Successes</h1>
              {/* <h4 className="my-4">
                Customer success is measured in business value
              </h4> */}
              <p>
                At Incede, we pride ourselves on a commitment to customer
                success that translates into substantial business value. Serving
                hundreds of diverse clients across large corporations, mid-sized
                businesses, and non-profit sectors, we have built a robust
                reputation for integrity and trust. Our focus extends beyond
                meeting expectations to exceeding them, which is evident from
                our enduring partnerships and the loyalty of our clients.
              </p>
              <br />
              <p>
                Our portfolio is marked by tailored solutions designed to meet
                the specific challenges and needs of each client. From deploying
                advanced AI technologies and crafting strategic business
                intelligence frameworks to managing detailed planning and
                budgeting processes, we align every project with our clients’
                strategic objectives to ensure impactful, measurable results.
                The success stories of our clients across various industries
                underscore our capacity to adapt and innovate continually,
                helping them to not only remain competitive but also to excel in
                their markets. This steadfast focus on creating lasting value
                and enhancing operational efficiency is what enables our clients
                to thrive in an ever-evolving technological landscape.
              </p>
              <br />
              <Container fluid>
                <Row>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/customers"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Our Customers &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  {/* <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/industries/retail-distribution"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Retail/Distribution &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/industries/industrial-manufacturing"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Industrial/Manufacturing &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/industries/banking-insurance"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Banking & Insurance &nbsp;
                      <img
                        src={arrowPrimary}
                        alt="next"
                        style={{ width: "8px" }}
                      />
                    </Link>
                  </Col>
                  <Col md={6} xs={12} className="p-2">
                    <Link
                      to="/industries/communications-services"
                      className="btn why-incede-btn primary btn-outline-info btn-lg w-100"
                    >
                      Communication & Services &nbsp;
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
              <img src={customerSuccess} alt="customer success" />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CustomerSuccess;
