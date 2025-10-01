import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import BlogsList from "./BlogsList";

const Blogs = () => {
  return (
    <Layout pageTitle="Blogs | Incede">
      <Transition>
        <section className="industry-solution">
          <Container>
            <BlogsList />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default Blogs;
