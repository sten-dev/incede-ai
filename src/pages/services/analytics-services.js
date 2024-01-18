import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import AnalyticsServices from "../../components/services/AnalyticsServices";

const AnalyticsServicesMain = () => {
    return (
        <Layout pageTitle="Analytics Services | Incede">
            <Transition>
                <section className="industry-solution">
                    <ServicesHeader />
                    <Container fluid className="p-0">
                        <AnalyticsServices />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
};

export default AnalyticsServicesMain;
