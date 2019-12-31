import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Row, Container } from "reactstrap";

export const SolutionsPostTemplate = ({
  subTitle,
  title,
  content,
  contentComponent,
  helmet
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="solution-page">
      {helmet || ""}
      <section className="header-section gap-y">
        <Container>
          <Row>
            <Col>
            <h1>{title}</h1>
              <h4>{subTitle}</h4>
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
  );
};

SolutionsPostTemplate.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  helmet: PropTypes.object
};

const SolutionsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SolutionsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        subTitle={post.frontmatter.subTitle}
        helmet={
          <Helmet titleTemplate="%s | Solution">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.subTitle}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

SolutionsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SolutionsPost;

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
`;
