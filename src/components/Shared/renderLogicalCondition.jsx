import React from 'react';
import {deepMap} from "./TwoDimensionalMethods";
import {LogicCellStates} from "./Constants";

import LogicCellDisplay from './LogicCellDisplay';
import LogicalCondition from './LogicalCondition';

import trueIcon from '../../assets/true.png';
import falseIcon from '../../assets/false.png';


//TODO: rename different components to have consistent naming scheme.
// converts logicCell values to symbols and renders them.
export const renderLogicCells = (logicCell, entities) => {
    switch (logicCell) {
        case null:
            return <LogicCellDisplay content={LogicCellStates.WHITE}/>;
        case true:
            return <LogicCellDisplay content={trueIcon}/>;
        case false:
            return <LogicCellDisplay content={falseIcon}/>;
        default:
            if (logicCell === LogicCellStates.EMPTY) {
                return <LogicCellDisplay content={null}/>;
            }
            else { //go through all the selectors until you find the one that matches, and get its image
                var selectors = entities.fetchAllPossibleSelectors(entities);
                var img;
                selectors.forEach((selector) => {
                    if (selector.name === logicCell) {
                        img = selector.img;
                    }
                });
                return <LogicCellDisplay content={img}/>;
            }
    }

};


//TODO: recreate using a regular array instead of a 2d array (no need to display logical conditions in a grid formation)
// builds a 2d array of LogicalConditions
 const renderLogicalCondition = (puzzleLogic, entities) => {

     //wraps renderLogicCells() so that it's easier to pass entities and makes it more exportable
     const _renderLogicCells = (logicCell) => {
         return renderLogicCells(logicCell, entities);
     }

    return deepMap(puzzleLogic, (puzzleCell, x, y) => {

// returns the UI contents of each puzzleCell (which contains logicCells)
        return (<LogicalCondition
            key={`${x}${y}`}
            selectorImg={puzzleCell.selectorImg}
            selectorName={puzzleCell.selectorName}
            cells={deepMap(puzzleCell.logicCells, _renderLogicCells)}
        />)
    });
};

export default renderLogicalCondition;