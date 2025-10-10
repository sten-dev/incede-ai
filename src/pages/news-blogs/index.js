import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import NewsAndBlog from "../../components/newsAndBlogs/NewsAndBlogs";


const NewsAndBlogs = () => {
  return (
    <Layout pageTitle="News&Blogs| Incede">
      <Transition>
            <NewsAndBlog/>
      </Transition>
    </Layout>
  );
};

export default NewsAndBlogs;
