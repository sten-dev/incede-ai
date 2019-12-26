import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import About from "../components/about/About";
import Career from "../components/about/Career";

const careerSummary = `We are here for people who want to get out and do great work for customers, who enjoy being measured on results, who expect to share in the success they create. The spirit is entrepreneurial; the culture is co-operative; and the result is growth.
<br /><br />
If you’re interested in a combination of professional challenges and personal development, join Locus Solutions. Contact us at careers@locussolution.com. We offer competitive salaries and benefits, sponsored training and education.`;

export const AboutPageTemplate = ({ title, section }) => {
  return (
    <section className="section section--gradient">
      <About title={title} section={section[0]} />
      <Career careerSummary={careerSummary} />
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: about } = data;
  console.log("preview about", about.frontmatter);

  return (
    <Layout>
      <AboutPageTemplate
        title={about.frontmatter.title}
        section={about.frontmatter.section}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  // title: PropTypes.string,
  // section: PropTypes.array,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        section {
          title
          description
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
`;
