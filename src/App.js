import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { midi } from './midi.js';

function App() {
  const [peak, setPeak] = useState();
  useEffect(() => {
    const initiliasliseMidi = async () => {
      setPeak(await midi());
    };
    initiliasliseMidi();
  }, []);

  return peak ? (
    <div className="App">
      <Keyboard device={peak}></Keyboard>
    </div>
  ) : (
    <div></div>
  );
}

export default App;
