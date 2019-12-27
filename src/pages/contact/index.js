import React from 'react'
import Layout from "../../components/Layout";
import ContactUs from '../../components/ContactUs';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Layout>
        <ContactUs />
      </Layout>
    )
  }
}