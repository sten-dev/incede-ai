import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/industry-solution.scss";
import SupportField from "../../img/industry-solution/support-field.png";
import Manufacturing from "../../img/industry-solution/Manufacturing.png";
import Woodside from "../../img/industry-solution/Woodside.svg";
import DelticCaseStudy from "../../img/industry-solution/deltic-group.png";
import FlowersCaseStudy from "../../img/industry-solution/1800-flowers.png";
import RetailImage from "../../img/industry-solution/retail-distribution.png";

class RetailDistribution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="industry-solution-content gap-y-half" id="1">
        <Container>
          <h1 className="text-left heading mb-5">Retail/Distribution/CPB</h1>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <p className="content-heading mb-3">Messages-to-Conversations</p>
              <p className="content-body">
                Social media is a vital channel for retailers and Watson AI
                enables them to keep up with the message inflow and find ways of
                converting messengers into customers.
              </p>
              <br />
              <p className="content-body">
                Incede designs the virtual assistant to integrate with leading
                messenger applications such as Facebook, Slack, Intercom to
                select targeted message content and convert them into
                conversations and then transactions.
              </p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="mt-4 mt-lg-0">
              <div className="woodside p-4 d-flex mt-5  flex-column flex-sm-row">
                <div className="text-center ">
                  <img src={DelticCaseStudy} alt="Woodside" className="" />
                </div>
                <div className="flex-grow-1 ml-3">
                  <p className="pp-1">Deltic Group Case Study</p>
                  <p className="pp-3">
                    <a
                      href="/docs/deltic-group.pdf"
                      target="_blank"
                      className="case-study"
                      rel="noopener noreferrer"
                    >
                      View Case Study
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <p className="content-heading mb-3">Customer Order & Pick-up</p>
              <p className="content-body">
                Brick and mortar stores are utilizing Watson Assistant to enable
                customers to inquire, order and pay for products – anytime and
                anywhere. The stores purpose is doubled from the traditional
                street business to a mobile customer’s distribution outlet.
              </p>
              <br />
              <p className="content-body">
                Incede develops the conversational flow to answer inquiries,
                process payments and confirm pick-up details with the store and
                customer.
              </p>
              <br />
              <div className="woodside p-4 d-flex flex-column flex-sm-row">
                <div className="text-center">
                  <img src={FlowersCaseStudy} alt="Woodside" />
                </div>
                <div className="flex-grow-1 ml-3">
                  <p className="pp-1">1-800 Flowers Case Study</p>

                  <p className="pp-3">
                    <a
                      href="https://www.ibm.com/services/ibmix/case-studies/1-800-flowers.html"
                      target="_blank"
                      className="case-study"
                      rel="noopener noreferrer"
                    >
                      View Case Study
                    </a>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} className="mt-4 mt-lg-0">
              <div className="image-section mt-5">
                <img src={RetailImage} alt="support image" />
              </div>
            </Col>
          </Row>
          {/* <br />
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <p className="content-heading mb-3">Expert Knowledge Base </p>
              <p className="content-body">
                The historical knowledge of a product, a plant, a line or a
                machine is no longer limited to the wisdom of the current staff
                or the latest frequently asked questions documents
              </p>
              <br />
              <p className="content-body">
                Incede uses Watson Discovery to ingest and index the libraries
                of maintenance logs, purchase histories, downtime reports,
                throughput data logs, quality control reports and even complex
                engineering specifications to vastly expand the organization’s
                knowledge base. Using natural language, employees use the
                simple, natural language interface of Watson Assistant to tap
                the organization’s now-expanded knowledge base for answers.
                Incede ingests, categorizes and marks the documents and then
                iteratively trains and tests the model to ensure document
                relevancy is obtained.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="mt-4 mt-lg-0 image-center"
            >
              <div className="woodside p-2 d-flex mt-5 flex-column flex-sm-row">
                <div className="text-center">
                  <img
                    src={FlowersCaseStudy}
                    alt="Woodside"
                    className="case-study-image"
                  />
                </div>
                <div className="flex-grow-1 ml-3">
                  <p className="pp-1">1-800 Flowers Case Study</p>
                  <p className="pp-2 my-2">
                    Here’s a great example of how AI can be used to store and
                    utilize staff knowledge. Which resulted in 75% reduction in
                    reseach time for new employees.
                  </p>
                  <p className="pp-3">
                    <a
                      href="https://www.ibm.com/services/ibmix/case-studies/1-800-flowers.html"
                      target="blank"
                      className="case-study"
                    >
                      View Case Study
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <div>
                <img width="100%" src={Manufacturing} alt="support image" />
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
    );
  }
}

export default RetailDistribution;
