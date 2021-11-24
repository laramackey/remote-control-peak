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
      setPeak(await midi());
    };
    initiliasliseMidi();

    setConnection(createConnection());
  }, []);

  return (
    <div>
      <Keyboard device={peak} connection={connection}></Keyboard>
      {connection && (
        <button
          onClick={() => {
            connection.connect();
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default App;
