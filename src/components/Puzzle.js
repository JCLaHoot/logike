// image assets
import Entities from './Entities.js';
// ❔✅❌

 //I know it's not super legit, but I want entities to be tied to the puzzle
export const entities = Entities;


//TODO convert the puzzle array into an object,
//TODO add metadata for puzzle size, entity list, number of entities.

// a 2d array of cells. Each cell contains an entity (or entity property)
// that acts as a selector. Each selector has a name.
// The selector is used along with the logicCells to determine where
// the selected entity (or entities) is, or isn't.
// entity(ies) location can be absolute, or relative, depending on
// whether the logicCells size matches the finished puzzle size.
const Puzzle = [
  [{
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    [true,false,false],
    [false,null,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    [false,true,false],
    [false,false,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    [false,false,false],
    [false,true,false],
    [false,false,false]
    ]
  }],
  [{
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [false,false,true]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    [false,false,true],
    [false,false,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities[5].img,
  selectorName: Entities[5].name,
  logicCells: [
    [false,false,false],
    [true,false,false],
    [false,false,false]
    ]
  }],
  [{
  selectorImg: Entities[6].img,
  selectorName: Entities[6].name,
  logicCells: [
    [false,false,false],
    [false,false,true],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities[7].img,
  selectorName: Entities[7].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [true,false,false]
    ]
  },
  {
  selectorImg: Entities[8].img,
  selectorName: Entities[8].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [false,true,false]
    ]
  }]

];

export default Puzzle;
