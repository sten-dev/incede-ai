

import React from "react";
import Container from "reactstrap/lib/Container";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import EventsList from "./EventsList";

const Events = () => {
  return (
    <Layout pageTitle="Events | Incede">
      <Transition>
        <section className="industry-solution">
          <Container>
            <EventsList />
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default Events;
