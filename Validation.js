// Contains all of the validation logic for Logike

import {deepMap, getGridY, getGridX} from '../../Shared/Grid.js';


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


const validate = () => {

}
