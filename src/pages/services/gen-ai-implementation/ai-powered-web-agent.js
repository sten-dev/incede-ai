import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import GenAIImplementationServices from "../../../components/services/GenAIImplementationServices";

const GenAIImplementationPage = () => {
  return (
    <Layout pageTitle="AI-Powered Web Agent | Incede.ai"
    pageDescription={`Create AI-powered web agents to enhance customer engagement and automate support.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Gen AI Implementation"} title={""} />
          <Container fluid className="p-0">
            <GenAIImplementationServices activeIndex={2}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default GenAIImplementationPage;
