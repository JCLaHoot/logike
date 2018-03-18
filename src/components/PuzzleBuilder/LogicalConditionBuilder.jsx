import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';
import {createTwoDimensionalArray, deepMap, getGridX, getGridY} from '../Shared/TwoDimensionalMethods';
import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'

import SelectorPicker from './SelectorPicker';
import LogicToolPicker from './LogicToolPicker';
import {LogicCellStates} from "../Shared/Constants";

import LogicCellDisplay from '../Shared/LogicCellDisplay';


class LogicalConditionBuilder extends Component {


    constructor({props, puzzleSize, selectedEntityList, sendLogicalConditionsToPuzzleBuilder}) {
        super(props);

        this.state = {
            logicalConditionSize: puzzleSize,
            chosenSelector: null,
            chosenInnerSelector: selectedEntityList.list[0],
            selectedLogicTool: undefined,
            logicStemCells: null, //used to temporarily store logic cells that are being built
            newLogicalConditions: [] // stores the logical conditions being created. Logical conditions are pushed into it as they're created
        }
    }

    componentWillMount() {
        this.updateLogicStemCellsSize(this.props.puzzleSize);
        console.log("componentWillMount, puzzle size: ",this.props.puzzleSize);
        // this.setState({logicalConditionSize: this.props.puzzleSize});
        // console.log("logical condition size: ", this.state.logicalConditionSize);

    }



    componentWillReceiveProps(nextProps) {
        if(nextProps.puzzleSize !== this.props.puzzleSize) {
            this.updateLogicStemCellsSize(nextProps.puzzleSize);
            this.setState({logicalConditionSize: nextProps.puzzleSize});
        }

    }



    // applies the currently selected tool to the selected logic cell, and updates the state
    // OPTIMIZE: add to renderLogicCells?
    applyTool = (x, y) => {
        var logicStemCells = this.state.logicStemCells;
        logicStemCells[y][x] = this.state.selectedLogicTool;
        this.setState({logicStemCells: logicStemCells});
    }

    // converts logicCell values to symbols and renders them. also primes the applyTool callback to give it the x,y coordinates to write to
    renderLogicCells = (logicCell, x, y) => {

        // wraps the function so it doesn't run instantly
        const _applyTool = () => {
            this.applyTool(x, y);
        };

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
            case LogicCellStates.EMPTY:
                return <LogicCellDisplay content={null}
                                         location={{x: x, y: y}}
                                         onClick={_applyTool}/>;
            default:
                //goes through all the selectors until it finds one that matches, and get its image
                let selectors = fetchAllPossibleSelectors(this.props.selectedEntityList);
                let img;
                //OPTIMIZE: exit loop if the selector is found. (requires UIDs)
                selectors.forEach((selector) => {
                    if (selector === logicCell) {
                        img = selector.img;
                    }
                });
                return <LogicCellDisplay content={img}
                                         location={{x: x, y: y}}
                                         onClick={_applyTool}/>;

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


    // chooses the active tool that will populate the logic cells of the new logical condition.
    chooseTool = (tool) => {
        this.setState({selectedLogicTool: tool});
        console.log("selected logic tool is: ", tool);
    };

    // chooses the active innerSelector that will populate the logic cells of the new logical condition.
    //TODO: make it impossible to use more than one inner selector, for now...
    chooseInnerSelector = (innerSelector) => {
        console.log("inner selector is: ", innerSelector);
        this.setState({chosenInnerSelector: innerSelector});
    };


    // cleans the data for the logical conditions and exports it in the same format that it will be read in
    exportLogicalCondition = () => {
        let cleanStemCells = this.state.logicStemCells;

        // strings are extracted from selectors in StemCells.
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

        let newLogicalConditions = this.state.newLogicalConditions;
        newLogicalConditions.push(logicalCondition);

        this.setState({
            newLogicalConditions : newLogicalConditions,
            chosenSelector: null,
            logicStemCells: createTwoDimensionalArray(this.props.puzzleSize.x, this.props.puzzleSize.y, null)
        });

        this.props.sendLogicalConditionsToPuzzleBuilder(newLogicalConditions);
    };


    // Changes the x value (width) of the logicStemCells based on the slider position
    updateX = (event) => {
        let xVal = parseInt(event.target.value, 10);
        let size = {x: xVal, y: this.state.logicalConditionSize.y}
        this.setState({logicalConditionSize: size});
        this.updateLogicStemCellsSize(size);
    };

    // Changes the y value (height) of the logicStemCells based on the slider position
    updateY = (event) => {
        let yVal = parseInt(event.target.value, 10);
        let size = {x: this.state.logicalConditionSize.x, y: yVal}
        this.setState({logicalConditionSize: size});
        this.updateLogicStemCellsSize(size);
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
                    <div className="horizontal-slider-wrapper">
                        <input type="range"
                               min="1"
                               max={this.props.puzzleSize.x}
                               defaultValue={this.props.puzzleSize.x}
                               className="slider horizontal-slider"
                               onInput={this.updateX}
                               style={{width: `${this.props.puzzleSize.x <= 1
                                       ?
                                       0
                                       :
                                       3*(this.props.puzzleSize.x - 1)+1.4}em`}}
                        />
                    </div>

                    <div className="float-wrapper">
                        <div className="vertical-slider-wrapper"
                             style={{height: `${this.props.puzzleSize.y <= 1
                                     ?
                                     0
                                     :
                                     2.95*(this.props.puzzleSize.y - 1)+1.45}em`}}
                        >
                            <input type="range"
                                   min="1"
                                   max={this.props.puzzleSize.y}
                                   defaultValue={this.props.puzzleSize.y}
                                   className="slider vertical-slider"
                                   onInput={this.updateY}
                                   style={{width: `${this.props.puzzleSize.y <= 1
                                           ?
                                           0
                                           :
                                           2.95*(this.props.puzzleSize.y - 1)+1.45}em`}}
                            />
                        </div>
                        <div>
                            <FlexGrid cells={this.renderLogicStemCells(this.state.logicStemCells)}/>
                        </div>
                    </div>
                    <button disabled={this.state.chosenSelector ? false : true}
                            onClick={this.exportLogicalCondition}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>

                </div>

            </div>
        )
    }


}

export default LogicalConditionBuilder;
