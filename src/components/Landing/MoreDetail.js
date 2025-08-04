import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/more_detail.scss";
import { Link } from "gatsby";
import arrow from "../../img/arrow.svg";
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
                    Enhancing Your Business with Proven Technology Expertise
                  </h1>
                  <h5 className="text-white sub-title">
                    Incede, with over a decade of industry experience,
                    specializes in delivering transformative technology
                    solutions tailored to enhance operational efficiency,
                    empower strategic decision-making, and provide a competitive
                    edge. Known for our proven track record and deep industry
                    knowledge, we focus on practical, real-world applications.
                    Committed to continually adapting our solutions to meet your
                    evolving business needs, we strive to remain your trusted
                    technology partner.
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
                    Elevate your business with our advanced Generative AI
                    consulting services. At Incede, we specialize in seamlessly
                    integrating cutting-edge, open-source Large Language Models
                    (LLMs) into your business processes to enhance workflow
                    automation and ensure robust AI governance. Starting with a
                    comprehensive assessment of your current systems, we
                    identify prime opportunities for Gen AI integration and then
                    develop a strategic roadmap tailored to your needs. This
                    roadmap outlines key milestones and expected outcomes to
                    ensure a smooth transition, empowering your operations with
                    the transformative capabilities of Generative AI. Discover
                    how our tailored solutions can revolutionize your operations
                    and drive innovation.
                  </h5>
                  <Link
                    to="/services/gen-ai-services"
                    className="btn explore-more-btn secondary btn-outline-info"
                  >
                    Explore more &nbsp;
                    <img src={arrow} alt="next" style={{ width: "8px" }} />
                  </Link>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">Agentic AI Services</h1>
                  <h5 className="text-white sub-title">
                    We draw on our extensive experience to provide
                    state-of-the-art Agentic AI Services tailored for
                    enhancing enterprise productivity. Our AI Assistants are
                    developed using advanced conversational AI and automation
                    technologies to ensure seamless integration into your
                    business infrastructure. Designed to improve efficiency
                    across various departments such as HR and customer service,
                    our services utilize a wide array of pre-built skills. This
                    allows us to customize solutions to meet your specific
                    operational needs. We offer full integration support and
                    continuous enhancements, ensuring our AI solutions
                    consistently elevate productivity and service quality.
                  </h5>
                  <Link
                    to="/services/ai-agentic-services"
                    className="btn explore-more-btn secondary btn-outline-info"
                  >
                    Explore more &nbsp;
                    <img src={arrow} alt="next" style={{ width: "8px" }} />
                  </Link>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">
                    Enterprise BI and Analytics Services
                  </h1>
                  <h5 className="text-white sub-title">
                    Unlock the full potential of your data with our Enterprise
                    Business Intelligence (BI) and Analytics solutions. We
                    specialize in transforming complex data from modern data
                    sources into clear, actionable insights that drive strategic
                    decision-making and business growth. Our team of experts is
                    dedicated to helping you leverage advanced BI and analytics
                    tools to enhance your data strategy, analytics, and overall
                    business performance. We provide comprehensive solutions,
                    from in-depth data management and advanced analytics to
                    detailed reporting systems, all designed to integrate
                    seamlessly with your existing IT infrastructure.
                  </h5>
                  <Link
                    to="/services/enterprise-bi-and-analytics"
                    className="btn explore-more-btn secondary btn-outline-info"
                  >
                    Explore more &nbsp;
                    <img src={arrow} alt="next" style={{ width: "8px" }} />
                  </Link>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half pb-0 text-left">
                  <h1 className="title">Planning and Budgeting Services</h1>
                  <h5 className="text-white sub-title">
                    At Incede, we specialize in providing top-tier planning and
                    budgeting tool implementation services designed to optimize
                    financial strategies and enhance business performance. Our
                    experienced consultants work closely with your team to
                    ensure that the planning and budgeting solutions we deploy
                    integrate seamlessly with your existing operations and align
                    perfectly with your business objectives. We focus on
                    creating flexible and robust systems that enable efficient
                    budget management, improved financial accuracy, and precise
                    forecasting. Along with tool implementation, we offer
                    comprehensive support and training to ensure your team is
                    fully equipped to leverage these tools effectively. Whether
                    you aim to streamline complex budgeting processes, enhance
                    financial forecasting, or gain deeper insights into your
                    financial data, Incede is committed to assisting you every
                    step of the way in transforming your financial management
                    practices and driving sustained growth.
                  </h5>
                  <Link
                    to="/services/planning-and-budgeting"
                    className="btn explore-more-btn secondary btn-outline-info"
                  >
                    Explore more &nbsp;
                    <img src={arrow} alt="next" style={{ width: "8px" }} />
                  </Link>
                </article>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left">
                  <h1 className="title">Applications Development</h1>
                  <h5 className="text-white sub-title">
                    When competitive advantage requires custom applications,
                    Incede has the expertise and specializes in mobile and web
                    app development. We can help in developing innovative
                    cloud-based applications that are user-centric and outcome
                    oriented across industries.
                  </h5>
                  <Link
                    to="/services/applications-development"
                    className="btn explore-more-btn secondary btn-outline-info"
                  >
                    Explore more &nbsp;
                    <img src={arrow} alt="next" style={{ width: "8px" }} />
                  </Link>
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
