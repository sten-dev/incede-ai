import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import IndustrySmallCardsList from "./industry/IndustrySmallCardsList";
import IndustrySmallCardBody from "./industry/IndustrySmallCardBody";
class Industries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }
  handleChange = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const { data } = this.props;
    // const { edges: industries } = data.allMarkdownRemark;
    // console.log("industries", industries);
    const industries = [
      {
        data: {
          image: "img/retail-consumer-packaged-goods.png",
          inactiveImage: "img/retail-consumer-packaged-goods-inactive.png",
          title: "Retail / Distribution",
          subTitle: "",
          mainContext:
            "Engaging with customers on a more personal level is one way big box, boutique, on-line retailers are growing or, in some cases, surviving. Those that find ways of making complex interactions (such as returns) easier for their customers will see better NPS scores and repeat customers. IBM Watson solutions enable conversational AI for in-store, kiosk and online customers, empowering sales associates with system integration to know more about their customers and their products and enabling customer self-service to find, purchase or return products more easily.",
          sideContext:
            "Help consumers find exactly what they’re looking for.Faster responses to social media inquiries.Increase Net Promoter Score (NPS)."
        },
        path: "/industries/retail-distribution"
      },
      {
        data: {
          image: "img/manufacturing.png",
          inactiveImage: "img/manufacturing-inactive.png",
          title: "Industrial / Manufacturing",
          subTitle: "",
          mainContext:
            "IBM Watson solutions are at work in several areas of manufacturing. Conversational AI enables engineering support to spend more time innovating and less time researching, visual recognition solutions ensure quality standards and engaging suppliers and buyers to effectively reduce risk and optimize the supply chain. These types of solutions are helping industrial and manufacturing organizations make incremental, high-value investments in Watson AI today while they planning their broader adoption of AI in their smart factory initiatives.",
          sideContext:
            "Boost safety and productivity for new employee onboarding – anytime and anywhere.Reduce engineer-time spent on research.Bridge knowledge transfer from the past wisdom and learnings."
        },
        path: "/industries/industrial-manufacturing"
      },
      {
        data: {
          image: "img/financial-performance-management.png",
          inactiveImage: "img/financial-performance-management-inactive.png",
          title: "Banking & Insurance",
          subTitle: "",
          mainContext:
            "Banking and insurance organizations are in a race to boldly innovate and automate their customer engagement strategies – and are embracing technology such as IBM Watson to execute those strategies. First-release customer service chat bots are getting replaced with personalized conversational AI that considers a customer’s account holdings, their emotion and that learns the customer’s preferences. To attract and retain valued customers, Banks are also deploying IBM Watson to create sophisticated wealth management advisory knowledge bases for their associates and customers. Anticipating post-recession regulatory changes, financial services organizations are looking to IBM Watson to verify compliance and identify where risk modeling is needed.",
          sideContext:
            "Cultivate one-to-one relationship with customers and employees.Understand customer sentiment and alter actions accordingly. Enables faster and more responsive customer services."
        },
        path: "/industries/banking-insurance"
      },
      {
        data: {
          image: "img/communications.png",
          inactiveImage: "img/communications-inactive.png",
          title: "Communications & Services",
          subTitle: "",
          mainContext:
            "Communications and services organizations are using thought leadership to gain more insights from data using AI as well as generating additional content using natural language understanding and natural language processing. IBM Watson is boosting their field team’s knowledge of products and their ability to troubleshoot problems. They are enhancing their service offerings with AI and leveraging conversation AI solutions that are integrated with their historical document stores as well as other team and customers interactions.",
          sideContext:
            "Increase the number of return customers.Answer questions instantly, reduce call center volumes.Increase productivity of Field Services with access to the organization’s knowledge base."
        },
        path: "/industries/communications-services"
      }
    ];
    return (
      <section className="industries">
        <Container>
          <Row className="wwd-list">
            {industries.map((x, i) => {
              let industry = x.data;
              let path = x.path;

              return (
                <Col
                  key={i}
                  className="wwd-list-card mb-0"
                  xs={6}
                  sm={4}
                  lg={2}
                >
                  <IndustrySmallCardsList
                    industry={industry}
                    path={path}
                    index={i}
                    isActive={this.state.activeIndex === i ? true : false}
                    onItemClick={index => this.handleChange(index)}
                  />
                  {/* <IndustryView
                    className="wwd-list-card"
                    industry={industry}
                    path={path}
                  /> */}
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
              <IndustrySmallCardBody
                data={industries[this.state.activeIndex].data}
                path={industries[this.state.activeIndex].path}
              />
            </Col>
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
