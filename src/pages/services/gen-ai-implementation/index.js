import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import GenAIImplementationServices from "../../../components/services/GenAIImplementationServices";

const GenAIImplementationPage = () => {
  return (
    <Layout pageTitle="Gen AI Implementation | IBM watsonx Deployment | Incede.ai"
    pageDescription="From AI roadmapping to private AI and foundation model training, Incede.ai helps enterprises implement generative AI using IBM watsonx."
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
