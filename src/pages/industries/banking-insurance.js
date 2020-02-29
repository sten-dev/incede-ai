import React from 'react';
import IndustryHeader from '../../components/industry-solutions/IndustryHeader';
import { Container } from 'reactstrap';
import Banking from '../../components/industry-solutions/Banking';
import Layout from '../../components/Layout';
import Transition from '../../Transition';
const BankingInsurance = () => {
    return (
        <Layout pageTitle="Banking Insurance | Incede">
            <Transition>
                <section className="industry-solution">
                    <IndustryHeader />
                    <Container>
                        <Banking />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
}

export default BankingInsurance;