import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import GenAIImplementationServices from "../../../components/services/GenAIImplementationServices";

const GenAIImplementationPage = () => {
  return (
    <Layout pageTitle="AI Roadmapping | GenAI Strategy | Incede.ai"
    pageDescription={`Plan your enterprise AI journey with Incede.ai’s AI roadmapping services, powered by IBM watsonx.`}
    >
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Gen AI Implementation"} title={""} />
          <Container fluid className="p-0">
            <GenAIImplementationServices activeIndex={0}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default GenAIImplementationPage;
