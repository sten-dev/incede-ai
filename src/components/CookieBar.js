import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";

class CookieBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="cookie-bar-container">
          <div className="animate-bottom">
            <Container fluid>
              <Row className="d-flex align-items-center flex-column-reverse flex-sm-row">
                <Col xs={11} className="p-0 p-sm-3 pb-2">
                  <div className="body">
                    <p>
                      Welcome to <b>locussolutions.com</b> ! In order to provide
                      a more relevant experience for you, we use cookies to
                      enable some website functionality. Cookies help us see
                      which articles most interest you; allow you to easily
                      share articles on social media; permit us to deliver
                      content, jobs and ads tailored to your interests and
                      locations; and provide many other site benefits. For more
                      information, please review our{" "}
                      <Link to="/about/cookie-policy">Cookies Policy</Link> and{" "}
                      <Link to="/about/privacy-policy">Privacy Policy</Link>.
                    </p>
                  </div>
                </Col>
                <Col className="col pt-2 p-sm-0 text-right text-sm-center">
                  <img
                    src="/img/close-icon.png"
                    onClick={() => this.props.addCookie()}
                    className="close-icon pointer"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CookieBar;
