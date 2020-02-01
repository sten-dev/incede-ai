import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import SolutionView from "./Solutions/SolutionView";
class Solutions extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;
    // console.log(solutions);
    return (
      <section className="solutions gap-y">
        <Container>
          <Row className=" xs-wwd-list">
            {solutions.map((x, i) => {
              let solution = x.node.frontmatter;
              let path = x.node.fields.slug;
              return (
                <Col key={i} className="wwd-list-card" lg={6} md={6} sm={12} xs={11}>
                  <SolutionView solution={solution} path={path} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

Solutions.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query SolutionsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "solutions-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              html
              frontmatter {
                title
                templateKey
                subTitle
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
    render={data => <Solutions data={data} />}
  />
);
