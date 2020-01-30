import React from 'react'
import Layout from "../../components/Layout";
import Dashboard from '../../components/dashboard/Dashboard';

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <Layout page="dashboard">
                <Dashboard />
            </Layout>
        )
    }
}