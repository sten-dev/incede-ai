import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about_us.scss"
class AboutUs extends React.Component {
  state = {};
  render() {
    const { about } = this.props;
    return (
      <section class="about">
        <Container>
          <Row>
            <Col>
              <article className="gap-y">
                <h1>{about.title}</h1>
                <h6 className="lead">{about.subTitle}</h6>
                <div className="py-2">
                  <button type="button" className="btn btn-secondary btn-lg">
                    {about.button} <i className="fas fa chevron-right"></i>
                  </button>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutUs;
