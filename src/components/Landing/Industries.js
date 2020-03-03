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
          subTitle: ""
        },
        path: "/industries/retail-distribution"
      },
      {
        data: {
          image: "img/manufacturing.png",
          inactiveImage: "img/manufacturing-inactive.png",
          title: "Industrial / Manufacturing",
          subTitle: ""
        },
        path: "/industries/industrial-manufacturing"
      },
      {
        data: {
          image: "img/financial-performance-management.png",
          inactiveImage: "img/financial-performance-management-inactive.png",
          title: "Banking & Insurance",
          subTitle: ""
        },
        path: "/industries/banking-insurance"
      },
      {
        data: {
          image: "img/communications.png",
          inactiveImage: "img/communications-inactive.png",
          title: "Communications & Services",
          subTitle: ""
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
          className="p-5"
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
