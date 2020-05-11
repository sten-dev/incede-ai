import React, { Component } from 'react';
import { Card, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import LastWAIcon from './LastWAIcon';
class DiscoverySearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div className={`d-flex chat-section-left ${this.props.isLastWAUser ? 'is-last-wa-user' : ''}`}>
                    {this.props.isLastWAUser && (
                        <div className="d-none d-md-block wa-icon">
                            <LastWAIcon isAgent={false} />
                        </div>
                    )}
                    <div className="discovery-search-results-container max-wa-container">
                        <Card>
                            <CardBody>
                                <h6 className="m-0">
                                    {/* <strong> */}
                                    {this.props.data.message}
                                    {/* </strong> */}
                                </h6>
                                <br />
                                <ListGroup>
                                    {this.props.data.data.slice(0, 3).map((discoveryResult, discoveryIndex) => (
                                        <ListGroupItem >
                                            <ListGroupItemHeading className="m-0 pointer">
                                                <a rel="noopener noreferrer" href={discoveryResult.url} target="_blank">
                                                    {discoveryResult.title}
                                                </a>
                                            </ListGroupItemHeading>
                                            <ListGroupItemText tag="small">
                                                {discoveryResult.isExpanded ? (
                                                    <React.Fragment>
                                                        <span>{discoveryResult.body}</span>
                                                    </React.Fragment>
                                                ) : (
                                                        <React.Fragment>
                                                            <span className="d-none d-sm-block">
                                                                {discoveryResult.body.substr(0, 200)}{`${discoveryResult.body.length > 200 ? '...' : ''}`}
                                                            </span>
                                                            <span className="d-block d-sm-none">
                                                                {discoveryResult.body.substr(0, 100)}{`${discoveryResult.body.length > 100 ? '...' : ''}`}
                                                            </span>
                                                        </React.Fragment>
                                                    )}
                                                {this.props.selectedDemo === "COVID-19b" && (
                                                    <div className="d-flex justify-content-end mt-2">
                                                        <button onClick={() => this.props.handleDiscoveryViewContent(this.props.index, discoveryIndex)} className="btn btn-outline-primary btn-sm">{discoveryResult.isExpanded ? 'View Less' : 'View More'} </button>
                                                    </div>
                                                )}
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default DiscoverySearchResults;