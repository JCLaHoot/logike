import React, {Component} from "react";
import LogicalCondition from './LogicalCondition.js';
import Grid from './Grid.js';


// This is useless. ignore it. I use it to copypasta nonsense into the matrix
// cells ={[["some data", "a cat", <h1>an h1</h1>],
//         ["🍇🍍🍉🍐🍉", "🦊🐭🦊🐭🐰🐭", "kinder surprise"],
//         [323, 4324, "fsdfgdsfsadf"]]}

class QuestionZone extends Component {


  constructor({props, puzzle}) {
  super(props);
  this.state = {
    puzzle: puzzle
  }
}

// ❔✅❌

// builds an array of arrays of LogicalConditions
buildLogicalConditions = (puzzle) => {
  var cells = [];
  var puzzleIndex = 0;
    for (var y = 0; y < 3; y++) {
      var row = [];
        for (var x = 0; x < 3; x++) {
          row.push(<LogicalCondition
                    selectorImg={puzzle[puzzleIndex].selectorImg}
                    selectorName={puzzle[puzzleIndex].selectorName}
                    cells={puzzle[puzzleIndex].logicCells}
                    />);
          puzzleIndex++; //iterates through shapes
        }
      cells.push(row);
    }
  return cells;
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
