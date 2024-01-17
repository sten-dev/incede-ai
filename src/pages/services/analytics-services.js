import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import AnalyticsHeader from "../../components/services/AnalyticsHeader";

const AnalyticsServicesMain = () => {
  return (
    <Layout pageTitle="Analytics Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default AnalyticsServicesMain;
