import React, {Component} from 'react';

import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'
import FlexGrid from '../Shared/FlexGrid';
import {deepMap} from "../Shared/TwoDimensionalMethods";
import {LogicCellStates} from '../Shared/Constants';
import LogicCellDisplay from '../Shared/LogicCellDisplay';
import SelectorPicker from './SelectorPicker';



class LogicToolPicker extends Component {

    constructor(props, {selectedLogicTool, chooseTool, entities}) {
        super(props);
        this.state = {
            popupOpen: false
        }
    }


    // = ({selectedLogicTool, chooseTool, entities}) =>
    //


     tools = [[false, LogicCellStates.EMPTY, null, true, this.props.entities.list[0].name]];

     // popupOpen = false;



    // converts logicCell values to symbols and renders them.
    renderLogicCells = (logicCell) => {

        //wraps the function so it doesn't run instantly
        const _chooseTool = () => {
            this.props.chooseTool(logicCell);
        };

        //wraps the function so it doesn't run instantly
        const _chooseInnerSelector = () => {
            this.setState({
                popupOpen: true
            });
            this.props.chooseTool(logicCell);
        };

        let isSelected = this.props.selectedLogicTool === logicCell;

    switch (logicCell) {
        case null:
            return <LogicCellDisplay content={LogicCellStates.WHITE}
                                     onClick={_chooseTool}
                                     className={isSelected ? "selected" : ""}/>;
        case true:
            return <LogicCellDisplay content={"true"}
                                     onClick={_chooseTool}
                                     className={isSelected ? "selected" : ""}/>;
        case false:
            return <LogicCellDisplay content={"false"}
                                     onClick={_chooseTool}
                                     className={isSelected ? "selected" : ""}/>;
        default:
            if (logicCell === LogicCellStates.EMPTY) {
                return <LogicCellDisplay content={null}
                                         onClick={_chooseTool}
                                         className={isSelected ? "selected" : ""}/>;
            }
            else { //go through all the selectors until you find the one that matches, and get its image
                var selectors = fetchAllPossibleSelectors(this.props.entities);
                var img;
                selectors.forEach((selector) => {
                    if (selector.name === logicCell) {
                        img = selector.img;
                    }
                });


                return (<LogicCellDisplay content={img}
                                         onClick={_chooseInnerSelector}
                                         className={isSelected ? "selected" : ""}/>);
            }
    }

};

    render() {
        if(!this.props.entities) {
            return null;
        }

        return (
            <div className="logic-tools">
                {this.state.popupOpen
                    ?
                    <SelectorPicker entities={this.props.entities} />
                    :
                    null}
                <FlexGrid cells={deepMap(this.tools, this.renderLogicCells)}/>
            </div>

        )
    }



};

export default LogicToolPicker;
