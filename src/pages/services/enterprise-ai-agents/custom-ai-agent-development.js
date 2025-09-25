import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import EnterpriseAIAgentsServices from "../../../components/services/EnterpriseAIAgentsServices";

const EnterpriseAIAgentsPage = () => {
  return (
    <Layout pageTitle="Custom AI Agent Development | Incede.ai"
    pageDescription="Design and build custom AI agents tailored to your enterprise needs, powered by IBM watsonx."
    >
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Enterprise AI Agents"} title={""} />
          <Container fluid className="p-0">
            <EnterpriseAIAgentsServices activeIndex={1} />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default EnterpriseAIAgentsPage;
