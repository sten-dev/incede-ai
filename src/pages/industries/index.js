import React from 'react'
import Layout from '../../components/Layout';
import IndustriesMain from '../../components/Landing/industry/IndustriesMain';

export default class IndustriesPage extends React.Component {
    render() {
        return (
            <Layout pageTitle="Industries | Incede">

                <IndustriesMain />
            </Layout>
        )
    }
}
