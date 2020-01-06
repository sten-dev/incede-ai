import React, { Component } from 'react';
import "../../styles/what-we-do.scss";
import { Container, Row, Col } from "reactstrap";
import Solutions from '../Solutions';
import Industries from './Industries';
import Services from './Services';
class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "solutions"
        }
    }
    handleTabChange = (selectedTab) => {
        this.setState({
            selectedTab: selectedTab
        })
    }
    render() {
        return (
            <React.Fragment>
                <section className="what-we-do gap-t">
                    <Container>
                        <Row className="what-we-do-header-section">
                            <div className="mr-3">
                                <h1 className="title text-primary">What we do</h1>
                            </div>
                            <Col className="menu-tabs d-flex align-items-center">
                                <div className="header w-100 d-flex justify-content-end">
                                    <label onClick={() => this.handleTabChange("solutions")} className={`tab ${this.state.selectedTab === 'solutions' ? 'selected-tab' : ''}`}>Solutions</label>
                                    <label onClick={() => this.handleTabChange("services")} className={`tab ${this.state.selectedTab === 'services' ? 'selected-tab' : ''}`}>Services</label>
                                    <label onClick={() => this.handleTabChange("industries")} className={`tab ${this.state.selectedTab === 'industries' ? 'selected-tab' : ''}`}>Industries</label>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {this.state.selectedTab === "solutions" && (
                        <Solutions />
                    )}
                    {this.state.selectedTab === "services" && (
                        <Services />
                    )}
                    {this.state.selectedTab === "industries" && (
                        <Industries />
                    )}
                </section>
            </React.Fragment>
        );
    }
}

export default WhatWeDo;