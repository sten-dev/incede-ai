import React from 'react';
import IndustryHeader from '../../components/industry-solutions/IndustryHeader';
import IndustryManufacturing from '../../components/industry-solutions/IndustryManufacturing';
import { Container } from 'reactstrap';
import Transition from '../../Transition';
import Layout from '../../components/Layout';
const IndustrialManufacturing = () => {
    return (
        <Layout pageTitle="Industrial Manufacturing | Incede">
            <Transition>
                <section className="industry-solution">
                    <IndustryHeader />
                    <Container>
                        <IndustryManufacturing />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
}

export default IndustrialManufacturing;