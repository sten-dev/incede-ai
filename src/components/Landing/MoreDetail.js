import React from "react";
import { Container, Row, Col } from "reactstrap";
import arrow from "../../img/arrow.svg";
import "../../styles/more_detail.scss";
import { Link } from "gatsby";
import TeamImageBG from "../../img/Team_image_bg.png";

class MoreDetail extends React.Component {
  state = {};
  render() {
    const { about } = this.props;
    return (
      <section className="more-detail">
        <Container>
          <Row>
            <Col lg={8} md={7} sm={12} xs={12}>
              <article className="gap-y-half text-center text-sm-left">
                <h1 className="title">
                  Harnessing the power of data, Artificial Intelligence and
                  Machine Learning
                </h1>
                <h5 className="text-white sub-title">
                  With more than half of the world’s data in natural language,
                  we solve business problems and create competitive advantage by
                  leveraging the power of Watson AI and machine learning. We
                  collaborate with you to understand areas where AI or
                  automation will deliver value to the business and define a
                  roadmap of incremental steps to roll-out real solutions that
                  deliver-to that value.
                </h5>
                <div className="py-2">
                  <Row>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <button className="btn more-btn btn-outline-info btn-lg w-100">
                        Why Incede
                        <img
                          src={arrow}
                          alt="next"
                          // style={{ width: "12px", }}
                        />
                      </button>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Link
                        to="/contact"
                        className="btn  more-btn btn-outline-info btn-lg w-100"
                      >
                        Contact Us
                        <img
                          src={arrow}
                          alt="next"
                          // style={{ width: "12px", }}
                        />
                      </Link>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                      <Link
                        to="/about"
                        className="btn more-btn btn-outline-info btn-lg w-100"
                      >
                        About Us
                        <img
                          src={arrow}
                          alt="next"
                          // style={{ width: "12px", }}
                        />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </article>
            </Col>
            <Col lg={4} md={5} className="d-none d-md-block position-initial">
              <div className="image-section gap-y">
                <img src={TeamImageBG} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default MoreDetail;
