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
            backgroundColor: '#000000'
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
        return (
            <div style={{width: '150px'}}>
                <JqxKnob
                    value={60} min={0} max={127}
                    startAngle={120} endAngle={420} styles={this.state.styles}
                    snapToStep={true} rotation={'clockwise'}
                    width={'150px'} height={'150px'}
                    marks={this.state.marks}
                    progressBar={this.state.progressBar} pointer={this.state.pointer}
                />
                <span style={{color: '#FFFFFF'}}>Cutoff</span>
            </div>
        );
    }
}
export default Knob;