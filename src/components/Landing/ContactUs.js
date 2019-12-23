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
import call from "../../img/call.svg";
import location_icon from "../../img/location.svg";
import mail from "../../img/mail.svg";
import "../../styles/contact-us.scss";
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
              <Card className="contact-us-card">
                <CardBody>
                  <h2 className="contact-title">{location.title}</h2>
                  <h6 className="contact-subtitle text-uppercase">{location.subTitle}</h6>
                  <br />
                  <div>
                    <img
                      src={call}
                      alt="call"
                    /><em>{location.phone}</em>
                  </div>
                  <div>
                    <p className="mb-0">
                      <img
                        src={mail}
                        alt="mail"
                      />
                      {location.email}</p>
                  </div>
                  <div className="d-flex">
                    <img
                      src={location_icon}
                      alt="location"
                    /><address className="mb-0">{location.address}</address>
                  </div>
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
