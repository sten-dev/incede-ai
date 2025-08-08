import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Col, Row } from "reactstrap";
import "../../styles/case-study-carousal.scss";
import ZyngaLogo2 from "../../img/case-studies/ZyngaLogo2.png";
import ibmpos_blue from "../../img/case-studies/ibmpos_blue.png";
import tinetlogo from "../../img/case-studies/tinetlogo.png";
import daptiv_twocolors_onwhite from "../../img/case-studies/daptiv_twocolors_onwhite.png";
import ticketmaster_logo from "../../img/case-studies/ticketmaster_logo.png";
import yakimavalleylogo from "../../img/case-studies/yakimavalleylogo.png";
import Markon_Logo from "../../img/case-studies/2000_Markon_Logo.png";
import ChurchBrothers_Footer from "../../img/case-studies/ChurchBrothers_Footer.png";

class TestimonialCarousel extends Component {
  state = {
    caseStudiesList: [
      {
        mainTxt:
          '"Incede helped us reduce approval cycles by 70% using Watsonx-powered AI agents"',
        caption: "— VP, Financial Services Company",
      },
      {
        mainTxt:
          '"They modernized our forecasting in record time. Our finance team is finally proactive, not reactive."',
        caption: "— Head of FP&A, Technology Company",
      },
    ],
    chunkSize: 3,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth <= 576) {
      this.setState({ chunkSize: 1 });
    } else if (window.innerWidth <= 768) {
      this.setState({ chunkSize: 2 });
    } else {
      this.setState({ chunkSize: 3 });
    }
  };

  render() {
    const { caseStudiesList, chunkSize } = this.state;
    const chunkedCaseStudies = [];
    for (let i = 0; i < caseStudiesList.length; i += chunkSize) {
      chunkedCaseStudies.push(caseStudiesList.slice(i, i + chunkSize));
    }
    return (
      <React.Fragment>
        {chunkedCaseStudies && chunkedCaseStudies.length > 0 && (
          <section className="case-study mt-1 mt-md-5">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              showArrows={false}
              showIndicators={false}
            >
              {chunkedCaseStudies.map((chunk, chunkIndex) => (
                <div key={chunkIndex}>
                  <Row className="gap-y-half pt-lg-2 pt-xl-3 justify-content-center">
                    {chunk.map((testimonial, testimonialIndex) => (
                      <Col
                        md={12 / chunkSize}
                        key={testimonialIndex}
                      >
                        <div className="testimonial-card">
                          <p className="quote">{testimonial.mainTxt}</p>
                          <div className="author-section">
                            <div className="author-info">
                              <div>
                                <p className="author-name">
                                  {testimonial.caption}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Carousel>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default TestimonialCarousel;
