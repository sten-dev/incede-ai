import React from "react";
import send from "../../../img/Send.svg";
import { Button } from 'reactstrap';
export const ChatPillAsk = props => {
  return (
    <div className={`d-flex justify-content-end`}>
      <section className={`chat-pill ask d-flex`}>
        <input
          type="text"
          className="chat-textfield flex-grow-1"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          onKeyDown={props.handleKeyDown}
        />
        <div className="send">
          <Button disabled={!props.value || props.value.length === 0} color="secondary" onClick={props.onClick}>
            <img alt="send" src={send} />{" "}
            <span className="d-none d-sm-block">Send</span>
          </Button>
        </div>
      </section>
    </div>
  );
};
