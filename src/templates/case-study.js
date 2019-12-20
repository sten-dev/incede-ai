import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const CaseStudyTemplate = ({
    title,
    subTitle,
    description,
    image,
    helmet,
}) => {
    console.log("case study", image)
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
                        <p>{description}</p>
                        <PreviewCompatibleImage imageInfo={image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

CaseStudyTemplate.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    helmet: PropTypes.object,
}

const CaseStudy = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <CaseStudyTemplate
                helmet={
                    <Helmet titleTemplate="%s | Case Study">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.subTitle}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title}
                subTitle={post.frontmatter.subTitle}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
            />
        </Layout>
    )
}

CaseStudy.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subTitle
        description
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
