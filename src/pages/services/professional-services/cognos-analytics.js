import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import AnalyticsHeader from "../../../components/services/AnalyticsHeader";
import CognosAnalytics from "../../../components/services/professional-services/CognosAnalytics";

const CognosAnalyticsMain = () => {
  return (
    <Layout pageTitle="Cognos Analytics | Professional Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
            <CognosAnalytics/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default CognosAnalyticsMain;
