import React from "react";
import waAgent from "../../../img/waAgent.svg";
export const ChatPill = props => {
  return (
    <div
      className={`chat-section-${props.right ? 'right' : 'left'} d-flex ${
        props.right ? "justify-content-end" : "justify-content-start"
        } ${props.isLastWAUser ? 'is-last-wa-user' : ''}`}
    >
      {props.isLastWAUser && (
        <div className="d-none d-md-block">
          <img
            src={waAgent}
            alt="incede.ai"
          />
        </div>
      )}
      <section
        className={`chat-pill ${props.right ? "right-pill" : "left-pill"}`}
      >
        {props.text ? (
          <p
            className="chat-text"
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></p>
        ) : (
            props.children
          )}
      </section>
    </div>
  );
};
