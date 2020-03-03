import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import Transition from "../../Transition";
import Layout from "../../components/Layout";
import businessTerms from "../../img/why-incede/business-terms.png";
import certifiedExpertise from "../../img/why-incede/certified-expertise.png";
import customerSuccess from "../../img/why-incede/customer-success.png";
import technologyPartners from "../../img/why-incede/partners.png";
import "../../styles/why-incede.scss";
class WhyIncede extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.contactInfo);
  };
  handleOnChange = event => {
    let eve = { ...event };
    this.setState(prevState => ({
      contactInfo: {
        ...prevState.contactInfo,
        [eve.target.name]: eve.target.value
      }
    }));
  };
  render() {
    return (
      <React.Fragment>
        <Layout pageTitle="Why Incede | Incede">
          <Transition>
            <section className="industry-solution why-incede-container">
              {/* <section className="header-section text-center">
                                <Container>
                                    <br />
                                    <br />
                                    <Row>
                                        <Col className="text-left">
                                            <p className="mb-1 display-3">Why Incede</p>
                                        </Col>
                                    </Row>
                                    <br />
                                    <br />
                                    <br />
                                </Container>
                            </section>
                            <br /> */}
              <div>
                <div className="results-section gap-y">
                  <Container>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={7}
                        className="d-flex align-items-center"
                      >
                        <div>
                          <h1 className="text-left heading text-primary">
                            Results in Business Terms{" "}
                          </h1>
                          <h4 className="my-4">
                            Incede creates outcome-based IBM Watson AI solutions
                            for your business
                          </h4>
                          <p className="sub-title">
                            We are a business-savvy consulting and development
                            firm using Watson technology. Results-oriented, our
                            unique blend of industry knowledge and technical
                            expertise solves our customer’s most challenging
                            business problems
                          </p>
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        className="mt-4 mt-lg-0 d-flex align-items-center"
                      >
                        <div className="image-section">
                          <img src={businessTerms} alt="business team" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="certified-expertise gap-y">
                  <Container>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={7}
                        className="d-flex align-items-center"
                      >
                        <div>
                          <h1 className="text-left heading text-white">
                            Certified Expertise{" "}
                          </h1>
                          <h4 className="my-4 text-white">
                            We are experts in IBM Watson AI with tools to
                            accelerate results
                          </h4>
                          <p className="sub-title  text-white">
                            With decades of experience, we are visionary
                            thinkers and recognized problem solvers who are
                            trusted by our customers to navigate Artificial
                            Intelligence, Machine learning, Cloud, Mobile and
                            Emerging technologies to deliver right-fit
                            solutions, analytics strategies, phase-one projects
                            and full implementations.
                          </p>
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        className="mt-4 mt-lg-0 d-flex align-items-center"
                      >
                        <div className="image-section">
                          <img
                            src={certifiedExpertise}
                            alt="certified expertise"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="customer-success gap-y">
                  <Container>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={7}
                        className="d-flex align-items-center"
                      >
                        <div>
                          <h1 className="text-left heading text-primary">
                            Customer Successes
                          </h1>
                          <h4 className="my-4">
                            Customer success is measured in business value
                          </h4>
                          <p>
                            Our integrity and trust are established by our 450+
                            customers across several industries, large and
                            mid-sized, for- and non-profit.
                          </p>
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        className="mt-4 mt-lg-0 d-flex align-items-center"
                      >
                        <div className="image-section">
                          <img src={customerSuccess} alt="customer success" />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="technology-partners gap-y">
                  <Container>
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={7}
                        className="d-flex align-items-center"
                      >
                        <div>
                          <h1 className="text-left heading text-white">
                            Incede Technology Partners
                          </h1>
                          <h4 className="my-4 text-white">
                            We service every aspect of planning, licensing,
                            developing, deploying & training
                          </h4>
                          <p className="sub-title text-white">
                            Our decade-long relationship with IBM has enabled us
                            deliver numerous successful implementations. This
                            success is primarily based on our shared vision to
                            deliver the greatest business value for our
                            customers.
                          </p>
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={5}
                        className="mt-4 mt-lg-0 d-flex align-items-center"
                      >
                        <div className="image-section">
                          <img
                            src={technologyPartners}
                            alt="customer success"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="contact-us-section  gap-y-half">
                  <Container>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6">
                        <h1 className="header text-primary">
                          Got any questions ?{" "}
                        </h1>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6">
                        <div>
                          <Form onSubmit={this.handleSubmit}>
                            <h3 className="contact-us">Contact Us</h3>
                            <FormGroup>
                              <Input
                                onChange={this.handleOnChange}
                                className="contact-us-mat-input"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                              />
                            </FormGroup>
                            <FormGroup>
                              <Input
                                onChange={this.handleOnChange}
                                className="contact-us-mat-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                              />
                            </FormGroup>
                            <FormGroup>
                              <Input
                                onChange={this.handleOnChange}
                                className="contact-us-mat-input"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                              />
                            </FormGroup>
                            <FormGroup>
                              <Input
                                onChange={this.handleOnChange}
                                className="contact-us-mat-input"
                                type="textarea"
                                name="message"
                                placeholder="Message"
                              />
                            </FormGroup>
                            <Button className="btn btn-primary" type="submit">
                              Submit
                            </Button>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </section>
          </Transition>
        </Layout>
      </React.Fragment>
    );
  }
}

export default WhyIncede;
