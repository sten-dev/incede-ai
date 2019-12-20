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
            <Col className="d-flex justify-content-center">
              <img
                src={logo}
                alt="incede.ai"
                style={{ width: "10em", height: "6.5em" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <section className="d-flex flex-column flex-grow-1">
                <ChatPill text="Our solutions provide outsome-based answers to the business problems." />
                <ChatPill text="Which solutions are you looking for?" />
                <ChatPill
                  right
                  text="Customer Analytics"
                />
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BotSection;
