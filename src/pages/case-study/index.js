import React from "react";
import Layout from "../../components/Layout";
import CaseStudiesMain from "../../components/case-study/CaseStudiesMain";
import Transition from "../../Transition";

export default class CaseStudiesPage extends React.Component {
  render() {
    return (
      <Layout 
        pageTitle="Case Studies | Incede.ai | IBM watsonx Enterprise Solutions"
        pageDescription="Explore real-world case studies showcasing how Incede.ai delivers enterprise AI agents, GenAI, automation, and analytics using IBM watsonx."
      >
        <Transition>
          <CaseStudiesMain />
        </Transition>
      </Layout>
    );
  }
}
