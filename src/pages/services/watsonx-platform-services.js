import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import WatsonxPlatform from "../../components/services/WatsonxPlatform";

const WatsonxPlatformServices = () => {
  return (
    <Layout pageTitle="watsonx Platform Services | Incede">
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"watsonx Platform Services"} title={""} />
          <Container fluid className="p-0">
            <WatsonxPlatform/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default WatsonxPlatformServices;
