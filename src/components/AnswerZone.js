import React, {Component} from "react";

import Grid, {deepMap, deepEvery} from './Grid.js';
import EntityBin from './EntityBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle, entities}) {
  super(props);
  this.state = {
    puzzle: puzzle,
    entities: entities,
    selectedEntity: null,
    userAns: [[null, null, null],
              [null, null, null],
              [null, null, null]], // TODO: generate programatically based on puzzle size
    validAns: "null"
  }
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
  console.log("validating...");

  var validationArray;
  validationArray = deepMap(this.state.puzzle, (puzzleCell, xAns, yAns) => {
    var selector = puzzleCell.selectorName;

// TODO: add condition to check for coordiantes of irregular grids
//       This will check against all x,y pairs that are possible for the logicCell
//       and return true if ANY of them are true.
// This is the check that's performed on every single logic cell in a puzzle cell
    var check = (logicCell, x, y) => {
      // TODO: improve check for matchesSelector to include partial selectors
      var matchesSelector = selector == this.state.userAns[y][x];

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
          (!selectorIsHere || typeof logicCell == "string")))
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


  console.log(validationArray);
  var valid = deepEvery(validationArray, (i) => {return i});
  var validString;
  if(valid) {
    validString = "valid-true";
  } else {
    validString = "valid-false";
  }
  this.setState({validAns: validString});

  }

// logs the user input to the state onChange.
// TODO get rid of this and replace it with the interactive model.
 onChangeHandler = (event) => {
  // console.log(event.target.value, " at ", event.target.valueOf("location"));
  var x = event.target.attributes["x"].value;
  var y = event.target.attributes["y"].value;
  var ans = this.state.userAns;
  ans[y][x] = event.target.value;
  this.setState({userAns: ans});
}

// takes the entity from the EntityBin and saves it in the AnswerZone state
entityOnClick = (event) => {
  this.setState({selectedEntity: event.target});
}

// moves the selected entity into the dropZone onClick.
// This implementation will precede react-dnd.
moveEntity = (event) => {
  if(this.state.selectedEntity == null) {
    return;
  }
  // console.log(event.target);
  event.target.append(this.state.selectedEntity);

  this.setState({selectedEntity: null}); //deselects entity
}


// TODO: add a param for the puzzle size
// creates the dropzones and gives them onChangeHandlers. They absolutely need x and y params
dropZoneFactory = () => {
  var cells = [];
  for (var y = 0; y < 3; y++) {
      var row = [];
      for (var x = 0; x < 3; x++) {
        row.push(
          <DropZone
            onClickHandler={this.moveEntity}
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
