import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Transition from '../../Transition';
import { Row, Col } from 'reactstrap';
import DemoCard from '../../components/demo/DemoCard';
import { getDemosLists } from '../../../Service';
import Loading from '../../components/common/Loading';
class CustomDemos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            demosList: [],
        }
    }

    componentDidMount = async () => {
        await this.getDemosList();
    };

    getDemosList = async () => {
        this.setState({ isLoading: true });
        let res = await getDemosLists();
        if (res && res.success) {
            this.setState({ demosList: res.data });
        } else {
        }
        this.setState({ isLoading: false });
    };

    render() {
        return (
            <React.Fragment>
                <Layout pageTitle="Custom Demo | Incede" page="custom-demo">
                    <Transition>
                        {/* <Loading /> */}
                        {this.state.isLoading && <Loading />}
                        <Row className="p-3 m-0">
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h4 className="m-0">Incede.ai Demos</h4>
                                <br />
                            </Col>
                            {this.state.demosList && this.state.demosList.length > 0 ? (
                                this.state.demosList.map((x, index) => {
                                    return (
                                        <Col key={`${index}`} className="mb-3" xs={12} sm={6} md={3}>
                                            <DemoCard
                                                data={x}
                                                index={index}
                                                onMapClick={() => this.handleMapClick(true, x)}
                                            />
                                        </Col>
                                    );
                                })
                            ) : (
                                    <React.Fragment>
                                        <Col xs={12} className="text-center">
                                            <h5>No Demos available !</h5>
                                        </Col>
                                    </React.Fragment>
                                )}
                        </Row>
                    </Transition>
                </Layout>
            </React.Fragment>
        );
    }
}

export default CustomDemos;