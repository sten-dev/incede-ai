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
import { Link } from "gatsby";

class CaseStudiesCarousalComponent extends Component {
  state = {
    caseStudiesList: [
      {
        img: ZyngaLogo2,
        mainTxt:
          '"Zynga relies on Incede.ai as a valued partner to implement and support our Business Intelligence system. Incede.ai helped us migrate from an Excel-based environment to a best-in-class IBM Cognos FPM system without impacting our ongoing financial planning and analysis processes."',
        caption: "- Sr. Director, Financial Planning and Analysis, Zynga",
      },
      {
        img: ibmpos_blue,
        mainTxt:
          '"The team at Incede.ai consistently exhibits great understanding of critical success factors customers need to achieve in choosing and implementing an optimal architecture, while exposing key trends in approaches, tools, and technologies that will impact the BI infrastructure in the future."',
        caption: "- Don Campbell CTO IBM/Cognos",
      },
      {
        img: tinetlogo,
        mainTxt:
          '"Incede.ai is a partner who honor their commitments. By bringing business and technical expertise to the table, they delivered important Business Analytics solutions to TriNet both on-time and in-budget."',
        caption: "- Director of Applications Development, TriNetGroup, Inc.",
      },
      {
        img: daptiv_twocolors_onwhite,
        mainTxt:
          '"Incede.ai has an experienced technical team and their employees are skilled, knowledgeable, and extremely committed to the success of Daptiv."',
        caption: "- VP Professional Services - Daptiv",
      },
      {
        img: ticketmaster_logo,
        mainTxt:
          '"Incede.ai is a company that understands customers needs and has shown strong commitment to delivering high-quality solutions, on-time and on-budget."',
        caption: "- Sr. Business Analytics Manager - Ticketmaster",
      },
      {
        img: yakimavalleylogo,
        mainTxt:
          '"Incede.ai has been an extension of our team. They are very knowledgeable and flexible, so we call upon them often to help us in learning new areas."',
        caption: "- Director of Informatics - Yakima Valley Farm Workers Clinic",
      },
      {
        img: Markon_Logo,
        mainTxt:
          '"Working with Incede.ai has been a great experience for MARKON. Their insight and approach to developing our solution is commendable and backed by very highly competent consultants and technical experts. We could not have gone this far without their help."',
        caption: "- VP Finance - MARKON Cooperative",
      },
      {
        img: ChurchBrothers_Footer,
        mainTxt: `"Incede.ai helped us find and implement the best reporting system for our company's needs. They assisted with great knowledge and skill through installation, setup, implementation, and training. The Incede.ai team was available 24 hours a day when we needed them. I would recommend them, and would without reservation go to them for any similar project in the future."`,
        caption: "- Director of IT - Church Brothers",
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
                            <div className="company-logo">
                              <img
                                src={testimonial.img}
                                alt={testimonial.caption}
                              />
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

export default CaseStudiesCarousalComponent;
