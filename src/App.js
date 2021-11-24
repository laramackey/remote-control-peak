import React from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import { midi } from './midi.js';

function App() {
  midi();
  return (
    <div className="App">
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
