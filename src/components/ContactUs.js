import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import ContactUs from "../components/Landing/ContactUs";

class ContactUsPage extends React.Component {
    render() {
        const { location } = this.props;
        console.log("props location", this.props)
        return (
            <React.Fragment>
                <ContactUs location={location} />
            </React.Fragment>
        )
    }
}

ContactUsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
    query ContactUsPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
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
        render={(data) => <ContactUsPage location={data.markdownRemark.frontmatter.location} />}
    />
)
