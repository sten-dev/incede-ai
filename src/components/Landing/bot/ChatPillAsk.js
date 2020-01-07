import React from "react";
import send from "../../../img/Send.svg";
import { Button } from "reactstrap";
export const ChatPillAsk = props => {
  return (
    <div
      className={`d-flex justify-content-end`}
      style={{ position: "absolute", bottom: 0, right: 0, marginRight: "24px" }}
    >
      <section className={`chat-pill ask d-flex`}>
        <input
          type="text"
          className="chat-textfield flex-grow-1"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          onKeyDown={props.handleKeyDown}
        />
        <div className="d-flex send send-msg">
          <Button
            disabled={!props.value || props.value.length === 0}
            color="secondary"
            onClick={props.onClick}
          >
            <img alt="send" src={send} /> <span>Send</span>
          </Button>
        </div>
      </section>
    </div>
  );
};
