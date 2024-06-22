import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import GenAIServices from "../../components/services/GenAIServices";

const GenAIServicesMain = () => {
    return (
        <Layout pageTitle="Generative AI Services | Incede">
            <Transition>
                <section className="industry-solution">
                    <ServicesHeader />
                    <Container fluid className="p-0">
                        <GenAIServices />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
};

export default GenAIServicesMain;
