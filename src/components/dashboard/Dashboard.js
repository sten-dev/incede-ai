import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashboardMain from './DashboardMain';
import ChatMain from './ChatMain';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoomId: null
        }
    }
    handleOnRoomChange = (roomId) => {
        this.setState({
            selectedRoomId: roomId
        })
    }
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col lg={3} md={3} sm={12} xs={12}>
                            <ChatMain handleRoomChange={this.handleOnRoomChange} />
                        </Col>
                        <Col lg={9} md={9} sm={12} xs={12}>
                            <DashboardMain selectedRoomId={this.state.selectedRoomId} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Dashboard;