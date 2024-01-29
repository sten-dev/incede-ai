import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import AnalyticsHeader from "../../../components/services/AnalyticsHeader";
import PlanningAnalytics from "../../../components/services/professional-services/PlanningAnalytics";

const PlanningAnalyticsMain = () => {
  return (
    <Layout pageTitle="Planning Analytics | Professional Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
            <PlanningAnalytics/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningAnalyticsMain;
