import React, {Component} from "react";

import Grid, {twoDMap} from './Grid.js';
import EntityBin from './EntityBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle, entities}) {
  super(props);
  this.state = {
    puzzle: puzzle,
    entities: entities,
    userAns: [[null, null, null],
              [null, null, null],
              [null, null, null]] // TODO: generate programatically based on puzzle size
  }
}


validate = () => {
  console.log("validating...");
  // 1. check each logicCell in puzzle
  // 2. if selector is a property of entity
  //    check whether the location of the entity is "true" or null
  //    in the logicCell
  // 3. if selector isn't a property of entity
  //    check whethere the location of the entity is "false" or an entity property
  //    that matches the entity.
  // 4. return true for the cell if checks are passed
  // TODO: fix my twoDMap function to simplify this code
  var ans;
  ans = this.state.userAns.map((row, y) => {
    return row.map((cell, x) => {
      if( //checks all conditions for cell
        this.state.puzzle.some((puzzleRow) =>{
          return puzzleRow.some((puzzleCell) => {
            // checks whether the selector matches the input or not.
            var matchesSelector = cell == puzzleCell.selectorName;
            // TODO: add condition to check for coordiantes of irregular grids
            if(matchesSelector) {
              // at the position of input, either the selector is supposed to be there, or is allowed to
              if (puzzleCell.logicCells[y][x] || puzzleCell.logicCells[y][x] == null) {
                return true;
              }
              else {
                return false; // input isn't supposed to be here.
              }
            }
          })
        })
      ) // all conditions for cell input are true
       {
        return true;
      }
      else {
        return false;
      }
    })  
  });

console.log(ans)

}

// logs the user input to the state onChange.
 onChangeHandler = (event) => {
  // console.log(event.target.value, " at ", event.target.valueOf("location"));
  var x = event.target.attributes["x"].value;
  var y = event.target.attributes["y"].value;
  var ans = this.state.userAns;
  ans[y][x] = event.target.value;
  this.setState({userAns: ans});
}


// TODO: add a param for the puzzle size
dropZoneFactory = () => {
  var cells = [];
  for (var y = 0; y < 3; y++) {
      var row = [];
      for (var x = 0; x < 3; x++) {
        row.push(
          <DropZone
            x={x}
            y={y}
            changeHandler={this.onChangeHandler}/>
        );
      };
      cells.push(row);
  };
  return cells;
}


// TODO: EntityBin needs to be populated using the puzzle, to get the right # of entities.
render() {
  return (
    <div>
This is an answer zone ⬇️
<EntityBin entities={this.state.entities}/>
<br/>
<Grid cells={this.dropZoneFactory()}/>
  <br/>
<button onClick={this.validate}>Validate</button>
<br/>
This is an answer zone ⬆️
    </div>
  );
}

};

export default AnswerZone;
