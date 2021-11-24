import React, {useState, useEffect} from 'react';
import './App.css';
import Keyboard from './components/Keyboard';

import {createConnection} from './Connection';
import { KnobContainer } from  './components/KnobContainer';
import { SynthContainer } from './components/SynthContainer';
import {connectToPeak, connectToInputs} from './midi.js';

function App() {
  const [peak, setPeak] = useState();
  
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const initiliasliseMidi = async () => {
      const peak = await connectToPeak();
      setPeak(peak);
      const onMidiReceived = (data) => {
        if (peak) {
          peak.send(data);
        }
      };
      const connection = createConnection(onMidiReceived);
      setConnection(connection);

      await connectToInputs((message) => {
        if (connection?.send) {
          connection.send(message);
        }
      });
    };
    initiliasliseMidi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <SynthContainer device={peak} connection={connection}>
        <span style={{width:'100%', display:'block', float:'left'}}><img src="novation-logo.png" width='130px' style={{float:"left", paddingBottom:"10px", paddingLeft:"10px"}}></img></span>
        <KnobContainer device={peak} connection={connection}></KnobContainer>
        <Keyboard device={peak} connection={connection}></Keyboard>
      </SynthContainer>
    </div>
  );
}

export default App;
