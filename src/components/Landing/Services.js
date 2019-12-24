import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../styles/solutions.scss";
import { Container, Row, Col } from "reactstrap";
import ServiceView from "../services/ServiceView";
class Services extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: services } = data.allMarkdownRemark;
    console.log("services", services);
    return (
      <section className="services gap-y">
        <Container>
          <Row>
            {services.map((x, i) => {
              let service = x.node.frontmatter;
              return (
                <Col key={i} lg={6} md={6} sm={12} xs={12}>
                  <ServiceView service={service} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

Services.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "services" } } }
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
    render={(data) => <Services data={data} />}
  />
);
