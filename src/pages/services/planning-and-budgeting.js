import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import PlanningAndBudgeting from "../../components/services/PlanningAndBudgeting";

const PlanningAndBudgetingMain = () => {
  return (
    <Layout pageTitle="Planning and Budgeting | Incede">
      <Transition>
        <section className="industry-solution">
          <ServicesHeader />
          <Container fluid className="p-0">
            <PlanningAndBudgeting />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningAndBudgetingMain;
