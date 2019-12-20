import React from "react";

export const ChatPill = props => {
  return (
    <div
      className={`d-flex ${
        props.right ? "justify-content-end" : "justify-content-start"
      }`}
    >
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
