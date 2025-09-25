import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import EnterpriseAIAgentsServices from "../../../components/services/EnterpriseAIAgentsServices";

const EnterpriseAIAgentsPage = () => {
  return (
    <Layout pageTitle="Enterprise AI Agents | Prebuilt & Custom Agents | Incede.ai"
    pageDescription="Deploy prebuilt or custom AI agents to automate enterprise workflows, enhance decision-making, and accelerate business transformation."
    >
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Enterprise AI Agents"} title={""} />
          <Container fluid className="p-0">
            <EnterpriseAIAgentsServices />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default EnterpriseAIAgentsPage;
