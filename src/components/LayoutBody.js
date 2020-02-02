import React, { Component } from 'react';
import INavbar from './Navbar';
import ChatMain from './Landing/bot/ChatMain';
import Footer from './Footer';
import { animateScroll as scroll } from 'react-scroll'
class LayoutBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollHidden: false
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }
    isBottom = (el) => {
        console.log(el)
        if (el && el.getBoundingClientRect) {
            return (el.getBoundingClientRect().bottom - window.innerHeight) <= 50;
        }
    }
    trackScrolling = () => {
        const wrappedElement = document.getElementById("layout_body")
        if (this.isBottom(wrappedElement)) {
            this.setState({
                isScrollHidden: true
            });
        } else {
            this.setState({
                isScrollHidden: false
            })
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
                {this.props.page !== "dashboard" && (
                    <Footer />
                )}
                {this.state.isScrollHidden !== true && (
                    <section className="scroll-to-bottom-container" onClick={this.scrollMore} >
                        <svg viewBox="0 0 24 24">
                            <path fill="#b3b3b3" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z" />
                        </svg>
                    </section>
                )}
            </section>
        );
    }
}

export default LayoutBody;