import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby';
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import arrow from "../../img/arrow.svg"
import "../../styles/what-to-do-list.scss";
class ServicesMain extends React.Component {
  render() {
    const { data } = this.props
    const { edges: services } = data.allMarkdownRemark
    console.log("services list", services)
    return (
      <section className="wtd-list ">
        <section className="header-section gap-y text-center">
          <Container>
            <Row>
              <Col>
                <h1>Services</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          {services.map((x, i) => {
            let service = x.node.frontmatter;
            return (
              <Row className="wtd-card" key={i}>
                <Col>
                  <Card>
                    <CardBody className="p-0">
                      <Row>
                        <Col lg={2} md={2} sm={4} xs={12} className="image-section">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: service.image,
                              alt: `thumbnail`,
                              style: { width: "100%" }
                            }}
                          />
                        </Col>
                        <Col lg={10} md={10} sm={8} xs={12} className="card-container">
                          <h5 className="mt-0">{service.title}</h5>
                          <h6 className="mt-0">{service.subTitle}</h6>
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

ServicesMain.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesMainQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "services" } } }
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
    render={(data) => <ServicesMain data={data} />}
  />
)
