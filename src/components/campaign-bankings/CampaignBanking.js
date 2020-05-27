import * as React from 'react';
import '../../styles/campaign-banking.scss';
import AiImage from '../../img/incede-home-page-middle.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Popover,
  PopoverBody,
  Modal,
  ModalBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'gatsby';
import logo from '../../img/logo_white.png';
import campaignBakingImg from '../../img/campaign-banking/campaignBanking.png';
import arrow from '../../img/arrow.svg';
import Loading from '../common/Loading';
import { registerForWebinar } from '../../../Service';

const CampaignBanking = () => {
  const [register, setRegister] = React.useState({
    FIRST_NAME: '',
    LAST_NAME: '',
    COMPANY: '',
    JOB_TITLE: '',
    EMAIL: '',
    PHONE: '',
    TYPE: 'banking',
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleOnChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const result = await registerForWebinar(register);
    if (result && result.success) {
      setIsSubmitted(true);
    } else {
      // error
    }

    setLoading(false);
  };
  return (
    <div className='campaign-banking'>
      {isLoading && <Loading />}
      <nav className='nav' id='header'>
        <Navbar expand='lg' light>
          <NavbarBrand>
            <Link to='/'>
              <img className='incede-logo' src={logo} alt='incede' />
            </Link>
          </NavbarBrand>
        </Navbar>
      </nav>

      <div className='body1'>
        <br />
        <br />
        <Container className='container-width'>
          <Row className='gap-y '>
            <Col>
              <div className='title'>
                Title Text can be of 1-3 lines which will be displayed here
              </div>
              <div className='subtitle'>
                This is the subtitle text that will be displayed in a few lines
                so people will know what the page is about and why are they
                here.
              </div>

              {/* <h1>
                Title Text can be of 1-3 lines which will be displayed here
              </h1>
              <br />
              <h4 className='subtitle'>
                This is the subtitle text that will be displayed in a few lines
                so people will know what the page is about and why are they
                here.
              </h4> */}
            </Col>
            <Col>
              <img
                src={campaignBakingImg}
                alt='campaignBanking'
                className='img'
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className='body2'>
        <Container className='custom-container container-width'>
          <Row>
            <Col className='gap-y left'>
              <div className='asset'>ASSET DETAILS</div>
              <br />
              <br />
              <div className='subtitle'>
                <div className='polygon' />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sem risus, ornare quis finibus a, sagittis et ex. Aenean a
                imperdiet velit. Fusce ultricies erat ac aliquam.
              </div>
              <br />
              <div className='subtitle'>
                <div className='polygon' />
                Sed convallis urna magna, nec pharetra est tincidunt ut. Aliquam
                magna mi, ullamcorper in leo eu, lacinia venenatis turpis.
                Curabitur tincidunt congue ligula sit amet commodo.
              </div>
              <br />
              <div className='subtitle'>
                <div className='polygon' />
                Curabitur orci libero, eleifend sed libero in, euismod consequat
                eros. Nulla pellentesque dignissim felis, vel vestibulum eros
                accumsan eu. Nulla facilisi.
              </div>
              <br />
              <br />
              <div>
                <img
                  src={campaignBakingImg}
                  alt='campaignBanking'
                  className='img'
                />
              </div>
            </Col>
            <Col className='gap-y right'>
              {isSubmitted ? (
                <div className='success'>
                  <br />
                  <br />
                  <h2 className=''>
                    You have successfully registered.{' '}
                    <span>Please click on links for more info.</span>
                  </h2>
                  <br />
                  {/* <br />
                  <h5>Learn More from the Incede Resource Center</h5> */}
                  <Link
                    className='custom-link'
                    to='https://livesend.ibm.com/i/OupOR4eFruvC3Pts2V0J74hJMIewHldbS4d5JbDi1pkNiFnuasQeGqcorwPLUSSIGNf5lfoWwVGk1PfMri3rDnKIp29___KQEzTsnRAaQtErYja3PLUSSIGNVl8EQUALSIGN'>
                    Forbes - How AI Can Help Your Employees
                  </Link>
                  <br />
                  <Link
                    className='custom-link'
                    to='https://livesend.ibm.com/i/OupOR4eFruvC3Pts2V0J74hJMIewHldbS4d5JbDi1pnxawWSqT0gHAFtMlo1GvxlLLYZVIGJFPHtp8dM9HeG16s32jSHTwboRW6Jsn7SYFIEQUALSIGN'>
                    HBR - HBR - Technology Can Save Onboarding from Itself
                  </Link>
                  <br />
                  <Link
                    className='custom-link'
                    to='https://livesend.ibm.com/i/OupOR4eFruvC3Pts2V0J74hJMIewHldbS4d5JbDi1pmaFwOfPLUSSIGNWXR6XY1ej7K3zSd9Hl7h3cTEsnxerd2iQm8xTyAGEgC20vJf8yueea3DlAEQUALSIGN'>
                    IBM - Vidahora Success Story
                  </Link>
                  <br />
                  <Link
                    className='custom-link'
                    to='https://livesend.ibm.com/i/OupOR4eFruvC3Pts2V0J74hJMIewHldbS4d5JbDi1plHbF5ht2024kVAQf2BB3vTitG9lpqUIqubnUHWP___NcMsjIXtweLpPfT3Ziwd23kykEQUALSIGN'>
                    IW - The Next Generation of Bank Branch Employees
                  </Link>
                  <br />
                  <Link
                    className='custom-link'
                    to='https://livesend.ibm.com/i/OupOR4eFruvC3Pts2V0J74hJMIewHldbS4d5JbDi1pmfzyQxSfxaEf9r2AGLlc09jDgPLUSSIGNgIBXWROk8iWdkNSHOyEzbYNZjSaP2DWouJAC4CMEQUALSIGN'>
                    J.D. Power - 2020 Customer Satisfaction with Retail Banking
                  </Link>
                </div>
              ) : (
                <div>
                  <Row className='reg-header'>
                    <Col>
                      <div className='title'>Register Now</div>
                    </Col>
                    <Col>
                      <div className='subtitle'>*Required fields</div>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <div className='register'>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='text'
                          name='FIRST_NAME'
                          placeholder='First Name *'
                          value={register.FIRST_NAME}
                          required
                        />
                      </FormGroup>
                      <br />
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='text'
                          name='LAST_NAME'
                          placeholder='Last Name *'
                          value={register.LAST_NAME}
                          required
                        />
                      </FormGroup>
                      <br />
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='text'
                          name='COMPANY'
                          value={register.COMPANY}
                          placeholder='Company *'
                          required
                        />
                      </FormGroup>
                      <br />
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='text'
                          name='JOB_TITLE'
                          value={register.JOB_TITLE}
                          placeholder='Job Title *'
                          required
                        />
                      </FormGroup>
                      <br />
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='email'
                          name='EMAIL'
                          value={register.EMAIL}
                          placeholder='Email Address *'
                          required
                        />
                      </FormGroup>
                      <br />
                      <FormGroup>
                        <Input
                          onChange={handleOnChange}
                          className='contact-us-mat-input'
                          type='text'
                          name='PHONE'
                          value={register.PHONE}
                          placeholder='Phone Number'
                          // required
                        />
                      </FormGroup>
                      <br />
                      <div className='d-flex'>
                        <Button className='btn btn-primary' type='submit'>
                          Submit
                        </Button>
                      </div>
                      <br />
                      <div className='term-con'>
                        Terms and conditions text will be displayed here in a
                        few lines so that the user can read it.
                      </div>
                    </Form>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>

      <div className='about'>
        <Container className='container-width'>
          <Row className='gap-y '>
            <Col>
              <div className='title'>ABOUT INCEDE</div>
              <br />
              <div className='subtitle'>
                We use AI to solve complex business problems
              </div>
              <br />
              <div className='subtitle2'>
                Incede personalizes user experiences, streamlines business
                processes and workflow and sparks innovation by deploying AI
                solutions.
              </div>
              <br />
              <div className='py-2'>
                <Link to='/register' className='btn btn-secondary btn-lg'>
                  Explore More &nbsp;
                  <img src={arrow} alt='next' style={{ width: '12px' }} />
                </Link>
              </div>
            </Col>
            <Col>
              <div className='image-section'>
                <img src={AiImage} alt='hero' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='footer'>
        <Container className='container-width'>
          <Row>
            <Col>
              <h4>📞 408-898-4606 &nbsp;&nbsp; ✉️ info@incede.in</h4>
            </Col>
            <Col>
              <h4 className='text-right'>© Copyright 2020 incede.ai</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CampaignBanking;
