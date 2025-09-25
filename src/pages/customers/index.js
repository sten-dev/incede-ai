import React from "react";
import Layout from "../../components/Layout";
import Customers from "../../components/Customers";
import Transition from "../../Transition";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout 
        pageTitle="Our Customers | Incede.ai | Trusted IBM watsonx Partner"
        pageDescription="Meet the customers and enterprises who trust Incede.ai for IBM watsonx-powered generative AI, automation, and analytics solutions."
        keyWords=""
      >

        <Transition>
          <Customers />
        </Transition>
      </Layout>
    );
  }
}
