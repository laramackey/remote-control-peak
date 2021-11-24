import React from 'react';
import './Whitekey.css';

class Whitekey extends React.Component {

    render () {
        return <button className={this.props.pressed ? `whitekey whitekey_pressed` : `whitekey`  } >  </button>
    }
}

export default Whitekey;