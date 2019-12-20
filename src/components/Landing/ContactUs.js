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
import "../../styles/contact-us.scss"
const ContactUs = props => {
  let { location } = props;
  return (
    <section className="contact-us">
      <Container>
        <Row>
          <Col
            // lg={{ offset: 2, size: 8 }}
            // md={{ offset: 3, size: 6 }}
            // sm={{ offset: 1, size: 10 }}
            // xs={12}
          >
            <article className="gap-y">
              <h1 className="display-4 text-primary">Contact Us</h1>
              <Card>
                <CardBody>
                  <h2 className="contact-title">{location.title}</h2>
                  <h6 className="contact-subtitle text-uppercase">{location.subTitle}</h6>
                </CardBody>
                <CardBody>
                  <em>{location.phone}</em>
                  <p>{location.email}</p>
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
