import React from 'react';
import './Blackkey.css';

class Blackkey extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.setNote(this.props.note)} className="blackkey">
        {' '}
      </button>
    );
  }
}

export default Blackkey;
