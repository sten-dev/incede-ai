import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import ResourceHeader from "../../components/resources/ResourceHeader";
import ResourcesBlogs from "../../components/resources/blogs";
import Transition from "../../Transition";

const BlogsPage = () => {
  return (
    <Layout pageTitle="Blogs | Incede">
      <Transition>
        <section className="industry-solution">
          <ResourceHeader />
          <Container>
            <ResourcesBlogs />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default BlogsPage;
