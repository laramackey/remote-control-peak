import React from 'react';
//import woodTexture from './images/woodTexture.jpg';

export const SynthContainer = (props) => {
    return <div style={{width:'70%', borderImage:'url(/woodTexture.jpg) 0 20 0 20 repeat', borderWidth:'0 20px 0 20px', margin:'auto'}}>{props.children}</div>
};
