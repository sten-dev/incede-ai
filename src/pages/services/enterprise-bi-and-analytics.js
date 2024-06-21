import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import EnterpriseBIAndAnalytics from "../../components/services/EnterpriseBIAndAnalytics";

const EnterpriseBIAndAnalyticsMain = () => {
    return (
        <Layout pageTitle="Enterprise BI and Analytics | Incede">
            <Transition>
                <section className="industry-solution">
                    <ServicesHeader />
                    <Container fluid className="p-0">
                        <EnterpriseBIAndAnalytics />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
};

export default EnterpriseBIAndAnalyticsMain;
