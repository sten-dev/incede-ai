import React, { useState } from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import { Button } from "reactstrap";
import "../../styles/resources.scss";
import { Link, graphql, useStaticQuery } from "gatsby";

const NewsList = () => {
const data = useStaticQuery(graphql`
  query NewsListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "news" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            feature
            date(formatString: "MMM DD YYYY • hh:mm a")
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
`);

  const allCaseStudies = data.allMarkdownRemark.edges;
  const [expanded, setExpanded] = useState(false);

  // If not expanded -> only 4 cards
  const visibleCards = expanded ? allCaseStudies : allCaseStudies.slice(0, 4);

  return (
    <section className="resources-library-content pb-3" id="1">
    <div style={{ marginLeft: "60px" }}>
      <h4 
        className="text-dark mb-3 ">News</h4>
    </div>
      
      
      <Container>
        {allCaseStudies.length > 0 ? (
          <div
            style={{
              maxHeight: "550px", 
              overflowY: expanded ? "auto" : "hidden",
              overflowX: "hidden",
              
            }}
          >
            <Row>
              {visibleCards.map((caseStudy) => (
                <Col xs="12" md="8" lg="10" className="mx-auto mt-2" key={caseStudy.node.id}>
                  <div
                    className="card shadow-sm h-100"
                    style={{
                      border: "1px solid lightgrey",
                      transition: "border-color 0.3s ease-out",
                      borderRadius: "20px", // smooth easing
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "purple";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "lightgrey";
                    }}
                  >
                    <Link
                      to={caseStudy.node.fields.slug}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="card-body">
                        {/* Row for date + title */}
                        <div className="d-flex align-items-center">
                          <div className="text-muted small mr-3">
                            {caseStudy.node.frontmatter.date}
                          </div>
                          <h6 h6 className="font-weight-bold mb-0" style={{ fontSize: "1.25rem" }}>
                            {caseStudy.node.frontmatter.title}
                          </h6>
                        </div>

                        {/* Row for description */}
                        <p className="mb-0 text-secondary">
                          {caseStudy.node.frontmatter.description}
                        </p>
                      </div>
                    </Link>

                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <Row>
            <Col xs={12}>
              <h2 className="text-center">No data found</h2>
            </Col>
          </Row>
        )}

        {allCaseStudies.length > 4 && !expanded && (
          <Row className="justify-content-center mt-3">
            <Col xs="12" md="8" lg="10" className="d-flex justify-content-center">
              <Button
                style={{
                  color: "black",
                  borderColor: "lightgrey",
                  backgroundColor: "white",
                  minWidth: "160px",
                }}
                onClick={() => setExpanded(true)}
              >
                Load more
              </Button>
            </Col>
          </Row>
        )}

      </Container>
    </section>
  );
};

export default NewsList;
