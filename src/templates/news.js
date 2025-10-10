import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Row, Container } from "reactstrap";
import Transition from "../Transition";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const NewsTemplate = ({
  title,
  tagLine,
  feature,
  date,
  category,
  image,
  helmet,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  const  formatDate= (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <Transition>
      <section className="news-article">
        {helmet || ""}

        {/* Title bar */}
    <section className="text-white py-3 rounded-top" style={{ backgroundColor: "#0d1a4f" }}>          
    <Container>
            <Row>
              <Col>
                <h2 className="mb-0">{title}</h2>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Meta info */}
        <section className="bg-light py-2 border-bottom">
          <Container>
            <Row>
              <Col>
                <small className="text-muted">
                  Published: {formatDate(String(date))} • Category: {category}
                </small>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Hero image */}
        {image && (
          <Container className="my-3">
            <Row>
              <Col>
                <div className="rounded overflow-hidden">
                    <img src={image.childImageSharp?.fluid?.src || image} className="img-fluid w-70 min-vh-25" alt="image"/>
                  {/* <PreviewCompatibleImage imageInfo={image} /> */}
                </div>
              </Col>
            </Row>
          </Container>
        )}

        {/* Content */}
        <Container>
          <Row>
            <Col>
              <main className="content my-4">
                <PageContent content={content} />
              </main>
            </Col>
          </Row>
        </Container>
      </section>
    </Transition>
  );
};

NewsTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
};

const News = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle="News | Incede">
      <NewsTemplate
        helmet={
          <Helmet titleTemplate="%s | News">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        category={post.frontmatter.category}
        image={post.frontmatter.image}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default News;

export const pageQuery = graphql`
  query NewsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        feature
        category
        date
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;