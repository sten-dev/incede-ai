import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class IndustriesMain extends React.Component {
    render() {
        const { data } = this.props
        const { edges: industries } = data.allMarkdownRemark
        console.log("industries list", industries)
        return (
            <div >

            </div>
        )
    }
}

IndustriesMain.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query IndustriesMainQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "industries" } } }
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
                subTitle
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
        render={(data) => <IndustriesMain data={data} />}
    />
)
