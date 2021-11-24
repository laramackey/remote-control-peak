import * as React from 'react';
import JqxKnob from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';

class Knob extends React.PureComponent {
    constructor(props) {
        super(props);
        const styles = {
            fill: {
                color: '#fefefe',
                gradientStops: [[0, 1], [50, 0.9], [100, 1]],
                gradientType: 'linear'
            },
            stroke: '#dfe3e9', strokeWidth: 3,
            backgroundColor: '#000000',
        };
        const marks = {
            colorProgress: '#2db2e4', colorRemaining: '#333',
            majorInterval: 10, majorSize: '2%', minorInterval: 10,
            offset: '75%', size: '2%', thickness: 2, type: 'circle'
        };
        const progressBar = {
            offset: '0%', size: '70%'
        };
        const pointer = {
            offset: '0%', size: '60%',
            style: { fill: '#00a4e1', stroke: '#00a4e1' },
            thickness: 4, type: 'line'
        };
        this.state = {
            marks,
            pointer,
            progressBar,
            styles
        }
    }
    render() {
        const sendFilterEvent = (value) => {
            const midiMessage = [176, 29, value]
            const destination = this.props.device && this.props?.connection?.id === 'peak' ? this.props.device : this.props?.connection?.send ? this.props.connection : null;
            if (destination) {
              destination.send(midiMessage);
            } 
          }
        return (
            <div style={{width: '200px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <JqxKnob
                    style={{margin:'auto'}}
                    value={60} min={0} max={127}
                    startAngle={120} endAngle={420} styles={this.state.styles}
                    snapToStep={true} rotation={'clockwise'}
                    width={'150px'} height={'150px'}
                    marks={this.state.marks}
                    progressBar={this.state.progressBar} pointer={this.state.pointer}
                    onChange= {(knob) => sendFilterEvent(knob.args.value)}
                />
                <span style={{color: '#FFFFFF', width:'100%'}}>{this.props.children}</span>
            </div>
        );
    }
}
export default Knob;