import React from "react";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import EnterpriseAIAgentsServices from "../../components/services/EnterpriseAIAgentsServices";

const EnterpriseAIAgentsPage = () => {
  return (
    <Layout pageTitle="Enterprise AI Agents | Incede">
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
