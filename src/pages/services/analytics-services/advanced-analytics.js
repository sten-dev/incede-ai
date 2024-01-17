import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import AnalyticsHeader from "../../../components/services/AnalyticsHeader";
import AdvancedAnalytics from "../../../components/services/analytics-services/AdvancedAnalytics";

const AdvancedAnalyticsMain = () => {
  return (
    <Layout pageTitle="Advanced Analytics | Analytics Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
            <AdvancedAnalytics/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default AdvancedAnalyticsMain;
