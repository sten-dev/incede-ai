import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/home.scss";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";
import arrow from "../../img/arrow.svg";
import arrowPrimary from "../../img/arrow-primary.png";
import { Link } from "gatsby";
// import HeroImage from "../../img/hero_image.png";

// import HeroImage from "../../img/incede-home-page-latest.png";
// import HeroImage from "../../img/incede-ai-illustration.png";
import HeroImage from "../../img/incede-ai-services.png";
import CaseStudiesCarousalComponent from "./CaseStudiesCarousal";
// import HeroImage from "../../img/incede-home-page.png";
import { Link as ScrollLink } from "react-scroll";
class Home extends React.Component {
  state = {};
  render() {
    // const { home } = this.props;
    return (
      <>
        <section className="landing-home">
          <Container>
            <Row className="justify-content-center">
              {/* <Col lg={1} md={2}></Col> */}
              <Col lg={7} md={6} sm={12} xs={12} className="text-center text-md-left">
                <article className="mt-4 pb-0">
                  {/* <h1 className="text-primary bold">{home.title}</h1> */}
                  <h1 className="text-primary bold">
                    Innovate, Automate, Lead
                  </h1>
                  <h4>Transform Your Business with Our AI Solutions</h4>
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
              <Col xs={11} sm={9} lg={5} md={6} className="d-flex align-items-center position-initial mt-4 mt-md-0">
                <div className="image-section pb-0">
                  <img src={HeroImage} alt="hero" />
                </div>
              </Col>
              <Col xs={12} className="d-block d-xl-none">
                <CaseStudiesCarousalComponent />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-more-detail bg-primary">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="text-white">
                <article className="gap-y-half text-left">
                  <h1 className="title">
                    Elevate Your Business with Our Advanced Generative AI
                    Consulting Services
                  </h1>
                  <h5 className="sub-title">
                    Are you ready to revolutionize your business operations? At
                    Incede, we specialize in customizing and integrating
                    cutting-edge, open-source Large Language Models (LLMs) to
                    enhance workflow automation and ensure robust AI governance.
                  </h5>
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg={11} md={11} sm={11} xs={11}>
                        <div>
                          <h3 className="mb-1">
                            <b>Why Choose Incede?</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Comprehensive Assessment</b>: We start with an
                              in-depth analysis of your current systems to
                              identify prime opportunities for Generative AI
                              integration.
                            </li>
                            <li>
                              <b>Strategic Roadmap</b>: We develop a customized
                              roadmap, outlining key milestones and expected
                              outcomes, ensuring a smooth transition and
                              empowering your operations.
                            </li>
                            <li>
                              <b>Tailored Solutions</b>: Our solutions are
                              specifically designed to meet your unique needs,
                              driving innovation and operational excellence.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>What We Offer:</b>
                          </h3>
                          <ul>
                            <li>
                              Seamless integration of advanced Generative AI
                              into your business processes.
                            </li>
                            <li>Customization of open source LLMs.</li>
                            <li>
                              Enhanced workflow automation that boosts
                              productivity and efficiency.
                            </li>
                            <li>
                              Robust AI governance to maintain high standards of
                              quality and compliance.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>Unlock the Power of Generative AI:</b>
                          </h3>
                          <p className="sub-title">
                            Discover the transformative capabilities of
                            Generative AI and how it can drive innovation in
                            your organization. Our expert team is here to guide
                            you through every step of the process, ensuring you
                            achieve the maximum benefits.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>Take Action Now!</b> Don't miss the opportunity
                            to elevate your business to new heights.{" "}
                            <ScrollLink
                              className="text-white pointer text"
                              to="contact-us-location"
                              smooth={true}
                            >
                              <b>
                                <u>Contact us today</u>
                              </b>
                            </ScrollLink>{" "}
                            to learn more about how our advanced Generative AI
                            consulting services can revolutionize your
                            operations.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>Ready to Transform Your Business?</b> Your future
                            in AI-driven success begins here!
                          </p>
                          <br />
                          <Link
                            to="/services/gen-ai-services"
                            className="btn explore-more-btn secondary btn-outline-info"
                          >
                            Explore more &nbsp;
                            <img
                              src={arrow}
                              alt="next"
                              style={{ width: "8px" }}
                            />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-more-detail">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left">
                  <h1 className="title">
                    Transform Your Business with Our AI Assistant Services
                  </h1>
                  <h5 className="sub-title">
                    Are you ready to boost your enterprise productivity? Our
                    state-of-the-art AI Assistant services are here to
                    revolutionize your operations. Leveraging advanced
                    conversational AI and automation technologies, we ensure
                    seamless integration into your business infrastructure.
                  </h5>
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg={11} md={11} sm={11} xs={11}>
                        <div>
                          <h3 className="mb-1">
                            <b>Why Choose Our AI Assistants?</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Tailored Solutions</b>: We customize our AI
                              Assistants to meet your specific operational
                              needs, enhancing efficiency across various
                              departments such as HR and customer service.
                            </li>
                            <li>
                              <b>Pre-Built Skills</b>: Our AI Assistants come
                              equipped with a wide array of pre-built skills,
                              allowing for quick and effective deployment.
                            </li>
                            <li>
                              <b>Full Integration Support</b>: We provide
                              comprehensive support to ensure a smooth
                              integration process.
                            </li>
                            <li>
                              <b>Continuous Enhancements</b>: Our commitment to
                              ongoing improvements ensures that your AI
                              solutions remain cutting-edge, consistently
                              elevating productivity and service quality.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>Discover the Benefits:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Enhanced Productivity</b>: Streamline workflows
                              and reduce manual tasks with our AI-powered
                              automation.
                            </li>
                            <li>
                              <b>Improved Efficiency</b>: Optimize departmental
                              operations, making your business more agile and
                              responsive.
                            </li>
                            <li>
                              <b>Seamless Integration</b>: Our AI Assistants fit
                              effortlessly into your existing systems,
                              minimizing disruption.
                            </li>
                          </ul>
                          <br />
                          <p className="sub-title">
                            <b>Take Action Now!</b> Elevate your business to new
                            heights with our advanced AI Assistant services.{" "}
                            <ScrollLink
                              className="text-body pointer text"
                              to="contact-us-location"
                              smooth={true}
                            >
                              <b>
                                <u>Contact us today</u>
                              </b>
                            </ScrollLink>{" "}
                            to learn more about how our tailored solutions can
                            transform your enterprise.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>
                              Ready to Experience the Future of Productivity?
                            </b>{" "}
                            Your path to a smarter, more productive business
                            begins here!
                          </p>
                          <br />
                          <Link
                            to="/services/ai-assistant-services"
                            className="btn explore-more-btn primary btn-outline-info"
                          >
                            Explore more &nbsp;
                            <img
                              src={arrowPrimary}
                              alt="next"
                              style={{ width: "8px" }}
                            />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-more-detail bg-primary">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left text-white">
                  <h1 className="title">
                    Unlock Your Data's Potential with Our Enterprise BI and
                    Analytics Services
                  </h1>
                  <h5 className="sub-title">
                    Are you ready to harness the power of your data? Our
                    AI-powered Enterprise Business Intelligence (BI) and
                    Analytics solutions are designed to transform complex data
                    into intuitive, actionable insights that drive strategic
                    decision-making and fuel business growth.
                  </h5>
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg={11} md={11} sm={11} xs={11}>
                        <div>
                          <h3 className="mb-1">
                            <b>Why Choose Our BI and Analytics Services?</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Transformative Insights</b>: We specialize in
                              converting data from modern sources into insights
                              that propel your business forward.
                            </li>
                            <li>
                              <b>Strategic Decision-Making</b>: Empower your
                              team with the information they need to make
                              informed, strategic decisions.
                            </li>
                            <li>
                              <b>Comprehensive Solutions</b>: From data
                              management and advanced analytics to detailed
                              reporting systems, we cover it all.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>What We Offer:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Advanced BI Tools</b>: Leverage cutting-edge BI
                              tools to enhance your data strategy and analytics
                              capabilities.
                            </li>
                            <li>
                              <b>Seamless Integration</b>: Our solutions
                              integrate effortlessly with your existing IT
                              infrastructure.
                            </li>
                            <li>
                              <b>Expert Guidance</b>: Our team of experts is
                              dedicated to helping you maximize the potential of
                              your data.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>Benefits of Our Services:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Enhanced Data Strategy</b>: Improve your data
                              management and analytics approach.
                            </li>
                            <li>
                              <b>Business Performance</b>: Boost overall
                              business performance with data-driven insights.
                            </li>
                            <li>
                              <b>In-Depth Reporting</b>: Gain access to detailed
                              reporting systems that provide clarity and
                              direction.
                            </li>
                          </ul>
                          <br />
                          <p className="sub-title">
                            <b>Take Action Now!</b> Don't let your data go
                            untapped.{" "}
                            <ScrollLink
                              className="text-white pointer text"
                              to="contact-us-location"
                              smooth={true}
                            >
                              <b>
                                <u>Contact us today</u>
                              </b>
                            </ScrollLink>{" "}
                            to learn how our Enterprise BI and Analytics
                            services can transform your business.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>
                              Ready to Unlock Your Data's Full Potential?
                            </b>{" "}
                            Your journey to data-driven growth begins here!
                          </p>
                          <br />
                          <Link
                            to="/services/enterprise-bi-and-analytics"
                            className="btn explore-more-btn secondary btn-outline-info"
                          >
                            Explore more &nbsp;
                            <img
                              src={arrow}
                              alt="next"
                              style={{ width: "8px" }}
                            />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-more-detail">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left">
                  <h1 className="title">
                    Optimize Your Strategies with Our Planning and Budgeting
                    Services
                  </h1>
                  <h5 className="sub-title">
                    Are you ready to take your financial and operational
                    management to the next level? At Incede, we specialize in
                    providing top-tier planning and budgeting tool
                    implementation services that optimize your strategies and
                    enhance business performance.
                  </h5>
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg={11} md={11} sm={11} xs={11}>
                        <div>
                          <h3 className="mb-1">
                            <b>Why Choose Incede?</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Seamless Integration</b>: Our experienced
                              consultants ensure that the solutions we deploy
                              integrate seamlessly with your existing operations
                              and align perfectly with your business objectives.
                            </li>
                            <li>
                              <b>Flexible and Robust Systems</b>: We create
                              systems that enable efficient budget management,
                              improved financial accuracy, and precise
                              forecasting.
                            </li>
                            <li>
                              <b>Comprehensive Support and Training</b>: We
                              offer extensive support and training to ensure
                              your team can leverage these tools effectively.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>What We Offer:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Streamlined Budgeting Processes</b>: Simplify
                              complex budgeting processes to save time and
                              reduce errors.
                            </li>
                            <li>
                              <b>Enhanced Forecasting</b>: Improve your
                              forecasting accuracy to make better-informed
                              decisions.
                            </li>
                            <li>
                              <b>Insights and Transparency</b>: Gain valuable
                              insights into your data to drive strategic
                              planning.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>Benefits of Our Services:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Optimized Business Strategies</b>: Tailor your
                              strategies to meet your unique business needs.
                            </li>
                            <li>
                              <b>Improved Business Performance</b>: Enhance your
                              overall business performance with efficient
                              financial management.
                            </li>
                            <li>
                              <b>Sustained Growth</b>: Drive sustained growth by
                              transforming your financial management practices.
                            </li>
                          </ul>
                          <br />
                          <p className="sub-title">
                            <b>Take Action Now!</b> Don't miss the opportunity
                            to revolutionize your financial and operational
                            planning and budgeting.{" "}
                            <ScrollLink
                              className="text-body pointer text"
                              to="contact-us-location"
                              smooth={true}
                            >
                              <b>
                                <u>Contact us today</u>
                              </b>
                            </ScrollLink>{" "}
                            to learn more about how Incede can help transform
                            your management practices.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>Ready to Transform Your Financial Management?</b>{" "}
                            Your path to enhanced performance starts here!
                          </p>
                          <br />
                          <Link
                            to="/services/planning-and-budgeting"
                            className="btn explore-more-btn primary btn-outline-info"
                          >
                            Explore more &nbsp;
                            <img
                              src={arrowPrimary}
                              alt="next"
                              style={{ width: "8px" }}
                            />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="home-more-detail bg-primary">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <article className="gap-y-half text-left text-white">
                  <h1 className="title">
                    Gain a Competitive Edge with Our Custom Applications
                    Development
                  </h1>
                  <h5 className="sub-title">
                    Are you ready to stand out in your industry with custom
                    applications? At Incede, we specialize in mobile and web app
                    development that delivers innovative, cloud-based solutions
                    designed to be user-centric and outcome-oriented.
                  </h5>
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg={11} md={11} sm={11} xs={11}>
                        <div>
                          <h3 className="mb-1">
                            <b>Why Choose Incede?</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Expertise in Custom Development</b>: Our team
                              has extensive experience in developing custom
                              applications tailored to your unique business
                              needs.
                            </li>
                            <li>
                              <b>Innovative Solutions</b>: We focus on creating
                              cloud-based applications that drive innovation and
                              efficiency.
                            </li>
                            <li>
                              <b>Industry-Specific Knowledge</b>: We understand
                              the nuances of various industries, ensuring our
                              solutions are perfectly aligned with your goals.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>What We Offer:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>Mobile App Development</b>: Create seamless,
                              user-friendly mobile applications that enhance
                              customer engagement and drive business growth.
                            </li>
                            <li>
                              <b>Web App Development</b>: Develop robust,
                              scalable web applications that streamline
                              operations and improve user experience.
                            </li>
                            <li>
                              <b>Cloud-Based Solutions</b>: Leverage the power
                              of the cloud to build applications that are
                              flexible, secure, and accessible from anywhere.
                            </li>
                          </ul>
                          <h3 className="mb-1">
                            <b>Benefits of Our Services:</b>
                          </h3>
                          <ul>
                            <li>
                              <b>User-Centric Design</b>: Ensure your
                              applications are designed with the end-user in
                              mind, enhancing usability and satisfaction.
                            </li>
                            <li>
                              <b>Outcome-Oriented Approach</b>: Focus on
                              achieving tangible business outcomes that provide
                              a competitive advantage.
                            </li>
                            <li>
                              <b>Cross-Industry Expertise</b>: Benefit from our
                              experience across various industries, ensuring
                              your application meets industry standards and
                              exceeds expectations.
                            </li>
                          </ul>
                          <br />
                          <p className="sub-title">
                            <b>Take Action Now!</b>Don’t let your competitors
                            outpace you.{" "}
                            <ScrollLink
                              className="text-white pointer text"
                              to="contact-us-location"
                              smooth={true}
                            >
                              <b>
                                <u>Contact us today</u>
                              </b>
                            </ScrollLink>{" "}
                            to learn more about how our custom applications
                            development services can give you the competitive
                            edge you need.
                          </p>
                          <br />
                          <p className="sub-title">
                            <b>
                              Ready to Transform Your Business with Custom Applications?
                            </b>{" "}
                            Your path to a competitive advantage begins here!
                          </p>
                          <br />
                          <Link
                            to="/services/applications-development"
                            className="btn explore-more-btn secondary btn-outline-info"
                          >
                            Explore more &nbsp;
                            <img
                              src={arrow}
                              alt="next"
                              style={{ width: "8px" }}
                            />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Home;
