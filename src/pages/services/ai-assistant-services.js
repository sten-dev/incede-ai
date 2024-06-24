import React from "react";
import { Container } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import ServicesHeader from "../../components/services/ServicesHeader";
import AIAssistantServices from "../../components/services/AIAssistantServices";

const AIAssistantServicesMain = () => {
    return (
        <Layout pageTitle="AI Assistant Services  | Incede">
            <Transition>
                <section className="industry-solution">
                    <ServicesHeader />
                    <Container fluid className="p-0">
                        <AIAssistantServices />
                    </Container>
                </section>
            </Transition>
        </Layout>
    );
};

export default AIAssistantServicesMain;
