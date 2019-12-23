import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../styles/case-studies.scss";
import { Container, Row, Col } from 'reactstrap';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class CaseStudies extends React.Component {
  render() {
    const { data } = this.props
    const { edges: caseStudies } = data.allMarkdownRemark

    console.log("caseStudies", caseStudies);
    return (
      <section className="case-studies">
        <Container>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} showArrows={false}>
            {caseStudies.map((x, i) => {
              let caseStudy = x.node.frontmatter;
              return (
                <div>
                  <Row>
                    <Col lg={7} md={5}>
                      <h4 className="text-white header">Case Studies</h4>
                      <p className="text-white title">{caseStudy.title}</p>
                      <small className="text-white description">{caseStudy.description}</small>
                      <br />
                      <br />
                      <button type="button" className="btn btn-secondary btn-lg">
                        Download Case Study <i className="fas fa chevron-down"></i>
                      </button>
                    </Col>
                    <Col lg={5} md={7} className="d-none d-md-block position-initial">
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
    )
  }
}

CaseStudies.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

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
    render={(data) => <CaseStudies data={data} />}
  />
)
