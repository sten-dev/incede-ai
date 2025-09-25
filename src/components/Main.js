import React, { Component } from "react";
import Home from "./Landing/Home";
import WhatWeDo from "./Landing/WhatWeDo";
import MoreDetail from "./Landing/MoreDetail";
import CaseStudiesCarousalComponent from "./Landing/CaseStudiesCarousal";
import MetaData from "./MetaData";
class Main extends Component {
  render() {
    const { home } = this.props;
    return (
      <React.Fragment>
        <MetaData 
          pageTitle="Incede.ai | IBM partner for watsonx, Enterprise AI Agents & GenAI Implementation" 
          pageDescription="Incede.ai is an IBM partner for watsonx, delivering enterprise AI agents, GenAI implementation, business process automation, and AI-powered planning & analytics."
          keyWords="IBM partner for watsonx, enterprise AI agents, generative AI, GenAI implementation, AI-powered business automation, planning budgeting analytics"
        />
        <Home home={home} />
        {/* <AboutUs about={about} /> */}
        {/* <MoreDetail forHomePage={true}/> */}
        {/* <WhatWeDo /> */}
        {/* <CaseStudies /> */}
        {/* <ContactUs location={location} /> */}
        {/* <CaseStudiesCarousalComponent/> */}
      </React.Fragment>
    );
  }
}

export default Main;
