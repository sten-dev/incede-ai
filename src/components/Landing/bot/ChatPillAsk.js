import React from 'react';
import send from '../../../img/Send.svg';
import microphone from '../../../img/microphone.svg';
import microphoneActive from '../../../img/microphone-active.svg';
import { Button } from 'reactstrap';
export const ChatPillAsk = props => {
  return (
    <section className={`chat-pill ask d-flex`}>
      <img
        style={{ width: '40px', paddingLeft: '10px', height: '59px' }}
        alt='send'
        src={props.audioSource === 'mic' ? microphoneActive : microphone}
        onClick={props.handleMicClick}
      />
      <input
        type={props.selectedDemo && props.selectedDemo == "Custom Training Model"?'password':'text'}
        className='chat-textfield flex-grow-1'
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        onKeyDown={props.handleKeyDown}
      />
      <div className='d-flex send send-msg'>
        <Button
          disabled={!props.value || props.value.length === 0}
          color='secondary'
          onClick={props.onClick}>
          <img alt='send' src={send} /> <span>Send</span>
        </Button>
      </div>
    </section>
  );
};
