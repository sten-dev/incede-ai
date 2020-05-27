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
import AssetDetails_Image from '../../img/campaign-banking/AssetDetails_Image.png';
import arrow from '../../img/arrow.svg';
import Loading from '../common/Loading';
import { registerForWebinar } from '../../../Service';
import FooterLocation from '../FooterLocation';
import twitterPNG from '../../img/social/twitter.png';
import linkedInPNG from '../../img/social/linkedIn.png';
import whitePolygon from '../../img/webinar/polygon_watermark_white.svg';
import purplePolygon from '../../img/webinar/polygon_watermark_purple.svg';


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
        <Container className='container-width'>
          <Navbar expand='lg' light>
            <NavbarBrand>
              <Link to='/'>
                <img className='incede-logo' src={logo} alt='incede' />
              </Link>
            </NavbarBrand>
          </Navbar>
        </Container>
      </nav>

      <div className='body1'>
        <div className="position-relative">
          <img src={whitePolygon} alt="polygon" className="position-absolute" />
        </div>
        <br />
        <br />
        <Container className='container-width'>
          <Row className='gap-y '>
            <Col sm='12' md='12' lg='6'>
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
            <Col sm='12' md='12' lg='6'>
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
          <Row className="position-relative">
            <Col className='gap-y left' sm='12' md='12' lg='6'>
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
                  src={AssetDetails_Image}
                  alt='AssetDetails_Image'
                  className='img'
                />
              </div>
            </Col>
            <Col className='gap-y right' sm='12' md='12' lg='6'>
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
            <img src={purplePolygon} alt="polygon" className="position-absolute bottom-polygon" />
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>

      <div className='about'>
        <Container className='container-width'>
          <Row className='gap-y '>
            <Col sm='12' md='12' lg='6'>
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
            <Col className='d-none d-lg-block'>
              <div className='image-section'>
                <img src={AiImage} alt='hero' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className='footer'>
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
      </div> */}

      <footer className='footer gap-y-half'>
        <Container>
          <Row className='d-flex flex-column-reverse flex-md-row'>
            <Col sm={12} md={12}>
              <Container fluid>
                <Row>
                  <Col className='incede-img' xs='6' md='6' sm='6' lg='6'>
                    <Row>
                      <Col>
                        <img src={logo} alt='incede.ai' />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg='6' md='6' sm='6' xs='6'>
                    <br />
                    <section className='social text-right'>
                      <a
                        className='pl-0'
                        title='LinkedIn'
                        target='_blank'
                        href='https://www.linkedin.com/company/incede-ai'>
                        <img src={linkedInPNG} alt='LinkedIn' />
                      </a>
                      <a
                        title='twitter'
                        target='_blank'
                        href='https://twitter.com/incede_ai'>
                        <img
                          className='fas fa-lg'
                          src={twitterPNG}
                          alt='Twitter'
                        />
                      </a>
                      <a
                        title='Youtube'
                        target='_blank'
                        href='https://www.youtube.com/channel/UCQwz5MBtdWHuqpoKpU21xRQ'>
                        {/* <i class="fab fa-youtube"></i> */}
                        {/* <img src={youtubePNG} alt="youtube" /> */}

                        <svg
                          style={{ width: 42, height: 42 }}
                          viewBox='0 0 24 24'>
                          <path
                            fill='#ff0000'
                            d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
                          />
                        </svg>
                      </a>

                      {/* <a className="pl-0" title="twitter" href="https://facebook.com">
                        <img src={facebook} alt="Facebook" />
                      </a>
                      <a title="instagram" href="https://instagram.com">
                        <img src={instagram} alt="Instagram" />
                      </a> */}
                    </section>
                  </Col>
                  <Col md='4' sm='6' xs='12' className='py-2'>
                    <section className='half-menu'>
                      <ul className='list-unstyled'>
                        <li>
                          <Link to='/' className='navbar-item'>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className='navbar-item' to='/why-incede'>
                            Why Incede
                          </Link>
                        </li>
                        <li>
                          <Link className='navbar-item' to='/why-incede'>
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </section>
                  </Col>
                  <Col md='4' sm='6' xs='12' className='py-2'>
                    <section className='menu'>
                      {/* <FooterLocation /> */}
                      <h4 className="mt-0 text-white">Contact Us</h4>
                      <p>United States, Headquaters</p>
                      <br />
                      <p>408-898-4606, info@incede.ai</p>
                      <br />
                      <p>
                        5201 Great America Parkway, Suite #320, Santa Clara, CA 95054
                      </p>
                    </section>
                  </Col>
                  {/* <Col lg='12' md='12' sm='12' xs='12'>
                    <p className='m-0'>© Copyright 2020 incede.ai</p>
                  </Col> */}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default CampaignBanking;
