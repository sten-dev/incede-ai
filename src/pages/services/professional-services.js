import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import ProfessionalServices from "../../components/services/ProfessionalServices";

const ProfessionalServicesMain = () => {
    return (
        <Layout pageTitle="Professional Services | Incede">
            <Transition>
                <section className="industry-solution">
                    <ServicesHeader />
                    <Container fluid className="p-0">
                        <ProfessionalServices/>
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
};

export default ProfessionalServicesMain;
