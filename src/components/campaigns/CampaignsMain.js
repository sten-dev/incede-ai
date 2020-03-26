import React, { Component } from 'react';
import CampaignsCard from './CampaignsCard';
import { getCampaigns } from '../../../Service';
import { Row, Col, Container } from 'reactstrap';
class CampaignsMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            campaignsList: []
        }
    }
    componentDidMount() {
        // this.getCampaignsList()
    }
    getCampaignsList = async () => {
        this.setState({ isLoading: true });
        let res = await getCampaigns();
        if (res && res.success) {
            this.setState({ campaignsList: res.data });
        } else {
        }
        this.setState({ isLoading: false });
    }
    render() {
        return (
            <React.Fragment>
                <section className="wtd-list">
                    <section className="header-section gap-y text-center">
                        <Container>
                            <div className="text-left">
                                <h1>Campaigns</h1>
                            </div>
                            <Row>
                                {this.state.campaignsList.map((campaign, index) => (
                                    <Col key={index} xs="12" sm="6" md="6" lg="4" className="mt-16 ">
                                        <CampaignsCard
                                            campaign={campaign}
                                            index={index}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}

export default CampaignsMain;