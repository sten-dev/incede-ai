import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import ResourceHeader from "../../components/resources/ResourceHeader";
import Transition from "../../Transition";
import FeatureDemos from "../../components/resources/FeaturedDemos";

const FeaturedDemos = () => {
  return (
    <Layout pageTitle="Featured Demos | Incede">
      <Transition>
        <section className="industry-solution">
          <ResourceHeader />
          <Container>
            <FeatureDemos />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default FeaturedDemos;
