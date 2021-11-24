import React from "react"
import Knob from "./Knob"

export const KnobContainer = (props) => {
    return <div style= {{display:"flex", justifyContent:"center", padding:'20px', borderTop:'solid 5px #00a4e1'}}>
        <Knob device={props.device} connection={props.connection} midiDataOne={29}>Cutoff</Knob>
        <Knob device={props.device} connection={props.connection} midiDataOne={79}>Resonance</Knob>
        <Knob device={props.device} connection={props.connection} midiDataOne={80}>Drive</Knob>
    </div>;
}