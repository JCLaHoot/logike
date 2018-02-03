import React from 'react';
import {deepMap} from "./TwoDimensionalMethods";
import {LogicCellStates} from "./Constants";
import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'


import LogicCellDisplay from './LogicCellDisplay';
import LogicalCondition from './LogicalCondition';


//TODO: rename different components to have consistent naming scheme.
// converts logicCell values to symbols and renders them.
export const renderLogicCells = (logicCell, entities) => {
    switch (logicCell) {
        case null:
            return <LogicCellDisplay content={LogicCellStates.WHITE}/>;
        case true:
            return <LogicCellDisplay content={"true"}/>;
        case false:
            return <LogicCellDisplay content={"false"}/>;
        default:
            if (logicCell === LogicCellStates.EMPTY) {
                return <LogicCellDisplay content={null}/>;
            }
            else { //go through all the selectors until you find the one that matches, and get its image
                var selectors = fetchAllPossibleSelectors(entities);
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

     //wraps renderLogicCells() so that it's easier to pass eColoredShapes and makes it more exportable
     const _renderLogicCells = (logicCell) => {
         return renderLogicCells(logicCell, entities);
     }

    return puzzleLogic.map( (puzzleCell, x, y) => {
        let img = puzzleCell.selectorImg;
        img = '/assets/' + img + '.png';


// returns the UI contents of each puzzleCell (which contains logicCells)
        return (<LogicalCondition
            key={`${x}${y}`}
            selectorImg={img}
            selectorName={puzzleCell.selectorName}
            cells={deepMap(puzzleCell.logicCells, _renderLogicCells)}
        />)
    });
};

export default renderLogicalCondition;