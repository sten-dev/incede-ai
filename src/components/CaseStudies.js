import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/case-studies.scss";
import { Container, Row, Col } from "reactstrap";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import arrow from "../img/arrow.svg";

class CaseStudies extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: caseStudies } = data.allMarkdownRemark;

    // console.log("caseStudies", caseStudies);
    return (
      <section className="case-studies">
        <Container>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={false}
            showArrows={false}
          >
            {caseStudies.map((x, i) => {
              let caseStudy = x.node.frontmatter;
              return (
                <div key={i}>
                  <Row>
                    <Col lg={6} md={5}>
                      <h1 className="text-white xs-center mb-3  header">
                        Case Studies
                      </h1>
                      <div className="image-section-mobile xs-image mb-3 mb-md-0 d-block d-md-none xs-center">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: caseStudy.image,
                            alt: `case study`
                          }}
                        />
                      </div>
                      <p className="text-white title xs-center mb-2">
                        {caseStudy.title}
                      </p>
                      <small className="text-white xs-center description">
                        {caseStudy.description}
                      </small>
                      <br />
                      <br />
                      <div className="xs-center mt-4">
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg"
                        >
                          Download Case Study{" "}
                          <img
                            src={arrow}
                            alt="next"
                            style={{ width: "12px", marginTop: "6px" }}
                          />
                        </button>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      md={7}
                      className="d-none d-md-block position-initial"
                    >
                      <div className="image-section">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: caseStudy.image,
                            alt: `case study`,
                            style: { width: "100%" }
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </section>
    );
  }
}

CaseStudies.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudiesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                title
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <CaseStudies data={data} />}
  />
);
