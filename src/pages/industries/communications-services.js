import React from 'react';
import IndustryHeader from '../../components/industry-solutions/IndustryHeader';
import { Container } from 'reactstrap';
import Communication from '../../components/industry-solutions/Communication';
import Transition from '../../Transition';
import Layout from '../../components/Layout';
const CommunicationsServices = () => {
    return (
        <Layout pageTitle="Communications Services | Incede">
            <Transition>
                <section className="industry-solution">
                    <IndustryHeader />
                    <Container>
                        <Communication />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
}

export default CommunicationsServices;