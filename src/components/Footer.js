import React from 'react';
import { Link } from 'gatsby';
import '../styles/footer.scss';
import logo from '../img/logo_white.png';
import twitterPNG from '../img/social/twitter.png';
import linkedInPNG from '../img/social/linkedIn.png';
import {
  Row,
  Container,
  Col,
} from 'reactstrap';

import FooterLocation from './FooterLocation';
import ContactModal from './ContactModal';
import { withToastContext } from './common/ToastProvider';

class Footer extends React.Component {
  window;
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      showContactModal: false
    };
  }
  componentDidMount = () => {
    this.window = window;
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleContactClick = () => {
    this.setState({ showContactModal: true });
  };

  handleModalClose = () => {
    this.setState({ showContactModal: false });
  };

  render() {
    const width = this.window && this.window.innerWidth;

    return (
      <footer className='footer py-4 px-2'>
        <Container>
          <Row className='d-flex flex-column-reverse flex-md-row'>
            <Col sm={12} md={6}>
              <Container fluid>
                <Row>
                  <Col className='incede-img' md='12' sm='12' lg='12'>
                    <Row>
                      <Col>
                        <img src={logo} alt='incede.ai' />
                      </Col>
                    </Row>
                  </Col>
                  <Col md='6' sm='6' xs='6'>
                    <section className='half-menu'>
                      <ul className='list-unstyled'>
                        <li>
                          <Link to='/' className='navbar-item'>
                            Home
                          </Link>
                        </li>
                        <li>
                          <li>
                          <Link to='/services/enterprise-ai-agents' className='navbar-item'>
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='navbar-item'>
                            Resources
                          </Link>
                        </li>
                          <Link className='navbar-item' to='/why-incede'>
                            Why Incede
                          </Link>
                        </li>
                      </ul>
                    </section>
                  </Col>
                  <Col md='6' sm='6' xs='6'>
                    {/* <section className='menu' id='contact-us-location'> */}
                      <FooterLocation />
                    {/* </section> */}
                  {/* <Col lg='12' md='12' sm='12' xs='12'> */}
                    <p className='m-0'>© Copyright {(new Date()).getFullYear()} incede.ai</p>
                  {/* </Col> */}
                  {/* <Col lg='12' md='12' sm='12' xs='12'> */}
                    {/* <br /> */}
                    <section className='social'>
                      <a
                        className='pl-0'
                        title='LinkedIn'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/company/incede-ai'>
                        <img src={linkedInPNG} alt='LinkedIn' />
                      </a>
                      <a
                        title='twitter'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://twitter.com/incedeAI'>
                        <img
                          className='fas fa-lg'
                          src={twitterPNG}
                          alt='Twitter'
                        />
                      </a>
                      <a
                        title='Youtube'
                        target='_blank'
                        rel='noopener noreferrer'
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
                  {/* </Col> */}
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col sm={12} md={6} id='contact-us-form'>
              <Container fluid>
                <Row>
                  <Col xs={12}>
                    <h3 className='text-white'>
                      <b>Got any questions ?</b>
                      {/* &nbsp; */}
                      {/* <LinkedInSignIn
                        clientId={LINKEDIN.clientId}
                        redirectUrl={LINKEDIN.redirectUrl}
                        onSuccess={this.handleSuccess}
                        onError={this.handleFailure}
                        scopes={['r_liteprofile', 'r_emailaddress']}>
                        {onclick => (
                          <small onClick={onclick} className='pointer'>
                            Sync with linkedin
                          </small>
                        )}
                      </LinkedInSignIn> */}
                    </h3>
                  </Col>
                  <Col xs={12}>
                    <div className="py-2 mb-3">
                      <Row>
                        <Col xs={12} sm={12} md={8} className="pr-md-2 mb-2 mb-md-0">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                          />
                        </Col>
                        <Col xs={12} sm={12} md={4} className="pl-md-2">
                          <button
                            className="btn btn-primary btn-block"
                            onClick={this.handleContactClick}
                          >
                            Let's talk
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        
        {/* Contact Modal */}
        <ContactModal
          isOpen={this.state.showContactModal}
          onClose={this.handleModalClose}
          prefillEmail={this.state.email}
        />
      </footer>
    );
  }
}

export default withToastContext(Footer);
