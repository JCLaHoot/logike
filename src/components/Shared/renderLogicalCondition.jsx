import React from 'react';
import {deepMap} from "./TwoDimensionalMethods";
import {LogicCellStates} from "./Constants";

import LogicCellDisplay from './LogicCellDisplay';
import LogicalCondition from './LogicalCondition';

import trueIcon from '../../assets/true.png';
import falseIcon from '../../assets/false.png';

//TODO: rename different components to have consistent naming scheme.
// builds a 2d array of LogicalConditions

 const renderLogicalCondition = (puzzle) => {
    return deepMap(puzzle.logic, (puzzleCell, x, y) => {

// converts logicCell values to symbols for the UI
//        OPTIMIZE: put this somewhere where it isn't recreated too many times
        var visualizeLogicCells = (logicCell, x, y) => {
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
                        var selectors = puzzle.entities.fetchAllPossibleSelectors(puzzle.entities);
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
// returns the UI contents of each puzzleCell (which contains logicCells)
        return (<LogicalCondition
            key={`${x}${y}`}
            selectorImg={puzzleCell.selectorImg}
            selectorName={puzzleCell.selectorName}
            cells={deepMap(puzzleCell.logicCells, visualizeLogicCells)}
        />)
    });
};

export default renderLogicalCondition;