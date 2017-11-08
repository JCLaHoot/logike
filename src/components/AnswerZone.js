import React, {Component} from "react";

import Grid, {deepMap, deepEvery} from './Grid.js';
import EntityBin from './EntityBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle}) {
  super(props);
  this.state = {
    puzzleLogic: puzzle.logic,
    entities: puzzle.entities,
    availableEntities: puzzle.entityCount,
    selectedEntity: null,
    userAns: this.createEmptyGrid(puzzle.size.x,puzzle.size.y),
    validAns: "null" //TODO use a bool here... 😡 this is DEFINITELY not legit
  }
}

createEmptyGrid = (xSize, ySize) => {
  var grid = [];
  for (var y = 0; y < ySize; y++) {
    var row = [];
    for (var x = 0; x < xSize; x++) {
      row.push(null);
    }
    grid.push(row);
  }
  return grid;
}



// validates the answer that the user has entered using the following steps:
// 1. check each logicCell in puzzle
// 2. if selector is a property of entity
//    check whether the location of the entity is "true" or null
//    in the logicCell
// 3. if selector isn't a property of entity
//    check whethere the location of the entity is "false" or an entity property
//    that matches the entity.
// 4. return true for the cell if checks are passed
// 5. set validAns state to true if all puzzle cells are valid
validate = () => {

  // // checks to make sure that all entities have been placed
  // if(this.state.availableEntities != 0) {
  //   console.log("some blocks haven't been placed!")
  //   return;
  // }

  console.log("validating...");


// helper functions to get dimensions of grids TODO: move this somewhere better
  var getGridY = (grid) => {
    return grid.length;
  }
  var getGridX = (grid) => {
    var rowLengths = grid.map((row) => {
      return row.length;
    })
    return Math.max(...rowLengths);
  }

  var sameSizeAsPuzzle = (puzzle, logicCell) => {
    if( getGridY(logicCell) == puzzle.size.y
        &&
        getGridX(logicCell) == puzzle.size.x) {
          return true;
        }
        else {
          return false;
        }
  };


  // TODO: create method to normalize irregular grids.
  // if there's no selector, transforms puzzleLogic array to be the same size as the expected puzzle
 var normalizeLogic = (puzzle) => {
   var originalLogic = this.state.puzzleLogic;
   console.log("originalLogic", originalLogic);

// TODO: turn into function?
   var newLogic = deepMap(originalLogic, (puzzleCell) => {
     if(sameSizeAsPuzzle(puzzle, puzzleCell.logicCells)) {
       return puzzleCell;
     }
     else { // Puzzle and logicCells are different size
      //  TODO: add check for whether the logicCells contains a selector (thus not needing to be the same size as the puzzle)
       var newGrid = this.createEmptyGrid(puzzle.size.x, puzzle.size.y);
       var logicX = getGridX(puzzleCell.logicCells);
       var logicY = getGridY(puzzleCell.logicCells);

       var fillX = puzzle.size.x - logicX;
       var fillY = puzzle.size.y - logicY;
      //  empty grid used to map over the puzzle the correct amount of times and expose the offset indexes.
       var fillingMatrix = this.createEmptyGrid(fillX+1,fillY+1);

      //  maps using the fillingMatrix to go through every damn combination and add them to a new grid
       deepMap(fillingMatrix, (placeholderCell,x,y) => {
         deepMap(puzzleCell.logicCells, (logicCell, innerX, innerY) => {
           newGrid[y+innerY][x+innerX] = logicCell;
         })
       })

      //  puzzleCell.logicCells = [["different"]];
       return newGrid;
     }
   });

   console.log("newLogic: ", newLogic);

 }

normalizeLogic(this.props.puzzle);




  var validationArray;
  validationArray = deepMap(this.state.puzzleLogic, (puzzleCell, xAns, yAns) => {
    var selector = puzzleCell.selectorName;


// This is the check that's performed on every single logic cell in a puzzle cell
    var check = (logicCell, x, y) => {
      // TODO: improve check for matchesSelector to include partial selectors
      var matchesSelector = selector === this.state.userAns[y][x];

      var selectorCanBeHere = false;
        if(logicCell == null) {
          selectorCanBeHere = true;
        }
      var selectorIsHere = false
        if(logicCell) {
          selectorIsHere = true;
        }

      if ((matchesSelector
          &&
          (selectorCanBeHere || selectorIsHere))
          // matches selector in specific cell, therefore the cell needs to contain true or null
          ||
          (!matchesSelector
          &&
          (!selectorIsHere || typeof logicCell === "string")))
          // doesn't match selector, therefore the cell must contain false or another selector
           {
        return true;
      }
      else {
        return false;
      }
    }
//  only returns true if all of the conditions in the check are passed
    return deepEvery(puzzleCell.logicCells, check);
  })


  console.log("validation array: ", validationArray);
  var valid = deepEvery(validationArray, (i) => {return i});
  var validString;
  if(valid) {
    validString = "valid-true";
  } else {
    validString = "valid-false";
  }
  this.setState({validAns: validString});

  }


// takes the entity from the EntityBin and saves it in the AnswerZone state
entityOnClick = (event) => {
  this.setState({selectedEntity: event.target});
}

// moves the selected entity into the dropZone onClick, and log userAns
// This implementation will precede react-dnd.
moveEntity = (event) => {
  if(this.state.selectedEntity == null) {
    return;
  }

// checks if the item was taken from the entity bin, and decrements the availableEntities count if it was
  if(this.state.selectedEntity.parentElement.className === "entity-bin") {
    var availableEntities = this.state.availableEntities - 1;
    this.setState({availableEntities: availableEntities});
  }

  // places the entity in the selected dropZone
  event.target.append(this.state.selectedEntity);

// stores the x,y vals of the dropZone
  var x = event.target.attributes["x"].value;
  var y = event.target.attributes["y"].value;

// gets the current userAns in order to add new vals
  var ans = this.state.userAns;
  ans[y][x] = this.state.selectedEntity.attributes["name"].value;

  //deselects entity and adds new ans
  this.setState({
    userAns: ans,
    selectedEntity: null
  });
}


// creates the dropzones and gives them onChangeHandlers. They absolutely need x and y params
dropZoneFactory = () => {
  var cells = [];
  for (var y = 0; y < this.props.puzzle.size.y; y++) {
      var row = [];
      for (var x = 0; x < this.props.puzzle.size.x; x++) {
        row.push(
          <DropZone
            onClickHandler={this.moveEntity}
            x={x}
            y={y}/>
        );
      };
      cells.push(row);
  };
  return cells;
}


// TODO: EntityBin needs to be populated using the puzzle, to get the right # of entities.
render() {
  return (
      <div className="answer-zone">
        This is an answer zone ⬇️
        <EntityBin entities={this.state.entities} entityOnClick={this.entityOnClick}/>
        <br/>
        <div className={this.state.validAns}>
          <Grid cells={this.dropZoneFactory()}/>
        </div>
        <br/>
        <button onClick={this.validate}>Validate</button>
        <br/>
        This is an answer zone ⬆️
      </div>

  );
}


};

export default AnswerZone;
