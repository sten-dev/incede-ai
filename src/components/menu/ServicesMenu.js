import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Container } from "reactstrap";
class ServicesMenu extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: servicesList } = data.allMarkdownRemark;
        console.log("services list", servicesList);
        return (
            <section className="solutions gap-y">
                <Container>

                </Container>
            </section>
        );
    }
}

ServicesMenu.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
      query ServicesMenuQuery {
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
              }
            }
          }
        }
      }
    `}
        render={data => <ServicesMenu data={data} />}
    />
);
