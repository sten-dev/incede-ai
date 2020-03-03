import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "../services/ServicesSmallCardsList";
import ServicesSmallCardBody from "../services/ServicesSmallCardBody";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  handleChange = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const { data } = this.props;
    const services = [
      {
        data: {
          image: "img/watson-professional-services.png",
          inactiveImage: "img/watson-professional-services-inactive.png",
          title: "Watson Professional Services",
          subTitle: ""
        },
        path: "/services/watson-assistant-services"
      },
      {
        data: {
          image: "img/watson-professional-services.png",
          inactiveImage: "img/watson-professional-services-inactive.png",
          title: "Watson Discovery Services",
          subTitle: ""
        },
        path: "/services/watson-discovery-services"
      },
      {
        data: {
          image: "img/watson-professional-services.png",
          inactiveImage: "img/watson-professional-services-inactive.png",
          title: "Watson API Services",
          subTitle: ""
        },
        path: "/"
      }
    ];
    return (
      <section className="services">
        <Container>
          <Row className="wwd-list">
            {services.map((x, i) => {
              // let service = x.node.frontmatter;
              // let path = x.node.fields.slug;
              let service = x.data;
              let path = x.path;
              return (
                <Col
                  className="wwd-list-card mb-0"
                  key={i}
                  xs={6}
                  sm={4}
                  lg={2}
                >
                  <ServicesSmallCardsList
                    service={service}
                    path={path}
                    index={i}
                    isActive={this.state.activeIndex === i ? true : false}
                    onItemClick={index => this.handleChange(index)}
                  />
                  {/* <ServiceView service={service} path={path} /> */}
                </Col>
              );
            })}
          </Row>
        </Container>
        <Container
          fluid
          style={{ background: "rgba(122, 121, 121, 0.06)" }}
          className="p-5"
        >
          <Row>
            <Col xs={12}>
              <ServicesSmallCardBody
                data={services[this.state.activeIndex].data}
                path={services[this.state.activeIndex].path}
              />
            </Col>
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
    render={data => <Services data={data} />}
  />
);
