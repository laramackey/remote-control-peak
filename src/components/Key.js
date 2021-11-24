import React from 'react';
import './Blackkey.css';
import './Whitekey.css'

const Key = (props) => {
  return (
    <button onMouseDown={() => props.setNote(props.note)}
    onMouseUp={() => props.stopNote(props.note)}
    onMouseLeave={() => props.stopNote(props.note)}
    className={props.className}>
      {' '}
    </button>
  );
}

export default Key;
