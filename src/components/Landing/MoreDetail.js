import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/more_detail.scss";
// import AiImage from "../../img/incede-home-page-middle.png";
class MoreDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollHidden: false,
      isCookieSaved: true,
    };
  }
  state = {};
  render() {
    return (
      <section className="more-detail">
        <Container>
          {!this.props?.forHomePage ? (
            <Row>
              <Col lg={8} md={7} sm={12} xs={12}>
                <article className="gap-y-half text-left mt-0 mt-sm-3 mt-lg-4">
                  <h1 className="title">
                    Incede harnesses the power of Data, AI and Machine Learning
                  </h1>
                  <h5 className="text-white sub-title">
                    With more than half of the world’s data in natural language,
                    we solve business problems and create a competitive
                    advantage by leveraging the power of watsonx AI and machine
                    learning. We collaborate with you to understand areas where
                    AI or automation will deliver value to the business and
                    define a roadmap of incremental steps to roll-out real
                    solutions that deliver to that value.
                  </h5>
                  <p id="business-terms" className="pt-2"></p>
                  {/* <div className="py-2">
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
                </div> */}
                </article>
              </Col>
              {/* <Col lg={4} md={5} className="d-none d-md-block position-initial">
              <div className="image-section gap-y-half">
                <img src={AiImage} alt="hero" />
              </div>
            </Col> */}
            </Row>
          ) : (
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">Generative AI Services</h1>
                  <h5 className="text-white sub-title">
                    Transform your enterprise with our advanced Generative AI
                    consulting services. We specialize in integrating
                    open-source Large Language Models (LLMs) into your business
                    processes, enhancing workflow automation, and ensuring
                    robust AI governance. Our approach begins with a detailed
                    assessment of your current systems to identify opportunities
                    for Gen AI integration. We then provide a strategic roadmap
                    outlining key milestones and expected outcomes, ensuring a
                    smooth transition to Gen AI-powered operations.
                  </h5>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">
                    Enterprise BI and Analytics Services
                  </h1>
                  <h5 className="text-white sub-title">
                    Unlock the full potential of your data with our
                    comprehensive Enterprise Business Intelligence (BI) and
                    Analytics consulting services. We specialize in transforming
                    complex data from modern data sources into clear, actionable
                    insights that drive strategic decision-making and business
                    growth. Our team of experts is dedicated to helping you
                    leverage advanced BI and analytics tools to enhance your
                    data strategy, analytics, and overall business performance.
                  </h5>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">Planning and Budgeting Services</h1>
                  <h5 className="text-white sub-title">
                    Maximize the efficiency of your financial planning,
                    budgeting, and forecasting processes with our specialized
                    consulting services for IBM Planning Analytics. Our team of
                    experts is dedicated to helping you implement and optimize
                    IBM Planning Analytics, ensuring you achieve accurate,
                    insightful, and strategic financial planning.
                  </h5>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left">
                  <h1 className="title">Applications Development Services</h1>
                  <h5 className="text-white sub-title">
                    When competitive advantage requires custom applications,
                    Incede has the expertise and specializes in mobile and web
                    app development. We can help in developing innovative
                    cloud-based applications that are user-centric and outcome
                    oriented across industries.
                  </h5>
                </article>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    );
  }
}

export default MoreDetail;
