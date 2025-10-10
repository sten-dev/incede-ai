import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "reactstrap";
import { Link, StaticQuery, graphql } from "gatsby";
import "../../styles/news-slider.scss";

class NewsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],   // not null
      chunkSize: 3
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const featuredNews = data?.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.feature === "true"
    );
    this.setState({ newsList: featuredNews });
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth <= 576) {
      this.setState({ chunkSize: 1 });
    } else if (window.innerWidth <= 768) {
      this.setState({ chunkSize: 2 });
    } else {
      this.setState({ chunkSize: 3 });
    }
  };

 render() {
  const { newsList, chunkSize } = this.state;

  if (!newsList || newsList.length === 0) return null; 

  // Split into chunks
  const chunkedNews = [];
  for (let i = 0; i < newsList.length; i += chunkSize) {
    chunkedNews.push(newsList.slice(i, i + chunkSize));
  }
  
 return (
  <section className="news-slider mt-4">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      showArrows={false}
      showIndicators={false}
    >
      {chunkedNews.map((chunk, idx) => (
        <div key={idx}>
          <Row className="justify-content-center">
            {chunk.map(({ node }) => (
              <Col md={12 / chunkSize} key={node.id} className="mb-3">
                <div
                  className="card shadow-sm h-100"
                  style={{
                    border: "1px solid lightgrey",
                    transition: "all 0.3s ease",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "purple";
                    e.currentTarget.style.boxShadow =
                      "0 6px 12px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "lightgrey";
                    e.currentTarget.style.boxShadow =
                      "0 2px 6px rgba(0,0,0,0.05)";
                  }}
                >
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="card-body">
                      {/* Row for date + title */}
                      <div className="d-flex align-items-center mb-2 flex-wrap">
                        <div
                          className="text-muted small"
                          style={{ marginRight: "10px", whiteSpace: "nowrap" }}
                        >
                          {node.frontmatter.date}
                        </div>
                        <h6
                          className="font-weight-bold mb-0"
                          style={{
                            fontSize: "1.1rem",
                            flex: 1,
                            minWidth: 0,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={node.frontmatter.title}
                        >
                          {node.frontmatter.title}
                        </h6>
                      </div>

                      {/* Description */}
                      <p
                        className="mb-0 text-secondary"
                        style={{
                          fontSize: "0.95rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3, // show only 3 lines
                          WebkitBoxOrient: "vertical",
                          lineHeight: "1.4rem",
                          height: "4.2rem", // ensures consistent height
                        }}
                        title={node.frontmatter.description}
                      >
                        {node.frontmatter.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Carousel>
  </section>
);


}
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query NewsSliderQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "news" } } }
          sort: { fields: [frontmatter___date], order: DESC }
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
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <NewsSlider data={data} {...props} />}
  />
);
