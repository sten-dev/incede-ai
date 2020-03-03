import React from "react";
import { Link } from "gatsby";
import arrow from "../../img/arrow.svg";
import { Container, Row, Col } from "reactstrap";

const ServicesSmallCardBody = ({ data, path }) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="border-right">
            <h3 className="mt-0">{data.title}</h3>
            <p>
              Conversational AI solutions primarily designed to take over
              inquiries coming into the customer service desk. Customer service
              solutions provide answers to product questions, return and
              exchange policies, damaged in shipping claims and credit card
              disputes.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h4 className="mt-1">Outcomes</h4>
            <ul>
              <li>
                <p>Increases response time to customer inquiries</p>
              </li>
              <li>
                <p>Increases volume of incoming requests to the service desk</p>
              </li>
              <li>
                <p>Automation of routine tasks and transactions</p>
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Link to={path} className="btn btn-secondary btn-lg">
              Know more &nbsp;
              <img src={arrow} alt="next" style={{ width: "12px" }} />
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default ServicesSmallCardBody;
