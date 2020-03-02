import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import SolutionView from "./Solutions/SolutionView";
class Solutions extends React.Component {
  render() {
    const { data } = this.props;
    // const { edges: solutions } = data.allMarkdownRemark;
    // console.log(solutions);
    const solutions = [
      {
        data: {
          image: "img/Customer Service.png",
          title: "Customer Service",
          subTitle: "Conversational AI Creates an Engaging Customer Experience"
        },
        path: "/solutions/customer-service"
      },

      {
        data: {
          image: "img/Human Resources Service.png",
          title: "Human Resource Services",
          subTitle: "Conversational AI Puts the Focus on the People-part of HR"
        },
        path: "/solutions/human-resource-services"
      },
      {
        data: {
          image: "img/IT Service Desk.png",
          title: "IT Service Desk",
          subTitle:
            "Level-2 Quality Enabled through Natural Language Understanding"
        },
        path: "/solutions/it-service-desk"
      },
      {
        data: {
          image: "img/Sales Support Solutions.png",
          title: "Sales Support Solutions",
          subTitle: "Enabling Sales to Sell and Engineering to Engineer"
        },
        path: "/solutions/sales-support-solutions"
      }
    ];
    return (
      <section className="solutions gap-y">
        <Container>
          <Row className=" xs-wwd-list">
            {solutions.map((x, i) => {
              // let solution = x.node.frontmatter;
              // let path = x.node.fields.slug;
              let solution = x.data;
              let path = x.path;
              return (
                <Col
                  key={i}
                  className="wwd-list-card"
                  lg={6}
                  md={6}
                  sm={12}
                  xs={11}
                >
                  <SolutionView solution={solution} path={path} />
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
              html
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
    render={data => <Solutions data={data} />}
  />
);
