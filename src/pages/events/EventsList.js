import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { graphql, useStaticQuery, Link } from "gatsby";

const EventsList = () => {
  const data = useStaticQuery(graphql`
    query EventsListQuery {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "events" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD YYYY")
            }
          }
        }
      }
    }
  `);

  const allEvents = data.allMarkdownRemark.edges;
  const [expanded, setExpanded] = useState(false);
  const visibleEvents = expanded ? allEvents : allEvents.slice(0, 3);
console.log(allEvents,"allEvents")
  // Format date into parts (e.g. Oct 12 2025 -> Oct | 12 | 2025)
  const splitDate = (dateStr) => {
    const parts = dateStr.split(" ");
    return { month: parts[0], day: parts[1], year: parts[2] };
  };

  return (
    <section
      style={{
        backgroundColor: "#f8fbff",
        borderRadius: "10px",
        padding: "20px",
        border: "1px solid #e3e6ea",
      }}
    >
      <Container fluid>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div>
            <h5 style={{ fontWeight: "bold", marginBottom: "5px" }}>
              Upcoming Events
            </h5>
            <p style={{ margin: 0, color: "#555" }}>
              In-person and virtual events, workshops and webinars
            </p>
          </div>
          <Button
            className='btn btn-primary'
            style={{
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            See all events
          </Button>
        </div>

        {/* Events Grid */}
        <Row>
          {visibleEvents.map(({ node }) => {
            const { title, description, date } = node.frontmatter;
            const { month, day, year } = splitDate(date);

            return (
              <Col
                md="4"
                key={node.id}
                style={{
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e3e6ea",
                    borderRadius: "10px",
                    padding: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Date and Content */}
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    {/* Date Box */}
                    <div
                      style={{
                        backgroundColor: "#f4f6fb",
                        borderRadius: "8px",
                        padding: "8px 14px",
                        textAlign: "center",
                        marginRight: "15px",
                        minWidth: "70px",
                      }}
                    >
                      <div style={{ fontWeight: "bold", color: "#0d1a4f" }}>
                        {month}
                      </div>
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color: "#0d1a4f",
                          lineHeight: "1",
                        }}
                      >
                        {day}
                      </div>
                      <div style={{ color: "#6c757d", fontSize: "12px" }}>
                        {year}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h6
                        style={{
                          fontWeight: "bold",
                          color: "#0d1a4f",
                          marginBottom: "5px",
                        }}
                      >
                        {title}
                      </h6>
                      <p
                        style={{
                          color: "#555",
                          marginBottom: "0",
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Register Button */}
                  <div style={{ marginTop: "15px" }}>
                    <Link to={node.fields.slug}>
                      <Button
                        className='btn btn-primary'

                        style={{
                          border: "none",
                          borderRadius: "6px",
                          fontWeight: "bold",
                          padding: "6px 18px",
                        }}
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Load More Button */}
        {allEvents.length > 3 && !expanded && (
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <Button
              onClick={() => setExpanded(true)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "#ccc",
                borderRadius: "6px",
                minWidth: "160px",
              }}
            >
              Load more
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default EventsList;
