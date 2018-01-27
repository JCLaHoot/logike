import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';


const defaultSliderValue = 3;

class ChoosePuzzleSize extends Component {


    constructor({props, selectPuzzleSize}) {
        super(props);
        this.state = {
            x: defaultSliderValue,
            y: defaultSliderValue,
            selectPuzzleSize: selectPuzzleSize
        }
    }


    updateX = (event) => {
        this.setState({x: event.target.value});
        this.state.selectPuzzleSize(this.state.x, this.state.y);
    };

    updateY = (event) => {
        this.setState({y: event.target.value});
        this.state.selectPuzzleSize(this.state.x, this.state.y);
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
                <input type="range" min="1" value={this.state.x} max="5" className="slider horizontal-slider"
                       onChange={this.updateX}/>
                <div className="float-wrapper">
                    <div className="vertical-slider-wrapper">
                        <input type="range" min="1" value={this.state.y} max="5" className="slider vertical-slider"
                               onChange={this.updateY}/>
                    </div>
                    <div className="puzzle-size-preview">
                        <FlexGrid cells={this.getGridCells()}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default ChoosePuzzleSize;
