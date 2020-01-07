import React, { Component } from "react";
import Home from "./Landing/Home";
import AboutUs from "./Landing/AboutUs";
import WhatWeDo from "./Landing/WhatWeDo";
import CaseStudies from "./CaseStudies";
import ContactUs from "./Landing/ContactUs";
import BotSection from "./Landing/BotSection";
import Sidebar from "react-sidebar";
import "../styles/bot.scss";
import chat from "../img/chat.svg";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isFirst: true,
      window: undefined
    };
  }
  componentDidMount() {
    this.setState({
      window: window
    });
  }

  toggle = () => {
    if (!this.state.modal) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "initial";
    }

    this.setState({
      modal: !this.state.modal,
      isFirst: false
    });
  };

  render() {
    const { home, about, location } = this.props;
    // if (this.state.window && this.state.window.location) {
    //     console.log("window", this.state.window.location.pathname.indexOf("/admin/"));
    // }
    return (
      <React.Fragment>
        {this.state.window &&
          this.state.window.location &&
          this.state.window.location.pathname.indexOf("/admin/") !== 0 &&
          !this.state.modal && (
            <div onClick={this.toggle} className="bot-menu-btn left">
              <img src={chat} alt="chat" />
              <div className="d-none d-md-block">Let us converse</div>
            </div>
          )}

        <Home home={home} />
        <AboutUs about={about} />
        <WhatWeDo />
        <CaseStudies />
        <ContactUs location={location} />
        <Sidebar
          sidebar={
            !this.state.isFirst ? (
              <BotSection toggle={this.toggle} />
            ) : (
              <React.Fragment></React.Fragment>
            )
          }
          open={this.state.modal}
          onSetOpen={this.toggle}
          styles={{
            sidebar: { width: "100%", overflowX: "hidden" },
            content: { position: "initial" },
            root: { position: "initial" }
          }}
          rootClassName="side-bar"
        >
          {" "}
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default Main;
