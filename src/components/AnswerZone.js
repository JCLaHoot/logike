import React, {Component} from "react";

import Grid, {deepMap, deepEvery, deepForEach, deepSome, getGridY, getGridX} from './Grid.js';
import EntityBin from './EntityBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle}) {
    super(props);
    this.state = {
      puzzle: puzzle,
      entities: puzzle.entities,
      availableEntities: puzzle.entityCount,
      selectedEntity: null,
      userAns: this.createEmptyGrid(puzzle.size.x,puzzle.size.y),
      validAns: null //TODO use a bool here... 😡 this is DEFINITELY not legit
    }
    console.log("puzzle: ", this.state.puzzle);
  }

  componentDidMount() {
    // normalizing the logic upfront saves time when validating
    this.normalizeLogic(this.state.puzzle);
  }


  createEmptyGrid = (xSize, ySize) => {
    var grid = [];
    for (var y = 0; y < ySize; y++) {
      var row = [];
      for (var x = 0; x < xSize; x++) {
        row.push([]); // may need to just be null
      }
      grid.push(row);
    }
    return grid;
  }


  // TODO: improve to work with partial selectors
  // checks whether the logicCells contains a selector
  containsSelector = (logicCells) => {
      var entityProperties = this.state.entities.fetchAllProperties(this.state.entities);

      return deepSome(logicCells, (logicCell) => {
        if( typeof logicCell === "string"
            &&
            entityProperties.includes(logicCell)) {
              return true;
            }
            else {
              return false;
            }
      })
    };


  // if there's no selector, transforms puzzleLogic array to be the same size as the expected puzzle
  normalizeLogic = (puzzle) => {

   // checks whether the logicCells is the same size as the puzzle
     var sameSizeAsPuzzle = (puzzle, logicCells) => {
       if( getGridY(logicCells) === puzzle.size.y
           &&
           getGridX(logicCells) === puzzle.size.x) {
             return true;
           }
           else {
             return false;
           }
     };

       // TODO: turn into function?
     var newLogic = deepMap(puzzle.logic, (puzzleCell) => {
       if(sameSizeAsPuzzle(puzzle, puzzleCell.logicCells)
          ||
          this.containsSelector(puzzleCell.logicCells)) {
         return puzzleCell;
       }
       else { // Puzzle and logicCells are different size
         var newGrid = this.createEmptyGrid(puzzle.size.x, puzzle.size.y);
         var logicX = getGridX(puzzleCell.logicCells);
         var logicY = getGridY(puzzleCell.logicCells);

         var fillX = puzzle.size.x - logicX;
         var fillY = puzzle.size.y - logicY;
        //  empty grid used to map over the puzzle the correct amount of times and expose the offset indexes.
         var fillingMatrix = this.createEmptyGrid(fillX+1,fillY+1);

        //  maps using the fillingMatrix to go through every damn combination and add them to a new grid
         deepForEach(fillingMatrix, (placeholderCell,x,y) => {
           deepForEach(puzzleCell.logicCells, (logicCell, innerX, innerY) => {
             newGrid[y+innerY][x+innerX].push(logicCell);
           })
         })

         // checks whether the puzzle has a true or not, if it does, logic reducing is changed
         var containsTrue = false;
         deepForEach(puzzleCell.logicCells, (logicCell) => {
           if(logicCell) {
             containsTrue = true;
           }
         });

         // reduces array based logic in logicCells to single value logic

         // if any logicCells are true in an irregular grid, cells that contain a true become cells that MAY accept the selectors
         // all other cells are impossible, by extension.
         if(containsTrue) {
          newGrid = deepMap(newGrid, (logicCell) => {
             if(logicCell.some((element) => { return element === true})) {
               return null;
             }
             else {
               return false;
             }
           })
           }
           else { // no trues or selectors in the logicCells
             newGrid = deepMap(newGrid, (logicCell) => {
               // all false, return false
               if (logicCell.every((element) => { return element === false })) {
                 return false;
               }
               else {
                 return null;
               }
             });
           }

           // puzzleCell.logicCells = newGrid;
           // return puzzleCell;
         var newPuzzleCell = puzzleCell;
         newPuzzleCell.logicCells = newGrid; // for some reason puzzleCell.logicCells is ALSO changing
         return newPuzzleCell;
         // TODO: fix problem where entire originalLogic gets new logic for no reason... it's not fatal but its weird.
       }
     });

    // saves the normalized logic to the puzzle state
    console.log("new logic: ", newLogic);
     this.setState(puzzle.logic: newLogic) ;

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
  validateAns = () => {
    var start = Date.now();

    // checks to make sure that all entities have been placed
    // if(this.state.availableEntities != 0) {
    //   console.log("some blocks haven't been placed!")
    //   return;
    // }

    console.log("validating...");

    // returns false if the selector is found in a place it's not supposed to be. Otherwise returns true
    const validateLogicCell = (selector, ansCell, logicCell) => {
      var matchesSelector = selector === ansCell;

      var selectorCanBeHere = false;
        if(logicCell == null) {  //TODO: add case for empty cell;
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


    var validationArray;
    validationArray = deepMap(this.state.puzzle.logic, (puzzleCell, xAns, yAns) => {
      var selector = puzzleCell.selectorName;

      // TODO: improve check for matchesSelector to include partial selectors


    // This is the check that's performed on every single logic cell in a puzzle cell
      const check = (logicCell, x, y) => {
        var ansCell = this.state.userAns[y][x];
        return validateLogicCell(selector, ansCell, logicCell);
      }

    // different check depending on whether or not there's a selector in the logicCells.
      if(this.containsSelector(puzzleCell.logicCells)) {
        // finds the inner selector
        var entityProperties = this.state.entities.fetchAllProperties(this.state.entities);
        var innerSelector;
        deepForEach(puzzleCell.logicCells, (logicCell) => {
          if( typeof logicCell === "string"
              &&
              entityProperties.includes(logicCell)) {
                innerSelector = logicCell;
              }
        });

        // returns the location of the inner selector in the grid. Must test that the grid has an inner selector first
        const locateInnerSelectorIn = (grid) => {
          var location = {x: null, y: null};
          deepForEach(grid, (cell, x, y) => {
            if(cell === innerSelector) {
              location.x = x;
              location.y = y;
            }
          });
          return location;
        };
        // find inner selector location in puzzle
        var puzzInnerSelector = locateInnerSelectorIn(puzzleCell.logicCells);
        // find inner selector location in answer
        var ansInnerSelector = locateInnerSelectorIn(this.state.userAns);

        // selector check
        const relativeCheck = (logicCell, x, y) => {
          var xOffset = x - puzzInnerSelector.x;
          var yOffset = y - puzzInnerSelector.y;
          var ansCell;
          // makes sure that the ansCell's offset index is actually something that you can get a handle on
          if (this.state.userAns[ansInnerSelector.y + yOffset]) {
            if(this.state.userAns[ansInnerSelector.y + yOffset][ansInnerSelector.x + xOffset]) {
              ansCell = this.state.userAns[ansInnerSelector.y + yOffset][ansInnerSelector.x + xOffset];
            } else {
              return false;
            }
          }

          return validateLogicCell(selector, ansCell, logicCell);

        };

        return deepEvery(puzzleCell.logicCells, relativeCheck);

      }
      else {
    //  only returns true if all of the conditions in the check are passed
        return deepEvery(puzzleCell.logicCells, check);
      }

    })

    console.log("validation array: ", validationArray);
    var valid = deepEvery(validationArray, (i) => {return i});

    this.setState({validAns: valid});

    console.log("millis to validate: ", Date.now() - start);

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
    for (var y = 0; y < this.state.puzzle.size.y; y++) {
        var row = [];
        for (var x = 0; x < this.state.puzzle.size.x; x++) {
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

  // converts the validation bool to a string based className
  getValidationClassName = (bool) => {
    switch (bool) {
      case true:
        return "valid-true";
      case false:
        return "valid-false";
      default:
        return null;
    }
  }

  // TODO: EntityBin needs to be populated using the puzzle, to get the right # of entities.
  render() {
    return (
        <div className="answer-zone">
          This is an answer zone ⬇️
          <EntityBin entities={this.state.entities} entityOnClick={this.entityOnClick}/>
          <br/>
          <div className={this.getValidationClassName(this.state.validAns)}>
            <Grid cells={this.dropZoneFactory()}/>
          </div>
          <br/>
          <button onClick={this.validateAns}>Validate</button>
          <br/>
          This is an answer zone ⬆️
        </div>

    );
  }


};

export default AnswerZone;
