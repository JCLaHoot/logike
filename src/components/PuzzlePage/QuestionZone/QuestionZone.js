import React, {Component} from 'react';
import LogicalCondition from './LogicalCondition.js';
import {deepMap} from '../../Shared/TwoDimensionalMethods.js';
import LogicCellDisplay from './LogicCellDisplay';
import trueIcon from '../../../assets/true.png';
import falseIcon from '../../../assets/false.png';


// TODO: make component functional instead of class based
class QuestionZone extends Component {

    constructor({props, puzzle}) {
        super(props);
        this.state = {
            puzzle
        };
    }

    // builds a 2d array of LogicalConditions
    buildLogicalConditions = (puzzle) => {
        return deepMap(puzzle.logic, (puzzleCell, x, y) => {

// converts logicCell values to symbols for the UI
            var visualizeLogicCells = (logicCell, x, y) => {
                switch (logicCell) {
                    case null:
                        return <LogicCellDisplay content={"#fff"}/>;
                    case true:
                        return <LogicCellDisplay content={trueIcon}/>;
                    case false:
                        return <LogicCellDisplay content={falseIcon}/>;
                    default:
                        if (logicCell === "empty") {
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


    render() {
        return (
            <div className="question-zone">
                <div className="wrap-row">
                    {this.buildLogicalConditions(this.state.puzzle)}
                </div>
            </div>
        )
    }

}

export default QuestionZone;
