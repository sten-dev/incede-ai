import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import SolutionsHeader from "../../components/Solutions/SolutionsHeader";
import SolutionsPreviousNextHeader from "../../components/Solutions/SolutionsPreviousNextHeader";
import HumanResource from "../../components/Solutions/HumanResource";

const HumanResourceService = () => {
  return (
    <Layout pageTitle="AI for Employee Care | Incede">
      <Transition>
        <section className="industry-solution">
          <SolutionsHeader
            header={"AI for Employee Care"}
            title={"Conversational AI Puts the Focus on the People-part of HR"}
          />
          <Container>
            {/* <SolutionsPreviousNextHeader
              previousLink="/solutions/ai-for-customer-care"
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

export default HumanResourceService;
