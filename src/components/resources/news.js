import React from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import CaseStudyCard from "../../components/case-study/CaseStudyCard";
class ResourcesNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("news", this.props);
    const { edges: news } = this.props.data.allMarkdownRemark;

    return (
      <section className="resources-library-content gap-y-half" id="1">
        <Container>
          {/* <h1 className="text-left heading mb-5">Case Studies</h1> */}

          <div className="bg-grey">
            {news.length > 0 ? (
              <Row>
                {news.map((newsItem) => (
                  <Col xs="12" sm="6" md="6" lg="4" className="mt-16 ">
                    <CaseStudyCard
                      title={newsItem.node.frontmatter.title}
                      description={newsItem.node.frontmatter.description||""}
                      image={newsItem.node.frontmatter.image}
                      slug={newsItem.node.fields.slug}
                      type={true}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                <Col xs={12}>
                  <h2 className="text-center">No data found</h2>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
    );
  }
}

ResourcesNews.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query NewsListQueryResources {
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
    `}
    render={(data) => <ResourcesNews data={data} />}
  />
);
