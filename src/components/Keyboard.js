import React from 'react';
import './Keyboard.css';
import Whitekey from './Whitekey.js';
import Blackkey from './Blackkey.js';

const Keyboard = (props) => {
  //const [note, setNote] = useState();
  const setNote = (note) => {
    props.device.send([0x90, note, 0x40]);
    setTimeout(() => {
      props.device.send([0x80, note, 0x40]);
    }, 1000);
  };
  return (
    <div className="keyboard" id="keyboard">
      <Whitekey setNote={setNote} note="72" />
      <Blackkey setNote={setNote} note="73" />
      <Whitekey setNote={setNote} note="74" />
      <Blackkey setNote={setNote} note="75" />
      <Whitekey setNote={setNote} note="76" />
      <Whitekey setNote={setNote} note="77" />
      <Blackkey setNote={setNote} note="78" />
      <Whitekey setNote={setNote} note="79" />
      <Blackkey setNote={setNote} note="80" />
      <Whitekey setNote={setNote} note="81" />
      <Blackkey setNote={setNote} note="82" />
      <Whitekey setNote={setNote} note="83" />
      <Whitekey setNote={setNote} note="84" />
      <Blackkey setNote={setNote} note="85" />
      <Whitekey setNote={setNote} note="86" />
      <Blackkey setNote={setNote} note="87" />
      <Whitekey setNote={setNote} note="88" />
      <Whitekey setNote={setNote} note="89" />
    </div>
  );
};

export default Keyboard;
