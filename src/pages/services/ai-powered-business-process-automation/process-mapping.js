import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import AIPoweredBPAServices from "../../../components/services/AIPoweredBPAServices";

const AIPoweredBusinessProcessAutomationPage = () => {
  return (
    <Layout pageTitle="Process Mapping | AI-Powered BPA | Incede.ai"
    pageDescription={`Map and optimize enterprise processes with AI-powered automation.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"AI-Powered Business Process Automation"} title={""} />
          <Container fluid className="p-0">
            <AIPoweredBPAServices activeIndex={0}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default AIPoweredBusinessProcessAutomationPage;
