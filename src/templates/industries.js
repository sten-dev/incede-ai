import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content'
import { Col, Row, Container } from "reactstrap";

export const IndustriesTemplate = ({
    title,
    subTitle,
    image,
    helmet,
    content,
    contentComponent,
}) => {
    const PageContent = contentComponent || Content;
    return (
        <section className="service-page">
      {helmet || ""}
      <section className="header-section gap-y">
        <Container>
          <Row>
            <Col>
              <h1>{title}</h1>
              <h6>{subTitle}</h6>
              {/* {image && <PreviewCompatibleImage imageInfo={image} />} */}
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col>
            <main className="content gap-y-half">
              <PageContent content={content} />
            </main>
          </Col>
        </Row>
      </Container>
    </section>
    )
}

IndustriesTemplate.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    helmet: PropTypes.object,
}

const Industries = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <IndustriesTemplate
                helmet={
                    <Helmet titleTemplate="%s | Industry">
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
                content={post.html}
                contentComponent={HTMLContent}
            />
        </Layout>
    )
}

Industries.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Industries

export const pageQuery = graphql`
  query IndustriesByID($id: String!) {
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
