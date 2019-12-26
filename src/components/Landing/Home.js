import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/home.scss";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import INavbar from "../Navbar";
import arrow from "../../img/arrow.svg"
class Home extends React.Component {
  state = {};
  render() {
    const { home } = this.props;
    return (
      <>
        <section className="landing-home">
          <Container>
            <Row>
              {/* <Col lg={1} md={2}></Col> */}
              <Col lg={7} md={5}>
                <article className="gap-y">
                  <h1 className="display-4 text-primary">{home.title}</h1>
                  <h3>{home.subTitle}</h3>
                  <div className="py-2">
                    <button type="button" className="btn btn-secondary btn-lg">
                      {home.button}
                      <img
                        src={arrow}
                        alt="next"
                        style={{ width: "12px", }}
                      />
                    </button>
                  </div>
                  {/* <pre>{JSON.stringify(home, null, 2)}</pre> */}
                </article>
              </Col>
              <Col lg={4} md={5} className="d-none d-md-block position-initial">
                <div className="image-section">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: home.image,
                      alt: `featured image thumbnail`
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Home;
