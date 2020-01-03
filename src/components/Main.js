import React, { Component, useState } from "react";
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
      window: undefined
    };
  }
  componentDidMount() {
    this.setState({
      window: window
    });
  }

  toggle = () => {
    if (!this.state.modal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    this.setState({
      modal: !this.state.modal
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
            <BotSection
              toggle={this.toggle}
              shouldConnectApi={this.state.modal}
            />
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
