import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import GenAIImplementationServices from "../../../components/services/GenAIImplementationServices";

const GenAIImplementationPage = () => {
  return (
    <Layout pageTitle="Private AI | Secure Generative AI | Incede.ai"
    pageDescription={`Deploy private AI models safely and securely with Incede.ai, ensuring data privacy and compliance.`}
    >
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Gen AI Implementation"} title={""} />
          <Container fluid className="p-0">
            <GenAIImplementationServices activeIndex={1}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default GenAIImplementationPage;
