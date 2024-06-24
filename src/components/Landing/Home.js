import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/home.scss";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";
import arrow from "../../img/arrow.svg";
import { Link } from "gatsby";
// import HeroImage from "../../img/hero_image.png";

// import HeroImage from "../../img/incede-home-page-latest.png";
import HeroImage from "../../img/incede-ai-illustration.png";
import CaseStudiesCarousalComponent from "./CaseStudiesCarousal";
// import HeroImage from "../../img/incede-home-page.png";
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
                <article className="gap-y mt-5 pb-0">
                  {/* <h1 className="text-primary bold">{home.title}</h1> */}
                  <h1 className="text-primary bold">
                    Empowering Businesses with Advanced AI Solutions
                  </h1>
                  <h4>
                    We offer comprehensive solutions in AI-driven automation, AI
                    Assistants, Enterprise Business Intelligence, and Planning &
                    Budgeting
                  </h4>
                  {/* <h4>{home.subTitle}</h4> */}
                  <div className="py-2">
                    <Link to="/why-incede" className="btn btn-secondary btn-lg">
                      Why incede &nbsp;
                      <img src={arrow} alt="next" style={{ width: "12px" }} />
                    </Link>
                  </div>
                  {/* <pre>{JSON.stringify(home, null, 2)}</pre> */}
                  <div className="d-none d-xl-block">
                    <CaseStudiesCarousalComponent />
                  </div>
                </article>
              </Col>
              <Col lg={5} md={5} className="d-none d-md-block position-initial">
                <div className="image-section gap-y mt-5 pb-0">
                  {/* <PreviewCompatibleImage
                    imageInfo={{
                      image: home.image,
                      alt: `featured image thumbnail`
                    }}
                  /> */}
                  <img src={HeroImage} alt="hero" />
                </div>
              </Col>
              <Col xs={12} className="d-block d-xl-none">
                <CaseStudiesCarousalComponent />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Home;
