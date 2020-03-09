import React, { Component } from "react";
import INavbar from "./Navbar";
import ChatMain from "./Landing/bot/ChatMain";
import Footer from "./Footer";
import { animateScroll as scroll } from "react-scroll";
import CookieBar from "./CookieBar";
class LayoutBody extends Component {
  window;
  constructor(props) {
    super(props);
    this.state = {
      isScrollHidden: false,
      isCookieSaved: true
    };
  }
  componentDidMount = async () => {
    this.window = window;
    await this.handleSession();
    await document.addEventListener("scroll", this.trackScrolling);
    await this.trackScrolling();
    await this.findCookie();
  };

  parseJwt = () => {
    let token = this.getToken();
    if (token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(this.window.atob(base64));
    }
    return "";
  };

  getToken = () => {
    if (this.window && this.window.localStorage) {
      let obj = this.window.localStorage.getItem("incedeAuthToken");
      return obj;
    }
    return null;
  };

  isTokenExpired = () => {
    var token = this.getToken();
    if (token) {
      let user = this.parseJwt();
      var cur_time = new Date().getTime() / 1000;
      if (user && user.exp && cur_time < user.exp) {
        return false;
      }
      return true;
    } else {
      return true;
    }
  };

  handleSession = () => {
    if (
      !window.location.pathname.startsWith("/login") &&
      this.isTokenExpired()
    ) {
      window.location.href = "/login";
    }
  };

  findCookie = () => {
    if (this.window && this.window.localStorage) {
      let obj = this.window.localStorage.getItem("incedeCookie");
      if (obj) {
        this.setState({ isCookieSaved: true });
      } else {
        this.setState({ isCookieSaved: false });
      }
    }
  };
  handleAddCookie = () => {
    this.window.localStorage.setItem("incedeCookie", "1");
    this.setState({ isCookieSaved: true });
  };
  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }
  isBottom = el => {
    if (el && el.getBoundingClientRect) {
      return el.getBoundingClientRect().bottom - window.innerHeight <= 50;
    }
  };
  trackScrolling = () => {
    const wrappedElement = document.getElementById("layout_body");
    if (this.isBottom(wrappedElement)) {
      this.setState({
        isScrollHidden: true
      });
    } else {
      this.setState({
        isScrollHidden: false
      });
    }
  };

  scrollMore = () => {
    scroll.scrollMore(250);
  };

  render() {
    return (
      <section id="layout_body">
        <INavbar page={this.props.page} />
        <ChatMain page={this.props.page} />
        <div>{this.props.children}</div>
        {this.props.page !== "dashboard" && <Footer />}
        {this.props.page !== "dashboard" &&
          this.props.page !== "login" &&
          this.props.page !== "cookie/policy" &&
          this.state.isCookieSaved === false && (
            <CookieBar addCookie={() => this.handleAddCookie()} />
          )}
        {this.state.isScrollHidden !== true && (
          <section
            className="scroll-to-bottom-container"
            onClick={this.scrollMore}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="#b3b3b3"
                d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
              />
            </svg>
          </section>
        )}
      </section>
    );
  }
}

export default LayoutBody;
