import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Transition from '../../Transition';
import Layout from '../../components/Layout';
import businessTerms from "../../img/why-incede/business-terms.png";
import certifiedExpertise from "../../img/why-incede/certified-expertise.png";
import customerSuccess from "../../img/why-incede/customer-success.png";
import "../../styles/why-incede.scss"
class WhyIncede extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Layout pageTitle="Why Incede | Incede">
                    <Transition>
                        <section className="industry-solution why-incede-container">
                            <section className="header-section text-center">
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
                            <br />
                            <Container>
                                <h1 className="text-left heading">Results in Business Terms </h1>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={8}>
                                        <h4 className="m-0 text-primary">
                                            Incede creates outcome-based IBM Watson AI solutions for your business
                                        </h4>
                                        <p>
                                            We are a business-savvy consulting and development firm using Watson technology.  Results-oriented, our unique blend of industry knowledge and technical expertise solves our customer’s most challenging business problems
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} className="mt-4 mt-lg-0 image-center">
                                        <div className="image-section">
                                            <img src={businessTerms} alt="business team" />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <h1 className="text-left heading">Certified Expertise </h1>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={8}>
                                        <h4 className="m-0 text-primary">
                                            We are experts in IBM Watson AI with tools to accelerate results.
                                        </h4>
                                        <p>
                                            With decades of experience, we are visionary thinkers and recognized problem solvers who are trusted by our customers to navigate Artificial Intelligence, Machine learning, Cloud, Mobile and Emerging technologies to deliver right-fit solutions, analytics strategies, phase-one projects and full implementations.
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} className="mt-4 mt-lg-0 image-center">
                                        <div className="image-section">
                                            <img src={certifiedExpertise} alt="certified expertise" />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                <h1 className="text-left heading">Customer Successes </h1>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={8}>
                                        <h4 className="m-0 text-primary">
                                            Customer success is measured in business value
                                        </h4>
                                        <p>
                                            Our integrity and trust are established by our 450+ customers across several industries, large and mid-sized, for- and non-profit.
                                        </p>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} className="mt-4 mt-lg-0 image-center">
                                        <div className="image-section">
                                            <img src={customerSuccess} alt="customer success" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </Transition>
                </Layout>
            </React.Fragment>
        );
    }
}

export default WhyIncede;