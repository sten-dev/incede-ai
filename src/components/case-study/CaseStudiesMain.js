import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
class CaseStudiesMain extends React.Component {
    render() {
        const { data } = this.props
        const { edges: caseStudies } = data.allMarkdownRemark
        console.log("case studies list", caseStudies)
        return (
            <section className="wtd-list ">
                <section className="header-section gap-y text-center">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Case Studies</h1>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container>

                </Container>
            </section>
        )
    }
}

CaseStudiesMain.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query CaseStudiesMainQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
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
        render={(data) => <CaseStudiesMain data={data} />}
    />
)
