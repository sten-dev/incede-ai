import React from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import CaseStudyCard from "../../components/case-study/CaseStudyCard";
class ResourcesBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("blogs", this.props);
    const { edges: blogs } = this.props.data.allMarkdownRemark;

    return (
      <section className="resources-library-content gap-y-half" id="1">
        <Container>
          {/* <h1 className="text-left heading mb-5">Case Studies</h1> */}

          <div className="bg-grey">
            {blogs.length > 0 ? (
              <Row>
                {blogs.map((blogItem) => (
                  <Col xs="12" sm="6" md="6" lg="4" className="mt-16 ">
                    <CaseStudyCard
                      title={blogItem.node.frontmatter.title}
                      description={blogItem.node.frontmatter.description||""}
                      image={blogItem.node.frontmatter.image}
                      slug={blogItem.node.fields.slug}
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

ResourcesBlogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogsListQueryResources {
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
    `}
    render={(data) => <ResourcesBlogs data={data} />}
  />
);
