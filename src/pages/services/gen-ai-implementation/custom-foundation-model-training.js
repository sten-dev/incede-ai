import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import GenAIImplementationServices from "../../../components/services/GenAIImplementationServices";

const GenAIImplementationPage = () => {
  return (
    <Layout pageTitle="Custom Foundation Model Training | Incede.ai"
    pageDescription={`Train custom foundation models for your enterprise domain with Incede.ai and IBM watsonx.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Gen AI Implementation"} title={""} />
          <Container fluid className="p-0">
            <GenAIImplementationServices activeIndex={3}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default GenAIImplementationPage;
