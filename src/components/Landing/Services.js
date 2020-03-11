import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import ServicesSmallCardsList from "../services/ServicesSmallCardsList";
import ServicesSmallCardBody from "../services/ServicesSmallCardBody";
import { Link, animateScroll as scroll } from "react-scroll";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, linkId: "services-id" };
  }
  handleChange = index => {
    this.setState({ activeIndex: index }, () => {
      setTimeout(() => {
        document.getElementById("custom-react-link-services").click();
        scroll.scrollMore(-120);
      });
    });
  };
  render() {
    const { data } = this.props;
    const services = [
      {
        data: {
          image: "img/watson-assistant.png",
          inactiveImage: "img/watson-assistant-inactive.png",
          title: "Watson Assistant Services",
          subTitle: "",
          mainContext:
            "Incede has deep experience in helping organizations utilize conversational AI for a competitive advantage in their product and services strategies.",
          sideContext:
            "A phased approach to develop, train and deploy Watson Assistant quickly and efficiently.Integration expertise to extend dialogs with structured and unstructured content.User interface best practices for channel interactions  ."
        },
        path: "/services/watson-assistant-services"
      },
      {
        data: {
          image: "img/watson-discovery.png",
          inactiveImage: "img/watson-discovery-inactive.png",
          title: "Watson Discovery Services",
          subTitle: "",
          mainContext:
            "Incede implements enterprise search and AI for organizations to surface relevant insights from stores of data and documents from internal, external and public sources.",
          sideContext:
            "Training best practices for document and image enrichment to improve relevancy.Knowhow to implement Watson Discovery in new and existing applications.Advanced integration experience to incorporate other Watson API Services."
        },
        path: "/services/watson-discovery-services"
      },
      {
        data: {
          image: "img/watson-api.png",
          inactiveImage: "img/watson-api-inactive.png",
          title: "Watson API",
          subTitle: "",
          mainContext:
            "Incede utilizes Watson API Services to extend application capabilities and provide multifaceted insights on users, data and interactions.",
          sideContext:
            "Experience to know when, why and how to surface user personality traits, emotion and tone.Best practices for integrating text to speech and speech to text in applications, interactions and data.Optimized deep learning models to utilize Industry- and Organizational-specific vocabularies, phrases and terms."
        },
        path: "/services/watson-api"
      }
    ];
    return (
      <section className="services">
        <Link
          id="custom-react-link-services"
          to={this.state.linkId}
          className="d-none"
        />
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
          className="gap-y"
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
