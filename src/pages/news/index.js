import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import NewsList from "./NewsList";

const News = () => {
  return (
    <Layout pageTitle="News | Incede">
      <Transition>
        <section className="industry-solution">
          <Container>
            <NewsList />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default News;
