import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SolutionsPostTemplate = ({
    subTitle,
    title,
    content,
    contentComponent,
    helmet,
}) => {
    const PageContent = contentComponent || Content;
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
                    </div>
                    <PageContent className="content" content={content} />
                </div>
            </div>
        </section>
    )
}

SolutionsPostTemplate.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    helmet: PropTypes.object,
}

const SolutionsPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <SolutionsPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                subTitle={post.frontmatter.subTitle}
                helmet={
                    <Helmet titleTemplate="%s | Solution">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.subTitle}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title}
            />
        </Layout>
    )
}

SolutionsPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default SolutionsPost

export const pageQuery = graphql`
  query SolutionsPostByID($id: String!) {
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
