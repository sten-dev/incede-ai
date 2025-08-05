import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Alert
} from 'reactstrap';
import * as DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import LinkedInSignIn from 'react-linkedin-login-popup';
import linkedInPNG from '../img/social/linkedIn.png';
import {
  httpClient,
  LINKEDIN,
  storeLinkedinUser,
  getLinkedinUser
} from '../constants';
import { userDetailFromLinkedin } from '../../Service';
import { withToastContext } from './common/ToastProvider';

class ContactModal extends Component {
  window;
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: {
        name: '',
        email: props.prefillEmail || '',
        phone: '',
        company: '',
        reason: '',
        date: ''
      },
      showLinkedin: true,
      hasDetailsSubmitted: undefined,
      message: ''
    };
  }

  componentDidMount = () => {
    this.window = window;
    this.getLinkedUser();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.prefillEmail !== this.props.prefillEmail) {
      this.setState({
        contactInfo: {
          ...this.state.contactInfo,
          email: this.props.prefillEmail || ''
        }
      });
    }
  }

  getLinkedUser = () => {
    let data = getLinkedinUser();
    if (data != null) {
      let firstName = data.firstName != null ? data.firstName : '';
      let lastName = data.lastName != null ? data.lastName : '';

      this.setState({
        showLinkedin: false,
        contactInfo: {
          ...this.state.contactInfo,
          name: firstName + ' ' + lastName,
          email: data.email || this.props.prefillEmail || ''
        }
      });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    
    let result = await httpClient(`contact-details`, 'POST', {
      ...this.state.contactInfo
    });

    if (result && result.success) {
      this.setState({
        hasDetailsSubmitted: true,
        contactInfo: {
          name: '',
          email: '',
          phone: '',
          company: '',
          reason: '',
          date: ''
        },
        message: 'Thank you for contacting us. We will respond to you ASAP!'
      });
      setTimeout(() => {
        this.props.onClose();
      }, 2000);
    } else {
      this.setState({
        hasDetailsSubmitted: false,
        message: 'Error while submitting the details'
      });
    }
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

  handleSuccess = async code => {
    let obj = {
      grant_type: LINKEDIN.grant_type,
      code: code,
      redirect_uri: LINKEDIN.redirectUrl,
      client_id: LINKEDIN.clientId
    };
    let res = await userDetailFromLinkedin(obj);
    if (res && res.success) {
      let data = res.data;
      this.props.toast.show('Successfully logged in with LinkedIn', 'success');
      storeLinkedinUser(data);

      let firstName = data.firstName != null ? data.firstName : '';
      let lastName = data.lastName != null ? data.lastName : '';

      this.setState({
        showLinkedin: false,
        contactInfo: {
          ...this.state.contactInfo,
          name: firstName + ' ' + lastName,
          email: data.email || this.props.prefillEmail || ''
        }
      });
    }
  };

  handleFailure = error => {
    console.log('error', error);
  };

  render() {
    const width = this.window && this.window.innerWidth;

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.onClose}
        className='modal-lg'
        centered
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-dialog-centered"
      >
        <ModalHeader
          toggle={this.props.onClose}
          className="d-flex justify-content-center position-relative"
        >
          Schedule
        </ModalHeader>
        <ModalBody>
          <div className='contact-us-section'>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Name *</Label>
                    <Input
                      onChange={this.handleOnChange}
                      className='form-control'
                      type='text'
                      name='name'
                      placeholder='Name *'
                      value={this.state.contactInfo.name}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Email *</Label>
                    <Input
                      onChange={this.handleOnChange}
                      className='form-control'
                      type='email'
                      name='email'
                      value={this.state.contactInfo.email}
                      placeholder='Email *'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Company *</Label>
                    <Input
                      onChange={this.handleOnChange}
                      className='form-control'
                      type='text'
                      name='company'
                      value={this.state.contactInfo.company}
                      placeholder='Company *'
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Phone</Label>
                    <Input
                      onChange={this.handleOnChange}
                      className='form-control'
                      type='text'
                      name='phone'
                      value={this.state.contactInfo.phone}
                      placeholder='Phone'
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label>What do you want to talk about</Label>
                    <Input
                      onChange={this.handleOnChange}
                      className='form-control'
                      type='text'
                      name='reason'
                      value={this.state.contactInfo.reason}
                      placeholder='What do you want to talk about'
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label>Convenient Time</Label>
                    <DateTime
                      inputProps={{ placeholder: 'Convenient Time', className: 'form-control' }}
                      isValidDate={current =>
                        moment(current)
                          .add(1, 'days')
                          .toDate() > new Date()
                      }
                      onChange={value => {
                        this.setState({
                          contactInfo: {
                            ...this.state.contactInfo,
                            date: isNaN(new Date(value).getTime())
                              ? ''
                              : new Date(value)
                          }
                        });
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  {/* Submit Button */}
                  <Button className='btn btn-secondary btn-block mb-2' type='submit' style={{ width: '100%' }}>
                    Submit
                  </Button>
                  {/* Separator */}
                  <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#888', margin: '8px 0' }}>
                    or
                  </div>
                  {/* LinkedIn Button */}
                  {this.state.showLinkedin && (
                    <LinkedInSignIn
                      clientId={LINKEDIN.clientId}
                      redirectUrl={LINKEDIN.redirectUrl}
                      onSuccess={this.handleSuccess}
                      onError={this.handleFailure}
                      scopes={['r_liteprofile', 'r_emailaddress']}>
                      {onclick => (
                        <Button
                          onClick={onclick}
                          className='btn btn-linkedin btn-block'
                          style={{ width: '100%' }}>
                          <img
                            src={linkedInPNG}
                            alt='linkedin'
                            style={{ width: '16px', marginRight: '8px' }}
                          />
                          {width && width <= 992 && width >= 768
                            ? 'LinkedIn'
                            : 'Login with LinkedIn'}
                        </Button>
                      )}
                    </LinkedInSignIn>
                  )}
                </Col>
                {this.state.message &&
                  (this.state.hasDetailsSubmitted !== undefined &&
                  this.state.hasDetailsSubmitted === true ? (
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <br />
                      <Alert color='success'>
                        {this.state.message}
                      </Alert>
                    </Col>
                  ) : (
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <br />
                      <Alert color='danger'>{this.state.message}</Alert>
                    </Col>
                  ))}
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default withToastContext(ContactModal);
