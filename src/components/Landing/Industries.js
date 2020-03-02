import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import IndustryView from "./industry/IndustryView";
class Industries extends React.Component {
  render() {
    const { data } = this.props;
    // const { edges: industries } = data.allMarkdownRemark;
    // console.log("industries", industries);
    const industries = [
      {
        data: {
          image: "img/sales-performance-management.png",
          title: "Retail / Distribution",
          subTitle: ""
        },
        path: "/industries/retail-distribution"
      },
      {
        data: {
          image: "img/sales-performance-management.png",
          title: "Industrial / Manufacturing",
          subTitle: ""
        },
        path: "/industries/industrial-manufacturing"
      },
      {
        data: {
          image: "img/financial-performance-management.png",
          title: "Banking & Insurance",
          subTitle: ""
        },
        path: "/industries/banking-insurance"
      },
      {
        data: {
          image: "img/Customer Service.png",
          title: "Communications & Services",
          subTitle: ""
        },
        path: "/industries/communications-services"
      }
    ];
    return (
      <section className="industries gap-y">
        <Container>
          <Row className=" xs-wwd-list">
            {industries.map((x, i) => {
              // let industry = x.node.frontmatter;
              // let path = x.node.fields.slug;
              let industry = x.data;
              let path = x.path;

              return (
                <Col key={i} lg={6} md={6} sm={12} xs={11}>
                  <IndustryView
                    className="wwd-list-card"
                    industry={industry}
                    path={path}
                  />
                </Col>
              );
            })}
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
