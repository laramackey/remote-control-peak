import React from 'react';
import './Keyboard.css';
import Whitekey from './Whitekey.js';
import Blackkey from './Blackkey.js';

class Keyboard extends React.Component {

    render () {
        return (
            <div className="keyboard">
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Blackkey />
                <Whitekey />
                <Whitekey />
            </div>
        );
    }
}

export default Keyboard;
