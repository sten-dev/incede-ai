import React from 'react'
import Layout from "../../components/Layout";
import Customers from '../../components/Customers';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <Layout>
        <Customers />
      </Layout>
    )
  }
}