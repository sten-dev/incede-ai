import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Row, Container } from "reactstrap";
import Transition from "../Transition";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const BlogTemplate = ({
  title,
  description,
  author,
  date,
  readingTime,
  image,
  format,
  feature,
  speakers,
  category,
  helmet,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  console.log(image,"imagesssssssssssssssssssssssssssssssss")

   const  formatDate= (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <Transition>
      <section className="blog">
        {helmet || ""}

        {/* Hero Section */}
        <section
          style={{
            background: image ? "transparent" : "linear-gradient(135deg, #0066CC 0%, #4DA6FF 100%)",
            padding: image ? "0" : "120px 0",
            marginBottom: "40px",
            borderRadius: "0 0 16px 16px",
            height: image ? "350px" : "auto",
            overflow: "hidden",
          }}
        >
          {image ? (
            <Container fluid className="p-0">
              <Row className="g-0">
                <Col>
                  <img
                    src={image.childImageSharp?.fluid?.src || image.publicURL || image}
                    alt="Hero banner"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "0 0 16px 16px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
          ) : (
            <Container>
              <Row>
                <Col className="text-center">
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "18px",
                      margin: 0,
                    }}
                  >
                    Hero visual / illustration
                  </p>
                </Col>
              </Row>
            </Container>
          )}
        </section>

        <Container style={{ maxWidth: "1200px" }}>
          {/* Breadcrumb */}
          {category && (
            <div style={{ marginBottom: "24px" }}>
              <span
                style={{
                  color: "#0066CC",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {category}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "32px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>

          <Row>
            {/* Left Sidebar - Author Card */}
            <Col md={12}>
              {/* Article Meta */}
              <div
                style={{
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid #e5e5e5",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "14px", color: "#666" }}>
                  By {author} &nbsp;&nbsp; {formatDate(String(date))} &nbsp;&nbsp; {readingTime}
                </div>
              </div>

              {/* Main Content */}
              <main
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#333",
                }}
              >
                <PageContent content={content} />
              </main>

              {/* Speakers Section */}
              {Array.isArray(speakers) && speakers.length > 0 && (
                <div
                  style={{
                    marginTop: "40px",
                    padding: "24px",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "18px",
                      color: "#1a1a1a",
                      display: "block",
                      marginBottom: "12px",
                    }}
                  >
                    Speakers:
                  </strong>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "20px",
                    }}
                  >
                    {speakers.map((speaker, idx) => (
                      <li
                        key={idx}
                        style={{
                          marginBottom: "8px",
                          color: "#333",
                        }}
                      >
                        {speaker}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
  console.log("Post data:", post); // Debugging line
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

export const pageQuery = graphql`
  query BlogByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        author
        date(formatString: "MMMM DD, YYYY")
        readingTime
        format
        category
        feature
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
