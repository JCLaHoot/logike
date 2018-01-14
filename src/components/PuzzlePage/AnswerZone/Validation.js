// Contains all of the validation logic for Logike

import {deepMap,
        deepEvery,
        deepForEach,
        deepSome,
        getGridY,
        getGridX,
        createTwoDimensionalArray}
        from '../../Shared/TwoDimensionalMethods.js';


// NOTE: TESTED and works GREAT! :) Delete comment after Jeff.test.js runs smoothly
// checks whether the logicCells contains a selector
// takes a x by y grid of logic cells, and checks whether any of the cells contain
// a selector, as defined in the Entities file
export const containsSelector = (logicCells, entities) => {
    var entityProperties = entities.fetchAllProperties(entities);

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

// Literally just a note for myself!
// FIXME BUG TODO NOTE OPTIMIZE HACK REVIEW XXX IDEA QUESTION TEMP DEBUG CHANGED
  // NOTE: TESTED and works GREAT! :) Delete comment after Jeff.test.js runs smoothly
// checks whether the provided selector is partial or not
const selectorIsPartial = (selector, entities) => {
    var partialSelectorList = entities.PROPERTIES.map((property) => {
      return property.name;
    });
    // lists all selectors, regardless of type
    if (partialSelectorList.includes(selector)) {
      return true;
    }
    return false;
  }

  // if there's no selector, transforms puzzleLogic array to be the same size as the expected puzzle
  // returns normalized logic, which must then be saved to the puzzle state
  // TODO rename to getNormalizedLogic
  // NOTE: TESTED and works GREAT! :) Delete comment after Jeff.test.js runs smoothly
  export const normalizeLogic = (puzzle, entities) => {
    var start = Date.now(); //used to calculate validation time

   // checks whether the logicCells is the same size as the puzzle
   // NOTE: TESTED and works GREAT! :) Delete comment after Jeff.test.js runs smoothly
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

     // TODO: Code review of this map
   var newLogic = deepMap(puzzle.logic, (puzzleCell) => {
     if(sameSizeAsPuzzle(puzzle, puzzleCell.logicCells)
        ||
        containsSelector(puzzleCell.logicCells, entities)) {
       return puzzleCell;
     }
     else { // Puzzle and logicCells are different size
       var newGrid = createTwoDimensionalArray(puzzle.size.x, puzzle.size.y);
       var logicX = getGridX(puzzleCell.logicCells);
       var logicY = getGridY(puzzleCell.logicCells);

       var fillX = puzzle.size.x - logicX;
       var fillY = puzzle.size.y - logicY;
      //  empty grid used to map over the puzzle the correct amount of times and expose the offset indexes.
       var fillingMatrix = createTwoDimensionalArray(fillX+1,fillY+1);

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

    // returns the normalized logic, so that it can be injected in props
    console.log("millis to normalize logic: ", Date.now() - start);
    return newLogic;
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
 // 5. returns true or false depending on whether or not the ans is valid.
 // BUG Jeffbug is PROBABLY due to the relative check for the selector. There are
 // MANY partial selectors in the ans, so it needs to check all of the possibilities
 // and return true if any of them evaluates properly.
 // I think... I'll have to test but with a specific selector.
 export const validateAnswer = (puzzle, entities, containers ) => {

   var start = Date.now(); //used to calculate validation time
   console.log("validating...");

   var userAns = deepMap(containers, (container) => {
       return container.contents[0].name;
   });


   // returns false if the selector is found in a place it's not supposed to be. Otherwise returns true
   // REVIEW: confirm function is working properly
   const validateLogicCell = (selector, ansCell, logicCell) => {

     var matchesSelector = false;
     // checks to see if the answer matches the selector
     if(selector === ansCell) {
       matchesSelector = true;
     } else if (selectorIsPartial(selector, entities)
                &&
                ansCell.includes(selector)
              ) {
       matchesSelector = true;
     }

     var selectorCanBeHere = false;
       if(logicCell == null || logicCell === "empty") {
         selectorCanBeHere = true;
       }
     var selectorIsHere = false
       if(logicCell === true) {
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
   validationArray = deepMap(puzzle.logic, (puzzleCell, xAns, yAns) => {
     var selector = puzzleCell.selectorName;

   // This is the check that's performed on every single logic cell in a puzzle cell
     const check = (logicCell, x, y) => {
       var ansCell = userAns[y][x];
       return validateLogicCell(selector, ansCell, logicCell);
     }

   // different check depending on whether or not there's a selector in the logicCells.
     if(containsSelector(puzzleCell.logicCells, entities)) {
       // finds the inner selector
       var entityProperties = entities.fetchAllProperties(entities);
       var innerSelector;
       deepForEach(puzzleCell.logicCells, (logicCell) => {
         if( typeof logicCell === "string"
             &&
             entityProperties.includes(logicCell)) {
               innerSelector = logicCell;
             }
       });

       // returns the location of the inner selector in the grid. Must test that the grid has an inner selector first
       const locateInnerSelectorsIn = (grid) => {
         var locations = [];
         deepForEach(grid, (cell, x, y) => {
           var location = {x: null, y: null};
           if( typeof cell === "string" && cell.includes(innerSelector)) {
             location.x = x;
             location.y = y;
             locations.push(location);
           }
         });
         return locations;
       };
       // find inner selector location in puzzle

       var puzzInnerSelector = locateInnerSelectorsIn(puzzleCell.logicCells)[0];
       // find inner selectors location in answer (can be more than one for property selectors)
       var ansInnerSelectors = locateInnerSelectorsIn(userAns);


       // checks that the logic found in the logical condition can be true relative to
       // at least one of the inner selectors.
       // NOTE: only ONE inner selector is allowed per logical condition right now;
       // the logic below must test the offset of multiple puzzle selectors for this
       // to work.
       return ansInnerSelectors.some((ansInnerSelector) => {

         return deepEvery(puzzleCell.logicCells, (logicCell, x, y) => {
           var xOffset = x - puzzInnerSelector.x;
           var yOffset = y - puzzInnerSelector.y;
           var ansCell;

           // makes sure that the ansCell's offset index is actually something that you can get a handle on
           if (userAns[ansInnerSelector.y + yOffset]) {
             if(userAns[ansInnerSelector.y + yOffset][ansInnerSelector.x + xOffset]) {
               // validates the logicCell using the standard validation method
               ansCell = userAns[ansInnerSelector.y + yOffset][ansInnerSelector.x + xOffset];
               return validateLogicCell(selector, ansCell, logicCell);
             }
           }

        // returns false if the offset moves the logical condition outside of the puzzle area
          return false;
         });
       });


     }
     else {
   //  only returns true if all of the conditions in the check are passed
       return deepEvery(puzzleCell.logicCells, check);
     }

   })

   console.log("validation array: ", validationArray);
   var valid = deepEvery(validationArray, (i) => {return i});

   console.log("millis to validate: ", Date.now() - start);
   // returns a bool to indicate whether or not the answer is valid
   return valid;
   }
