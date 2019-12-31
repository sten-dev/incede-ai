import React, { Component } from "react";
import Home from "./Landing/Home";
import AboutUs from "./Landing/AboutUs";
import WhatWeDo from "./Landing/WhatWeDo";
import CaseStudies from "./CaseStudies";
import ContactUs from "./Landing/ContactUs";
import { Modal, ModalBody } from "reactstrap";
import BotSection from "./Landing/BotSection";
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
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { home, about, location } = this.props;
    return (
      <React.Fragment>
        {this.state.window &&
          this.state.window.location &&
          this.state.window.location.pathname.indexOf("/admin/") !== 0 && (
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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="bot-side-menu"
          backdrop="static"
        >
          <ModalBody>
            <BotSection toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Main;
