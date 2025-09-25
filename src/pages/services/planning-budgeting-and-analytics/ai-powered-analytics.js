import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import PlanningBudgetingAnalyticsServices from "../../../components/services/PlanningBudgetingAnalyticsServices";

const PlanningBudgetingAndAnalyticsPage = () => {
  return (
    <Layout pageTitle="AI-Powered Analytics | Incede.ai"
    pageDescription={`Unlock insights with AI-powered analytics and IBM watsonx-driven intelligence.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Planning, Budgeting and Analytics"} title={""} />
          <Container fluid className="p-0">
            <PlanningBudgetingAnalyticsServices activeIndex={2}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningBudgetingAndAnalyticsPage;
