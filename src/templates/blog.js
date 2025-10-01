import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Row, Container } from "reactstrap";
import Transition from "../Transition";

export const BlogTemplate = ({
  title,
  description,
  author,
  date,
  readingTime,
  image,
  format,
  speakers,
  category,
  helmet,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <Transition>
      <section className="blog">
        {helmet || ""}
        <section className="header-section gap-y">
          <Container>
            <Row>
              <Col>
                <h1>{title}</h1>
                <p>
                  <strong>Author:</strong> {author}
                </p>
                {/* <p>
                  <strong>Date:</strong> {date}
                </p> */}
                <p>
                  <strong>Time for Reading:</strong> {readingTime}
                </p>
                <p>
                  <strong>Format:</strong> {format}
                </p>
                <p>
                  <strong>Category:</strong> {category}
                </p>
                <p>{description}</p>
                {Array.isArray(speakers) && speakers.length > 0 && (
                  <div>
                    <strong>Speakers:</strong>
                    <ul>
                      {speakers.map((speaker, idx) => (
                        <li key={idx}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
    </Transition>
  );
};

BlogTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  image: PropTypes.string,
  format: PropTypes.string,
  speakers: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object,
  ]),
  category: PropTypes.string,
  helmet: PropTypes.object,
  content: PropTypes.node,
  contentComponent: PropTypes.func,
};

const Blog = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle="Blog | Incede">
      <BlogTemplate
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        author={post.frontmatter.author}
        date={post.frontmatter.date}
        readingTime={post.frontmatter.readingTime}
        image={post.frontmatter.image}
        format={post.frontmatter.format}
        speakers={post.frontmatter.speakers}
        category={post.frontmatter.category}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Blog;

