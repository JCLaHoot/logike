import React, {Component} from 'react';
import LogicalCondition from './LogicalCondition.js';
import Grid, {deepMap}  from '../../Shared/Grid.js';
import LogicCellDisplay from './LogicCellDisplay';
import trueIcon from '../../../assets/true.png';
import falseIcon from '../../../assets/false.png';


class QuestionZone extends Component {

  constructor({props, puzzle}) {
    super(props);
    this.state = {
      puzzle
    };
  }

// ❔✅❌

  // builds a 2d array of LogicalConditions
  buildLogicalConditions = (puzzle) => {
    return deepMap(puzzle.logic, (puzzleCell, x, y) => {

// converts logicCell values to symbols for the UI
    var visualizeLogicCells = (logicCell, x, y) => {
          switch (logicCell) {
            case null:
              return <LogicCellDisplay img={"#fff"}/>;
            case true:
              return <LogicCellDisplay img={trueIcon}/>;
            case false:
              return <LogicCellDisplay img={falseIcon}/>;
            default:
              if(logicCell === "empty") {
                return null;
              }
              else { //go through all the selectors until you find the one that matches, and get its image
                var selectors = puzzle.entities.fetchAllPossibleSelectors(puzzle.entities);
                var img;
                selectors.forEach((selector) => {
                  if(selector.name === logicCell) {
                    img = selector.img;
                  }
                })
                return <LogicCellDisplay img={img}/>;
              }
          }

        }
// returns the UI contents of each puzzleCell (which contails logicCells)
    return (<LogicalCondition
              selectorImg={puzzleCell.selectorImg}
              selectorName={puzzleCell.selectorName}
              cells={deepMap(puzzleCell.logicCells, visualizeLogicCells)}
              />)
    });
  }


  render() {
    return (
        <div className="question-zone">
          <Grid cells={this.buildLogicalConditions(this.state.puzzle)}/>
        </div>
    )
  }

};

export default QuestionZone;
