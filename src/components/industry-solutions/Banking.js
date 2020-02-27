import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/industry-solution.scss";
import SupportField from "../../img/industry-solution/support-field.png";
import Manufacturing from "../../img/industry-solution/Manufacturing.png";
import Woodside from "../../img/industry-solution/Woodside.svg";

class Banking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="industry-solution-content gap-y-half" id="3">
        <Container>
          <h1 className="text-left heading mb-5">Banking & Insurance </h1>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <p className="content-heading mb-3">Conversational Banking </p>
              <p className="content-body">
                Watson Assistant enables customers to ask questions or request
                services using natural language – anytime, anywhere and on any
                device. While customers perform important requests such as
                transferring funds between accounts, applying for a mortgage or
                inquiring about the bank’s commercial loan policies, Watson is
                secure, fast and simple.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="mt-4 mt-lg-0 image-center"
            >
              <div className="image-section">
                <img src={SupportField} alt="support image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Banking;
