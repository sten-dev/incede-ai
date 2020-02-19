import React from 'react'
import Layout from '../../components/Layout';
import CaseStudiesMain from '../../components/case-study/CaseStudiesMain';

export default class CaseStudiesPage extends React.Component {
    render() {
        return (
            <Layout pageTitle="Case Studies | Incede">
                <CaseStudiesMain />
            </Layout>
        )
    }
}
