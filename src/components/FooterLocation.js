import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class FooterLocation extends React.Component {
    render() {

        console.log("footer location", this.props)
        const { location } = this.props
        return (
            <ul className="list-unstyled">
                <li>
                    <h6>Contact Us</h6>
                </li>

                <li>
                    <p>{location.phone}, {location.email}</p>
                </li>
                <li>
                    <address>
                        {location.address}
                    </address>
                </li>
            </ul>
        )
    }
}

FooterLocation.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
    query FooterLocationTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            home {
              title
              subTitle
              button
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            about {
              title
              subTitle
              button
            }
            location {
              title
              subTitle
              phone
              email
              address
            }
          }
        }
      }
    `}
        render={(data) => <FooterLocation location={data.markdownRemark.frontmatter.location} />}
    />
)
