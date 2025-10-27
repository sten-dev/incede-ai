import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import ResourceHeader from "../../components/resources/ResourceHeader";
import ResourcesNews from "../../components/resources/news";
import Transition from "../../Transition";

const NewsPage = () => {
  return (
    <Layout pageTitle="News | Incede">
      <Transition>
        <section className="industry-solution">
          <ResourceHeader />
          <Container>
            <ResourcesNews />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default NewsPage;
