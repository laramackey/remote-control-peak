import React from 'react';
//import woodTexture from './images/woodTexture.jpg';

export const SynthContainer = (props) => {
    return <div style={{
        width:'70%',
        borderLeft:'solid 20px #58302c',
        borderRight:'solid 20px #58302c',
        margin:'auto',
        paddingTop:'20px',
        backgroundImage: "linear-gradient(140deg, #0F0F0F, #404040)",
        borderRadius: '5px'
    }}
    >{props.children}
    </div>
};
