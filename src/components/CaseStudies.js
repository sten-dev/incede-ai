import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class CaseStudies extends React.Component {
  render() {
    const { data } = this.props
    const { edges: caseStudies } = data.allMarkdownRemark
    console.log("caseStudies", caseStudies);
    return (
      <div className="columns is-multiline">
      </div>
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
                    fluid(maxWidth: 120, quality: 100) {
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
