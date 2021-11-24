import React from 'react';
import './Keyboard.css';
import Key from './Key'

const Keyboard = (props) => {

  const sendNoteEvent = (isNoteOn, note) => {
    const statusByte = isNoteOn ? 0x90 : 0x80;
    const midiMessage = [statusByte, note, 0x40]
    const destination = props.device && props?.connection?.id === 'peak-6837fff9-8481-4046-992a-235da95f01c8' ? props.device : props?.connection?.send ? props.connection : null;

    if (destination) {
      destination.send(midiMessage);
    } 
  }
  const setNote = (note) => {
    sendNoteEvent(true, note)
  };
  const stopNote = (note) => {
    sendNoteEvent(false, note)
  };
  return (
    <div className="keyboard" id="keyboard">
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={72} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={73} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={74} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={75} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={76} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={77} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={78} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={79} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={80} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={81} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={82} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={83} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={84} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={85} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={86} />
      <Key className='blackkey' setNote={setNote}  stopNote={stopNote} note={87} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={88} />
      <Key className='whitekey' setNote={setNote}  stopNote={stopNote} note={89} />
    </div>
  );
};

export default Keyboard;
