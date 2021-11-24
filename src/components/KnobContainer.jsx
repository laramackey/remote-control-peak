import React from "react"
import Knob from "./Knob"

export const KnobContainer = (props) => {
    return <div style= {{display:"flex", justifyContent:"center", padding:'20px', borderTop:'solid 5px #00a4e1'}}>
        <Knob>Cutoff</Knob>
        <Knob>Resonance</Knob>
        <Knob>Drive</Knob>
    </div>;
}