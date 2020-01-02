import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby';
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import PreviewCompatibleImage from '../../PreviewCompatibleImage';
import arrow from "../../../img/arrow.svg"
import "../../../styles/what-to-do-list.scss";

class IndustriesMain extends React.Component {
  render() {
    const { data } = this.props
    const { edges: industries } = data.allMarkdownRemark
    console.log("industries list", industries)
    return (
      <section className="wtd-list ">
        <section className="header-section gap-y text-center">
          <Container>
            <Row>
              <Col>
                <h1>Industries</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          {industries.map((x, i) => {
            let industry = x.node.frontmatter;
            return (
              <Row className="wtd-card" key={i}>
                <Col>
                  <Card>
                    <CardBody className="p-0">
                      <Row>
                        <Col lg={2} md={2} sm={4} xs={12} className="image-section">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: industry.image,
                              alt: `thumbnail`,
                              style: { width: "100%" }
                            }}
                          />
                        </Col>
                        <Col lg={10} md={10} sm={8} xs={12} className="card-container">
                          <h5 className="mt-0">{industry.title}</h5>
                          <h6 className="mt-0">{industry.subTitle}</h6>
                          <CardText>
                            {x.node.excerpt}
                          </CardText>
                          <br />
                          <div>
                            <Link to={x.node.fields.slug} className="btn btn-secondary btn-sm">
                              Read More
                              {"  "}
                              <img src={arrow} alt="next" style={{ width: "12px", height: "12px", marginTop: -2 }} />
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    )
  }
}

IndustriesMain.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query IndustriesMainQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "industries" } } }
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
    render={(data) => <IndustriesMain data={data} />}
  />
)
