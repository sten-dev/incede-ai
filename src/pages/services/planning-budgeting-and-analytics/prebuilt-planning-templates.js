import React from "react";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import ServicesHeader from "../../../components/services/ServicesHeader";
import { Container } from "reactstrap";
import PlanningBudgetingAnalyticsServices from "../../../components/services/PlanningBudgetingAnalyticsServices";

const PlanningBudgetingAndAnalyticsPage = () => {
  return (
    <Layout pageTitle="Prebuilt Planning Templates | Incede.ai"
    pageDescription={`Accelerate enterprise planning with prebuilt, customizable templates powered by AI.`}>
      <Transition>
        <section className="industry-solution">
          <ServicesHeader header={"Planning, Budgeting and Analytics"} title={""} />
          <Container fluid className="p-0">
            <PlanningBudgetingAnalyticsServices activeIndex={0}/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningBudgetingAndAnalyticsPage;
