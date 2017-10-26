import React, {Component} from "react";
import LogicalCondition from './LogicalCondition.js';
import Grid, {twoDMap} from './Grid.js';


class QuestionZone extends Component {

  constructor({props, puzzle}) {
  super(props);
  this.state = {
    puzzle: puzzle
  }
}

// ❔✅❌

// builds a 2d array of LogicalConditions
buildLogicalConditions = (puzzle) => {
  return twoDMap(puzzle, (puzzleCell, x) => {

// converts logicCell values to symbols for the UI
    var visualizeLogicCells = (logicCell, x) => {
          switch (logicCell) {
            case null:
              return null;
            case true:
              return "✅";
            case false:
              return "❌";
            default:
              return "";
          }
        }
        // THE PROBLEM ⬇️
        // console.log(x, y); //it says y is undefined, even though it's defined in the scope of twoDMap

    return (<LogicalCondition
              selectorImg={puzzleCell.selectorImg}
              selectorName={puzzleCell.selectorName}
              cells={twoDMap(puzzleCell.logicCells, visualizeLogicCells)}
              />)
  });
}



render() {
  return (
    <div>
This is a question zone ⬇️
      <Grid cells={this.buildLogicalConditions(this.state.puzzle)}/>
This is a question zone ⬆️
    </div>
  )
}

};

export default QuestionZone;
