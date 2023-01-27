import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import SolutionsHeader from "../../components/Solutions/SolutionsHeader";
// import SolutionsPreviousNextHeader from "../../components/Solutions/SolutionsPreviousNextHeader";
import HumanResource from "../../components/Solutions/HumanResource";

const EmployeeAIService = () => {
  return (
    <Layout pageTitle="Employee AI Self-Service | Incede">
      <Transition>
        <section className="industry-solution">
          <SolutionsHeader
            header={"Employee AI Self-Service"}
            title={"Conversational AI Puts the Focus on the People-part of HR"}
          />
          <Container>
            {/* <SolutionsPreviousNextHeader
              previousLink="/solutions/customer-service"
              previousName="Customer Service"
              nextName="IT Service Desk"
              nextLink="/solutions/it-service-desk"
            ></SolutionsPreviousNextHeader> */}
            <HumanResource />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default EmployeeAIService;
