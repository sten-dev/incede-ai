import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import AnalyticsHeader from "../../../components/services/AnalyticsHeader";
import AdvancedVisualizations from "../../../components/services/professional-services/AdvancedVisualizations";

const AdvancedVisualizationsMain = () => {
  return (
    <Layout pageTitle="Advanced Visualizations | Professional Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
            <AdvancedVisualizations/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default AdvancedVisualizationsMain;
