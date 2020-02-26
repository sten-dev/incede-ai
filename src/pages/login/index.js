import React from 'react'
import Layout from "../../components/Layout";
import Login from '../../components/login/Login';

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <Layout pageTitle="Login | Incede" page="login">
                <Login />
            </Layout>
        )
    }
}