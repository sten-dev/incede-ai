import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../../components/Layout";
import Transition from "../../Transition";
import SolutionsHeader from "../../components/Solutions/SolutionsHeader";
import customerService from "../../img/solutions/customer-service.png";

const PlanningAnalyticsService = () => {
  return (
    <Layout pageTitle="Planning Analytics Service | Incede">
      <Transition>
        <section className="industry-solution">
          <SolutionsHeader
            header={"Planning Analytics Service"}
            title={""}
          />
          <Container>
          <section className="solutions-content gap-y-half" id="3">
              <Container>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <div className="content">
                      <h1 className="text-primary">Planning Analytics Service</h1>
                      <p>
                    
                      </p>
                      <br />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    className="mt-4 mt-lg-0 d-flex"
                  >
                    <div className="image-section">
                      <img src={customerService} alt="support image" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Container>
        </section>
      </Transition>
    </Layout>
  );
};

export default PlanningAnalyticsService;
