import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Container } from "reactstrap";
class IndustriesMenu extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: industriesList } = data.allMarkdownRemark;
        console.log("industries list", industriesList);
        return (
            <section className="solutions gap-y">
                <Container>

                </Container>
            </section>
        );
    }
}

IndustriesMenu.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array
        })
    })
};

export default () => (
    <StaticQuery
        query={graphql`
      query IndustriesMenuQuery {
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
              }
            }
          }
        }
      }
    `}
        render={data => <IndustriesMenu data={data} />}
    />
);
