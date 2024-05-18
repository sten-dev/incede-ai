import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import WatsonxOrchestrate from "../../components/services/WatsonxOrchestrate";

const WatsonxOrchestratePage = () => {
  return (
    <Layout pageTitle="watsonx Orchestrate | Incede">
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"watsonx Orchestrate"} title={""} />
          <Container fluid className="p-0">
            <WatsonxOrchestrate/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default WatsonxOrchestratePage;
