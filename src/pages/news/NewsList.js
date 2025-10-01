import React from "react";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import "../../styles/resources.scss";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
class NewsList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props.data.allMarkdownRemark.edges);
    return (
      <section className="resources-library-content gap-y-half" id="1">
        <Container>
          {/* <h1 className="text-left heading mb-5">Case Studies</h1> */}
          
          <div className="bg-grey">
            {this.props.data.allMarkdownRemark.edges.length > 0 ? (
              <Row>
                {this.props.data.allMarkdownRemark.edges.map((caseStudy) => (
                  <Col xs="12" sm="6" md="6" lg="4" className="mt-16 ">
                    {/* <CaseStudyCard
                      title={caseStudy.node.frontmatter.title}
                      description={caseStudy.node.frontmatter.subTitle}
                      image={caseStudy.node.frontmatter.image}
                      slug={caseStudy.node.fields.slug}
                      type={true}
                    /> */}
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

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query NewsListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { eq: "news" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY HH:mm A")
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
    render={(data) => <NewsList data={data} />}
  />
);
