import React, { Component } from 'react';
import { Form, Card, CardBody, FormGroup, Input, Button, Label, Row, Col, Alert } from 'reactstrap';
import { httpClient } from '../../../constants';
import { ChatPill } from './ChatPill';
class CallBackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactDetails: {
                name: "",
                email: "",
                phone: "",
                company: "",
                reason: ""
            },
            message: "",
            hasDetailsSubmitted: false,
        }
    }

    handleOnChange = (event) => {
        let eve = { ...event }
        this.setState(prevState => ({
            contactDetails: {
                ...prevState.contactDetails,
                [eve.target.name]: eve.target.value
            }
        }));
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("data added", this.state.contactDetails);
        let result = await httpClient(`rooms/${this.props.roomId}/schedule`, "POST", {
            ...this.state.contactDetails,
            roomId: this.props.roomId,
        });
        if (result.success) {
            this.setState({
                hasDetailsSubmitted: true,
                message: "Your details have been submitted successfully. Our agent will contact you soon."
            })
        } else {
            this.setState({
                message: "Error while submitting the details"
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-end">
                    {this.state.hasDetailsSubmitted ? (
                        <React.Fragment>
                            <ChatPill
                                isLastWAUser={false}
                                right={false}
                                user={"WA"}
                                text={this.state.message}
                            />
                        </React.Fragment>
                    ) : (
                            <div className="call-back-form">
                                <Card>
                                    <CardBody>
                                        <Form onSubmit={this.handleSubmit}>
                                            <h4 className="m-0 text-center">Callback Form</h4>
                                            <br />
                                            <Row>
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <FormGroup>
                                                        <Label>Name</Label>
                                                        <Input onChange={this.handleOnChange} type="text" name="name" placeholder="Name" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <FormGroup>
                                                        <Label>Email</Label>
                                                        <Input onChange={this.handleOnChange} type="email" name="email" placeholder="Email" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <FormGroup>
                                                        <Label>Phone</Label>
                                                        <Input onChange={this.handleOnChange} type="text" name="phone" placeholder="Phone" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={6} md={6} sm={12} xs={12}>
                                                    <FormGroup>
                                                        <Label>Company</Label>
                                                        <Input onChange={this.handleOnChange} type="text" name="company" placeholder="Company" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <FormGroup>
                                                        <Label>What do you want to talk</Label>
                                                        <Input onChange={this.handleOnChange} type="text" name="reason" placeholder="What do you want to talk" required />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={12} md={12} sm={12} xs={12}>
                                                    <Button className="btn btn-primary" type="submit">Submit</Button>
                                                </Col>
                                                {this.state.message && (
                                                    <Col lg={12} md={12} sm={12} xs={12}>
                                                        <br />
                                                        <Alert color="danger">
                                                            {this.state.message}
                                                        </Alert>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        )}
                </div>
            </React.Fragment>
        );
    }
}

export default CallBackForm;