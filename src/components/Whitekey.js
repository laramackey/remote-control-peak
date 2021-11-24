import React from 'react';
import './Whitekey.css';

class Whitekey extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.setNote(this.props.note)}
        className={this.props.pressed ? `whitekey whitekey_pressed` : `whitekey`}
      >
        {' '}
      </button>
    );
  }
}

export default Whitekey;
