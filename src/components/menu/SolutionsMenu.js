import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Container } from "reactstrap";
class SolutionsMenu extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: solutionsList } = data.allMarkdownRemark;
    console.log(solutionsList);
    return (
      <section className="solutions gap-y">
        <Container>

        </Container>
      </section>
    );
  }
}

SolutionsMenu.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query SolutionsMenuQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "solutions-post" } } }
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
    render={data => <SolutionsMenu data={data} />}
  />
);
