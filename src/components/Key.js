import React, { useState } from 'react';
import './Blackkey.css';
import './Whitekey.css'

const Key = (props) => {
    const [mouseDown, setMouseDown] = useState(false)
    const noteOff = () => {
        if (mouseDown) {
            props.stopNote(props.note)
            setMouseDown(false)
        }
    }
  return (
    <button onMouseDown={() => {
        setMouseDown(true)
        props.setNote(props.note)}
    }
    onMouseUp={noteOff}
    onMouseLeave={noteOff}
    className={props.className}>
      {' '}
    </button>
  );
}

export default Key;
