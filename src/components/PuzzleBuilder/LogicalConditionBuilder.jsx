import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';
import {createTwoDimensionalArray, deepMap, getGridX, getGridY} from '../Shared/TwoDimensionalMethods';
import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'

import SelectorPicker from './SelectorPicker';
import LogicToolPicker from './LogicToolPicker';
import {LogicCellStates} from "../Shared/Constants";

import LogicCellDisplay from '../Shared/LogicCellDisplay';


class LogicalConditionBuilder extends Component {


    constructor({props, puzzleSize, selectedEntityList}) {
        super(props);
        this.state = {
            puzzleSize: puzzleSize,
            selectedEntityList: selectedEntityList,
            chosenSelector: null,
            selectedLogicTool: undefined,
            logicStemCells: null
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
                        if (selector.name === logicCell) {
                            img = selector.img;
                        }
                    });
                    return <LogicCellDisplay content={img}
                                             location={{x: x, y: y}}
                                             onClick={_applyTool}/>;
                }
        }

    };



    // Sounds like a fucked up function name, but it makes sense since this creates the cells
    // that can be customized and become full fledged Logic Cells afterwards.
    createLogicStemCells = () => {

        if(this.state.logicStemCells === null) {
            let cells = createTwoDimensionalArray(this.props.puzzleSize.x, this.props.puzzleSize.y, null);
            this.setState({logicStemCells : cells});
            return
        }

        if( getGridX(this.state.logicStemCells) !== this.props.puzzleSize.x
            ||
            getGridY(this.state.logicStemCells) !== this.props.puzzleSize.y ) {
            let cells = createTwoDimensionalArray(this.props.puzzleSize.x, this.props.puzzleSize.y, null);
            // this.setState({logicStemCells : cells});
            return
        }

        return deepMap(this.state.logicStemCells, this.renderLogicCells);
    };


    // chooses the selector for the new logical condition.
    chooseSelector = (selector) => {
        this.setState({chosenSelector: selector});
    }


    // chooses the selector for the new logical condition.
    chooseTool = (tool) => {
        this.setState({selectedLogicTool: tool});
        console.log(tool);
    }


    render() {
        return (
            <div className="logical-condition-builder">
                <h4>Create Logical Conditions</h4>
                <div className="wrap-row logical-condition-list">
                    {/*{renderLogicalCondition(this.state.puzzle.logic, this.state.puzzle.entities)}*/}
                </div>
                <SelectorPicker entities={this.props.selectedEntityList}
                                chooseSelector={this.chooseSelector}
                                chosenSelector={this.state.chosenSelector}/>
                <LogicToolPicker entities={this.props.selectedEntityList}
                                 chooseTool={this.chooseTool}
                                 selectedLogicTool={this.state.selectedLogicTool}/>
                <div className="logic-stem-cell-container">
                    <FlexGrid cells={this.createLogicStemCells()}/>
                </div>
                <button><i className="fa fa-plus" aria-hidden="true">
                </i></button>

            </div>
        )
    }


}

export default LogicalConditionBuilder;
