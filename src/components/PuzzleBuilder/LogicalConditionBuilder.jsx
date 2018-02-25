import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';
import {createTwoDimensionalArray, deepForEach, deepMap, getGridX, getGridY} from '../Shared/TwoDimensionalMethods';
import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'

import SelectorPicker from './SelectorPicker';
import LogicToolPicker from './LogicToolPicker';
import {LogicCellStates} from "../Shared/Constants";

import LogicCellDisplay from '../Shared/LogicCellDisplay';

import renderLogicalCondition from '../Shared/renderLogicalCondition'

class LogicalConditionBuilder extends Component {


    constructor({props, puzzleSize, selectedEntityList}) {
        super(props);

        this.state = {
            logicalConditionSize: puzzleSize,
            chosenSelector: null,
            chosenInnerSelector: selectedEntityList.list[0],
            selectedLogicTool: undefined,
            logicStemCells: null,
            newPuzzle: []
        }
    }

    componentWillMount() {
        this.updateLogicStemCellsSize(this.props.puzzleSize);
        console.log("componentwillmount");
    }


    componentDidUpdate(prevProps) {
        if(prevProps.puzzleSize !== this.props.puzzleSize) {
            console.log("componentDidUpdate");
            this.updateLogicStemCellsSize(this.props.puzzleSize);
            console.log("puzz size: ", this.props.puzzleSize);
            console.log("logical condition size: ", this.state.logicalConditionSize);
        }

    }



    applyTool = (x, y) => {
        var logicStemCells = this.state.logicStemCells;
        logicStemCells[y][x] = this.state.selectedLogicTool;
        this.setState({logicStemCells: logicStemCells});
    }

    // converts logicCell values to symbols and renders them.
    renderLogicCells = (logicCell, x, y) => {

        // wraps the function so it doesn't run instantly
        const _applyTool = () => {
            this.applyTool(x, y);
        }

        switch (logicCell) {
            case null:
                return <LogicCellDisplay content={LogicCellStates.WHITE }
                                         location={{x: x, y: y}}
                                         onClick={_applyTool}/>;
            case true:
                return <LogicCellDisplay content={"true"}
                                         location={{x: x, y: y}}
                                         onClick={_applyTool}/>;
            case false:
                return <LogicCellDisplay content={"false"}
                                         location={{x: x, y: y}}
                                         onClick={_applyTool}/>;
            default:
                if (logicCell === LogicCellStates.EMPTY) {
                    return <LogicCellDisplay content={null}
                                             location={{x: x, y: y}}
                                             onClick={_applyTool}/>;
                }
                else { //go through all the selectors until you find the one that matches, and get its image
                    var selectors = fetchAllPossibleSelectors(this.props.selectedEntityList);
                    var img;
                    selectors.forEach((selector) => {
                        if (selector === logicCell) {
                            img = selector.img;
                        }
                    });
                    return <LogicCellDisplay content={img}
                                             location={{x: x, y: y}}
                                             onClick={_applyTool}/>;
                }
        }

    };



    // Sounds like a fucked up function name, but it makes sense since this updates the cells
    // that can be customized and become full fledged Logic Cells afterwards.
    updateLogicStemCellsSize = (puzzleSize) => {
        if(this.state.logicStemCells === null) {
            let cells = createTwoDimensionalArray(puzzleSize.x, puzzleSize.y, null);
            this.setState({logicStemCells : cells});
            return
        }

        if( getGridX(this.state.logicStemCells) !== puzzleSize.x
            ||
            getGridY(this.state.logicStemCells) !== puzzleSize.y ) {
            let cells = createTwoDimensionalArray(puzzleSize.x, puzzleSize.y, null);
            this.setState({logicStemCells : cells});
        }
    };



    renderLogicStemCells = (stemCells) => {
        return deepMap(stemCells, this.renderLogicCells);
    };


    // chooses the selector for the new logical condition.
    chooseSelector = (selector) => {
        this.setState({chosenSelector: selector});
    };


    // chooses the selector for the new logical condition.
    chooseTool = (tool) => {
        this.setState({selectedLogicTool: tool});
        console.log("selected logic tool is: ", tool);
    };

    chooseInnerSelector = (innerSelector) => {
        console.log("inner selector is: ", innerSelector);
        this.setState({chosenInnerSelector: innerSelector});
    };

    exportLogicalCondition = () => {
        let cleanStemCells = this.state.logicStemCells;

        cleanStemCells = deepMap(cleanStemCells, (cell) => {
            if(cell !=  null && typeof cell === "object"){
                return cell.name;
            }
            return cell;
        });

        let logicalCondition = {
            logicCells: cleanStemCells,
            selectorImg: this.state.chosenSelector.img,
            selectorName: this.state.chosenSelector.name
        };

        let newPuzzle = this.state.newPuzzle;
        newPuzzle.push(logicalCondition);

        this.setState({
            newPuzzle : newPuzzle,
            chosenSelector: null,
            logicStemCells: createTwoDimensionalArray(this.props.puzzleSize.x, this.props.puzzleSize.y, null)
        });

    };


    updateX = (event) => {
        let xVal = parseInt(event.target.value, 10);
        let logicalConditionSize = this.state.logicalConditionSize;
        logicalConditionSize.x = xVal;
        this.setState({logicalConditionSize: logicalConditionSize});
        this.updateLogicStemCellsSize(this.state.logicalConditionSize);
    };

    updateY = (event) => {
        let yVal = parseInt(event.target.value, 10);
        let logicalConditionSize = this.state.logicalConditionSize;
        logicalConditionSize.y = yVal;
        this.setState({logicalConditionSize: logicalConditionSize});
        this.updateLogicStemCellsSize(this.state.logicalConditionSize);
    };


    render() {
        return (
            <div className="logical-condition-builder">
                <h4>Create Logical Conditions</h4>
                <SelectorPicker entities={this.props.selectedEntityList}
                                chooseSelector={this.chooseSelector}
                                chosenSelector={this.state.chosenSelector}/>
                <LogicToolPicker entities={this.props.selectedEntityList}
                                 chooseTool={this.chooseTool}
                                 selectedLogicTool={this.state.selectedLogicTool}
                                 chooseInnerSelector={this.chooseInnerSelector}
                                 chosenInnerSelector={this.state.chosenInnerSelector}/>
                <div className="logic-stem-cell-container">
                    <input type="range" min="1" defaultValue={this.props.puzzleSize.x}  max={this.props.puzzleSize.x} className="slider horizontal-slider"
                           onInput={this.updateX}/>
                    <div className="float-wrapper">
                        <div className="vertical-slider-wrapper">
                            <input type="range" min="1" defaultValue={this.props.puzzleSize.y}  max={this.props.puzzleSize.y} className="slider vertical-slider"
                                   onInput={this.updateY}/>
                        </div>
                        <div>
                            <FlexGrid cells={this.renderLogicStemCells(this.state.logicStemCells)}/>
                        </div>
                    </div>
                </div>
                <button disabled={this.state.chosenSelector ? false : true} onClick={this.exportLogicalCondition}><i className="fa fa-plus" aria-hidden="true">
                </i></button>
                <div className="wrap-row logical-condition-list">
                    {renderLogicalCondition(this.state.newPuzzle, this.props.selectedEntityList)}
                </div>

            </div>
        )
    }


}

export default LogicalConditionBuilder;
