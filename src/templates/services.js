import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const ServicesTemplate = ({
    title,
    subTitle,
    image,
    helmet,
}) => {
    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{subTitle}</p>
                        {image && (
                            <PreviewCompatibleImage imageInfo={image} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

ServicesTemplate.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    helmet: PropTypes.object,
}

const Services = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <ServicesTemplate
                helmet={
                    <Helmet titleTemplate="%s | Service">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.subTitle}`}
                        />
                    </Helmet>
                }
                subTitle={post.frontmatter.subTitle}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
            />
        </Layout>
    )
}

Services.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Services

export const pageQuery = graphql`
  query ServicesByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subTitle
        image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  }
`
