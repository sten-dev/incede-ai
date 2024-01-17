import React from "react";
import { Container } from "reactstrap";
import Layout from "../../../components/Layout";
import Transition from "../../../Transition";
import AnalyticsHeader from "../../../components/services/AnalyticsHeader";
import DataWarehousing from "../../../components/services/analytics-services/DataWarehousing";

const DataWarehousingMain = () => {
  return (
    <Layout pageTitle="Data Warehousing | Analytics Services | Incede">
      <Transition>
        <section className="industry-solution">
          <AnalyticsHeader />
          <Container fluid className="p-0">
            <DataWarehousing/>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default DataWarehousingMain;
