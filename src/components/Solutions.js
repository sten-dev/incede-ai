import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import "../styles/solutions.scss";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import SolutionView from "./Solutions/SolutionView";
class Solutions extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;
    console.log(solutions);
    return (
      <section className="solutions gap-y">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 title text-primary">What we do</h1>
            </Col>
          </Row>
          <Row>
            {solutions.map((x, i) => {
              let solution = x.node.frontmatter;
              return (
                <Col key={i} lg={6} md={6} sm={12} xs={12}>
                  <SolutionView solution={solution} />
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
    render={(data, count) => <Solutions data={data} />}
  />
);
