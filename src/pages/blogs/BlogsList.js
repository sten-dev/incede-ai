import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { graphql, useStaticQuery, Link } from "gatsby";
import "../../styles/resources.scss";
const BlogsList = () => {
  const data = useStaticQuery(graphql`
    query BlogsListQuery {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMMM DD YYYY • HH:mm A")
              image {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const allBlogs = data.allMarkdownRemark.edges
  const [expanded, setExpanded] = useState(false)

  const visibleBlogs = expanded ? allBlogs : allBlogs.slice(0, 3)

  return (
    <section className="resources-library-content" id="1">
      <div style={{ marginLeft: "15px" }}>
        <h4
          className="text-dark mb-3 ">Blogs (Editorial)</h4>
      </div>
      <Container>
        {allBlogs.length > 0 ? (
          <>
            <div
              style={{
                maxHeight: "550px",
                overflowY: expanded ? "auto" : "hidden",
                overflowX: "hidden",
                paddingRight: "16px",
              }}
            >
              <Row>
                {visibleBlogs.map((blog) => (
                  <Col xs="12" key={blog.node.id} className="mt-2">
                    <div
                      className="card shadow-sm  h-100"
                      style={{
                        border: "1px solid lightgrey",
                        transition: "border-color 0.3s ease-out", // smooth easing
                        borderRadius: "20px", // smooth easing


                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "purple";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "lightgrey";
                      }}
                    >                      <div className="card-body d-flex align-items-start">
                        {/* Left: Image */}
                        <Link to={blog.node.fields.slug} className="flex-shrink-0">
                          {blog.node.frontmatter.image?.childImageSharp?.fluid?.src && (
                            <img
                              src={blog.node.frontmatter.image.childImageSharp.fluid.src || "/placeholder.svg"}
                              alt={blog.node.frontmatter.title}
                              className="img-fluid rounded"
                              style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                          )}
                        </Link>

                        {/* Right: Content */}
                        <div className="ml-3 d-flex flex-column justify-content-between">
                          <div>
                            <h6 className="font-weight-bold mb-1">{blog.node.frontmatter.title}</h6>
                            <p className="text-muted mb-2 small">
                              {blog.node.frontmatter.speakers} • {blog.node.frontmatter.date}
                            </p>
                            <p className="mb-0 text-secondary">{blog.node.frontmatter.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            {/* Button outside scrollable div */}
            {allBlogs.length > 3 && !expanded && (
              <Col xs={12} className="d-flex justify-content-center mt-3">
                <Button
                  style={{
                    color: "black",
                    borderColor: "lightgrey",
                    backgroundColor: "white",
                    minWidth: "160px",
                  }}
                  onClick={() => setExpanded(true)}
                >
                  {"Load more"}
                </Button>
              </Col>
            )}
          </>
        ) : (
          <Row>
            <Col xs={12}>
              <h2 className="text-center">No data found</h2>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  )
}

export default BlogsList

