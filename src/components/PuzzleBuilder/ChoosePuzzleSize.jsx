import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';


class ChoosePuzzleSize extends Component {


    constructor({props, selectPuzzleSize, defaultPuzzleSize}) {
        super(props);
        this.state = {
            x: defaultPuzzleSize,
            y: defaultPuzzleSize,
            selectPuzzleSize: selectPuzzleSize
        }
    }


    updateX = (event) => {
        let xVal = parseInt(event.target.value, 10);
        this.setState({x: xVal});
        this.state.selectPuzzleSize(xVal, this.state.y);
    };

    updateY = (event) => {
        let yVal = parseInt(event.target.value, 10);
        this.setState({y: yVal});
        this.state.selectPuzzleSize(this.state.x, yVal);
    };

    getGridCells = () => {
        var cells = [];
        for (var y = 0; y < this.state.y; y++) {
            var row = [];
            for (var x = 0; x < this.state.x; x++) {
                row.push(null); //nothing in grid. grid size is adjusted via CSS
            }
            cells.push(row);
        }
        return cells;
    };


    render() {
        return (
            <div className="choose-puzzle-size">
                <h4>Choose the puzzle size</h4>
                <div className="puzzle-size-pickers">
                    <input type="range" min="1" defaultValue={this.props.defaultPuzzleSize}  max="5" className="slider horizontal-slider"
                           onInput={this.updateX}/>
                    <div className="float-wrapper">
                        <div className="vertical-slider-wrapper">
                            <input type="range" min="1" defaultValue={this.props.defaultPuzzleSize}  max="5" className="slider vertical-slider"
                                   onInput={this.updateY}/>
                        </div>
                        <div className="puzzle-size-preview">
                            <FlexGrid cells={this.getGridCells()}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}

export default ChoosePuzzleSize;
