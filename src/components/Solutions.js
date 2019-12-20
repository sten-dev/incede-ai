import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import "../styles/solutions.scss";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
class Solutions extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutions } = data.allMarkdownRemark;
    console.log(solutions);
    return (
      <section class="solutions gap-y">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 text-primary">What we do</h1>
            </Col>
          </Row>
          <Row>
            {solutions.map((x, i) => {
              let solution = x.node.frontmatter;
              return (
                <Col key={i} lg={6} md={6} sm={12} xs={12}>
                  <Card className="card-section">
                    <div className="image-section">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: solution.image,
                          alt: `featured image thumbnail`,
                          style: { width: "120px" }
                        }}
                      />
                    </div>
                    <CardBody className="text-center">
                      <h4>{solution.title}</h4>
                      <h6 className="subTitle">{solution.subTitle}</h6>
                    </CardBody>
                  </Card>
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
                    fluid(maxWidth: 120, quality: 100) {
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
