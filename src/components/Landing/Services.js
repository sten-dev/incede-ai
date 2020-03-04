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
          image: "img/watson-assistant.png",
          inactiveImage: "img/watson-assistant-inactive.png",
          title: "Watson Assistant Services",
          subTitle: "",
          mainContext:
            "Watson Assistant is IBM’s AI product that lets you build, train, and deploy conversational interactions into any application, device, or channel. Watson Assistant is revolutionizing the way businesses engage with people in customer service, IT service desk, employee self-service, sales support, commerce and other application areas.",
          sideContext:
            "Search for an answer from a knowledge base, know when to ask for clarity and when to direct users to a human.Extends investments by integrating with existing messaging channels, voice channels, service desk and other systems.Deployed in any cloud or on-premises environment."
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
            "Watson Discovery is IBM’s enterprise search and AI search technology that breaks open data silos and retrieves specific answers to your questions while analyzing trends and relationships buried in enterprise data.",
          sideContext:
            "Out-of-the-Box integration with conversational AI to find answers to your questions.Understands complex content in business documents such as images and tables.Utilizes both supervised and unsupervised relevancy training to improve salience."
        },
        path: "/services/watson-discovery-services"
      }
      // {
      //   data: {
      //     image: "img/watson-api.png",
      //     inactiveImage: "img/watson-api-inactive.png",
      //     title: "Watson API",
      //     subTitle: "",
      //     mainContext:
      //       "Watson Discovery is IBM’s enterprise search and AI search technology that breaks open data silos and retrieves specific answers to your questions while analyzing trends and relationships buried in enterprise data.",
      //     sideContext:
      //       "Out-of-the-Box integration with conversational AI to find answers to your questions.Understands complex content in business documents such as images and tables.Utilizes both supervised and unsupervised relevancy training to improve salience."
      //   },
      //   path: "/services/watson-api"
      // }
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
