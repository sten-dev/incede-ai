import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/home.scss";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import arrow from "../../img/arrow.svg";
import { Link } from "gatsby";
// import HeroImage from "../../img/hero_image.png";

class Home extends React.Component {
  state = {};
  render() {
    // const { home } = this.props;
    return (
      <>
        <section className="landing-home">
          <Container>
            <Row>
              {/* <Col lg={1} md={2}></Col> */}
              <Col lg={7} md={7} sm={12} xs={12}>
                <article className="gap-y mt-5">
                  {/* <h1 className="text-primary bold">{home.title}</h1> */}
                  <h1 className="text-primary bold">
                    Incede infuses IBM Watson AI into your business processes
                    that you can trust
                  </h1>
                  <h4>
                    Incede personalizes user experiences, streamlines business
                    processes and workflow and sparks innovation by deploying
                    IBM Watson AI solutions
                  </h4>
                  {/* <h4>{home.subTitle}</h4> */}
                  <div className="py-2">
                    <Link to="/solutions" className="btn btn-secondary btn-lg">
                      Explore Our Solutions &nbsp;
                      <img src={arrow} alt="next" style={{ width: "12px" }} />
                    </Link>
                  </div>
                  {/* <pre>{JSON.stringify(home, null, 2)}</pre> */}
                </article>
              </Col>
              <Col lg={5} md={5} className="d-none d-md-block position-initial">
                <div className="image-section gap-y">
                  {/* <PreviewCompatibleImage
                    imageInfo={{
                      image: home.image,
                      alt: `featured image thumbnail`
                    }}
                  /> */}
                  <img src="img/incede-home-page.png" alt="hero" />
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
