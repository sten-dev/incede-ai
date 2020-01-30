import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashboardMain from './DashboardMain';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <h1>Chat Section</h1>
                        </Col>
                        <Col lg={9} md={9} sm={12} xs={12}>
                            <DashboardMain />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Dashboard;