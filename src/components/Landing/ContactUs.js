import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
const ContactUs = props => {
  let { location } = props;
  return (
    <section className="contact-us">
      <Container>
        <Row>
          <Col
            lg={{ offset: 2, size: 8 }}
            md={{ offset: 3, size: 6 }}
            sm={{ offset: 1, size: 10 }}
            xs={12}
          >
            <article className="gap-y">
              <h1 className="display-4 text-primary">Contact Us</h1>
              <Card>
                <CardBody>
                  <CardTitle>{location.title}</CardTitle>
                  <CardSubtitle>{location.subTitle}</CardSubtitle>
                </CardBody>
                {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody>
                  <em>{location.phone}</em>
                  <CardText>{location.email}</CardText>
                  <address>{location.address}</address>
                </CardBody>
              </Card>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
