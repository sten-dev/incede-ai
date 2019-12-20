import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/home.scss"
class Home extends React.Component {
  state = {};
  render() {
    const { home } = this.props;
    return (
      <section class="landing-home">
        <Container fluid>
          <Row>
            <Col lg={2} md={2}></Col>
            <Col lg={6} md={5}>
              <article className="gap-y">
                <h1 className="display-4 text-primary">{home.title}</h1>
                <h3>{home.subTitle}</h3>
                <div className="py-2">
                  <button type="button" className="btn btn-secondary btn-lg">
                    {home.button} <i className="fas fa chevron-down"></i>
                  </button>
                </div>
              </article>
            </Col>
            <Col
              lg={4}
              md={5}
              className="image-section"
              style={{
                background: `url(${home.image.childImageSharp.fluid.src})`
              }}
            ></Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;
