import React from 'react';

import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'
import FlexGrid from '../Shared/FlexGrid';
import {deepMap} from "../Shared/TwoDimensionalMethods";
import {LogicCellStates} from '../Shared/Constants';
import LogicCellDisplay from '../Shared/LogicCellDisplay';



const LogicToolPicker = ({selectedLogicTool, chooseTool, entities}) => {

    if(!entities) {
        return null;
    }

    const tools = [[false, LogicCellStates.EMPTY, null, true, "blue"]];


    // converts logicCell values to symbols and renders them.
    const renderLogicCells = (logicCell) => {

        //wraps the function so it doesn't run instantly
        const _chooseTool = () => {
            chooseTool(logicCell);
        }

        let isSelected = selectedLogicTool == logicCell;

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
                var selectors = fetchAllPossibleSelectors(entities);
                var img;
                selectors.forEach((selector) => {
                    if (selector.name === logicCell) {
                        img = selector.img;
                    }
                });


                return <LogicCellDisplay content={img}
                                         onClick={_chooseTool}
                                         className={isSelected ? "selected" : ""}/>;
            }
    }

};


    return (
        <div className="logic-tools">
            <FlexGrid cells={deepMap(tools,renderLogicCells)}/>
        </div>

    )

};

export default LogicToolPicker;
