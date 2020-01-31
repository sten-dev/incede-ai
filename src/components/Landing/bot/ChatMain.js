import React, { Component } from 'react';
import chat from "../../../img/chat.svg";
import "../../../styles/bot.scss";
import Sidebar from 'react-sidebar';
import BotSection from '../BotSection';
class ChatMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isFirst: true,
            window: undefined
        }
    }
    componentDidMount() {
        this.setState({
            window: window,
        }, () => {
            if (this.props.page === "home") {
                let waCreatedTime = localStorage.getItem("waCreatedTime");
                let isInWaSession = true;
                if (!waCreatedTime) {
                    isInWaSession = false;
                    localStorage.clear();
                } else {
                    let now = new Date().getTime();
                    let createdTime = new Date(Number(waCreatedTime)).getTime();
                    if (now - createdTime >= this.waTimeOut) {
                        isInWaSession = false;
                    }
                }
                if (isInWaSession === false) {
                    this.toggle()
                }

            }
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
        return (
            <React.Fragment>
                {this.state.window &&
                    this.state.window.location &&
                    this.state.window.location.pathname.indexOf("/admin/") !== 0 &&
                    !this.state.modal && this.props.page !== "dashboard" && (
                        <div onClick={this.toggle} className="bot-menu-btn left">
                            <img src={chat} alt="chat" />
                            <div className="d-none d-md-block">Let us converse</div>
                        </div>
                    )}

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

export default ChatMain;