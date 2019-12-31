import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery, Link } from "gatsby";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
class ServicesMenu extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: servicesList } = data.allMarkdownRemark;
    console.log("services list", servicesList);
    return (
      <section className="menu">
        <ListGroup>
          {servicesList.map((s, i) => {
            let service = s.node;

            return (
              <h5 key={i} className="mt-2">
                <Link to={service.fields.slug}>
                  {service.frontmatter.title}
                </Link>
              </h5>
            );
          })}
        </ListGroup>
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