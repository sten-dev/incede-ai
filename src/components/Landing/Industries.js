import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import IndustryView from "./industry/IndustryView";
class Industries extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: industries } = data.allMarkdownRemark;
    // console.log("industries", industries);
    return (
      <section className="industries gap-y">
        <Container>
          <Row className=" xs-wwd-list">
            {industries.map((x, i) => {
              let industry = x.node.frontmatter;
              let path = x.node.fields.slug;
              return (
                <Col key={i} lg={6} md={6} sm={12} xs={11}>
                  <IndustryView industry={industry} path={path} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

Industries.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query IndustriesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "industries" } } }
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
    render={data => <Industries data={data} />}
  />
);
