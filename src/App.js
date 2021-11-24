import React, {useState, useEffect} from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import {createConnection} from './Connection';
import {midi} from './midi.js';

function App() {
  const [peak, setPeak] = useState();

  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const initiliasliseMidi = async () => {
      const peak = await midi();
      setPeak(peak);
      const onMidiReceived = (data) => {
        console.log(`Peak ${peak}`);
        console.log(data);
        if (peak) {
          peak.send(data);
        }
      };
      setConnection(createConnection(onMidiReceived));
    };
    initiliasliseMidi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Keyboard device={peak} connection={connection}></Keyboard>
    </div>
  );
}

export default App;
