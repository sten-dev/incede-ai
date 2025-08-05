import React from "react";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import PlanningBudgetingAnalyticsServices from "../../components/services/PlanningBudgetingAnalyticsServices";

const PlanningBudgetingAndAnalyticsPage = () => {
  return (
    <Layout pageTitle="Planning Budgeting and Analytics | Incede">
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Planning Budgeting and Analytics"} title={""} />
          <Container fluid className="p-0">
            <PlanningBudgetingAnalyticsServices />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningBudgetingAndAnalyticsPage;
