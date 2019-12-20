import React from "react";
import send from "../../../img/Send.svg";
export const ChatPillAsk = props => {
  return (
    <div className={`d-flex justify-content-end`}>
      <section className={`chat-pill right-pill ask d-flex`}>
        <input
          type="text"
          className="chat-textfield flex-grow-1"
          placeholder={props.placeholder}
        />
        <img src={send} />
      </section>
    </div>
  );
};
