import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Home from "../components/Landing/Home";
import AboutUs from "../components/Landing/AboutUs";
import ContactUs from "../components/Landing/ContactUs";
import BotSection from "../components/Landing/BotSection";
import Solutions from "../components/Solutions";
import CaseStudies from "../components/CaseStudies";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  home,
  about,
  location,
  description,
  intro
}) => (
    <div>
      <BotSection />
      <Home home={home} />
      <AboutUs about={about} />
      {/* <Solutions /> */}
      <CaseStudies />
      <ContactUs location={location} />
    </div>
  );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  home: PropTypes.object,
  about: PropTypes.object,
  location: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log("data index", data);
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        home={frontmatter.home}
        about={frontmatter.about}
        location={frontmatter.location}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        home {
          title
          subTitle
          button
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        about {
          title
          subTitle
          button
        }
        location {
          title
          subTitle
          phone
          email
          address
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
