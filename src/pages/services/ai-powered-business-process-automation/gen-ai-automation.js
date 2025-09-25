import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import AIPoweredBPAServices from "../../../components/services/AIPoweredBPAServices";

const AIPoweredBusinessProcessAutomationPage = () => {
  return (
    <Layout pageTitle="Gen AI + Automation | Incede.ai"
    pageDescription={`Integrate generative AI with enterprise automation for scalable, intelligent workflows.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"AI-Powered Business Process Automation"} title={""} />
          <Container fluid className="p-0">
            <AIPoweredBPAServices activeIndex={1}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default AIPoweredBusinessProcessAutomationPage;
