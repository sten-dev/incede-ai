import React from "react";
import { Container, Col, Row } from "reactstrap";
import { customersList } from "./Landing/customer-data";
import "../styles/customers.scss";

const Customers = () => {
  return (
    <>
      <section className="customers-page">
        <section className="more-detail">
          <Container>
            <Row>
              <Col lg={8} md={7} sm={12} xs={12}>
                <article className="gap-y-half text-left mt-0 mt-sm-3 mt-lg-4">
                  <h1 className="title">Our Customers-First Culture</h1>
                  <h5 className="text-white sub-title">
                    Our culture has a single focus – ensuring our customers are
                    successful. We believe in building a value-based partnership
                    with each of our customers. We understand our customer’s
                    project goals, culture, and implementation experience. Based
                    on that we provide our customer with a unique consulting
                    experience that is focused on providing solutions that are
                    built for their specific needs – ranging from designing the
                    application to training the their team to own their
                    applications. This core value has gained us tremendous
                    customer satisfaction ratings and references.
                  </h5>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <Row className="gap-y-half">
            {customersList.map((img, imgIndex) => (
              <Col xs={12} sm={6} md={4} lg={3} key={imgIndex} className="d-flex justify-content-center">
                <div className="image-container">
                    <img src={img} alt={`customer_${imgIndex}`} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Customers;
