import React, { Component } from "react";
import "../../styles/bot.scss";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo_white.svg";
import { ChatPill } from "./bot/ChatPill";
class BotSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="bot">
        <Container>
          <Row>
            <Col className="d-flex flex-column">
              <div className="d-flex justify-content-center flex-grow-1">
                <img
                  src={logo}
                  alt="incede.ai"
                  style={{ width: "10em", height: "5em" }}
                />
              </div>
              <div className="d-flex justify-content-center flex-grow-1">
                <p className="lead text-white">
                  Incede provides outcome-based AI solutions and offers
                </p>
              </div>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <section className="chat d-flex flex-column flex-grow-1">
                <ChatPill text="Our solutions provide outsome-based answers to the business problems." />
                <ChatPill text="Which solutions are you looking for?" />
                <ChatPill right text="Customer Analytics" />
                <ChatPill text="You can use our customer analytics solution to target the right customers with predictive modeling. Identify dissatisfied customers by uncovering patterns of behavior. Address customer service issues faster by correlating and analyzing a variety of data." />
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BotSection;
