import React from "react";
import { Container, Row, Col } from "reactstrap";
import arrow from "../../img/arrow.svg";
import "../../styles/about_us.scss";
class AboutUs extends React.Component {
  state = {};
  render() {
    const { about } = this.props;
    return (
      <section className="about">
        <Container>
          <Row>
            <Col>
              <article className="gap-y text-center text-sm-left">
                <h1 className="title">{about.title}</h1>
                <h5 className="text-white sub-title">{about.subTitle}</h5>
                <div className="py-2">
                  <button type="button" className="btn btn-secondary btn-lg">
                    {about.button}
                    <img
                      src={arrow}
                      alt="next"
                      // style={{ width: "12px", }}
                    />
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
