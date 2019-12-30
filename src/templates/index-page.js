import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Home from "../components/Landing/Home";
import AboutUs from "../components/Landing/AboutUs";
import ContactUs from "../components/Landing/ContactUs";
import BotSection from "../components/Landing/BotSection";
import CaseStudies from "../components/CaseStudies";
import WhatWeDo from "../components/Landing/WhatWeDo";
import { Modal, ModalBody } from "reactstrap";
import "../styles/bot.scss";
import chat from "../img/chat.svg";
export const IndexPageTemplate = ({ home, about, location }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  console.log("typeof window ", typeof window, window)
  return (
    <div>
      {typeof window !== undefined && window.location.pathname.indexOf("/admin/") !== 0 && (
        <div onClick={toggle} className="bot-menu-btn left">
          <img src={chat} alt="chat" />
          <div>Let us converse</div>
        </div>
      )}

      <Home home={home} />
      <AboutUs about={about} />
      <WhatWeDo />
      <CaseStudies />
      <ContactUs location={location} />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="bot-side-menu"
        backdrop="static"
      >
        <ModalBody>
          <BotSection toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  home: PropTypes.object,
  about: PropTypes.object,
  location: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // console.log("data index", data);
  return (
    <Layout>
      <IndexPageTemplate
        home={frontmatter.home}
        about={frontmatter.about}
        location={frontmatter.location}
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
        home {
          title
          subTitle
          button
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 100) {
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
      }
    }
  }
`;
