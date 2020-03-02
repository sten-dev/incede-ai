import React from "react";
import { Row, Col, Container } from "reactstrap";
const ServicesHeader = props => {
  return (
    <section className="header-section text-center">
      <Container>
        <br />
        <br />
        <Row>
          <Col className="text-left">
            <p className="mb-1 display-3">{props.header}</p>
            <p className="my-0 h3">{props.title}</p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>
    </section>
  );
};

export default ServicesHeader;
