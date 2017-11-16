// image assets
import Entities from './Entities.js';
// ❔✅❌

 //I know it's not super legit, but I want entities to be tied to the puzzle
const entities = Entities;

// a 2d array of cells. Each cell contains an entity (or entity property)
// that acts as a selector. Each selector has a name.
// The selector is used along with the logicCells to determine where
// the selected entity (or entities) is, or isn't.
// entity(ies) location can be absolute, or relative, depending on
// whether the logicCells size matches the finished puzzle size.
// true: the selector is here
// false: the selector is NOT here
// null: the selector might be here
// entity-property: indicates where another entity or entity property is relative to the selector.
//

const Puzzle = {
logic:

// CUSTOM PUZZLE
/*const Puzzle = [
  [
    {
  selectorImg: Entities.list[0].img,
  selectorName: Entities.list[0].name,
  logicCells: [
    [true,false,false],
    [false,null,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities.list[1].img,
  selectorName: Entities.list[1].name,
  logicCells: [
    [false,true,false],
    [false,false,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities.list[2].img,
  selectorName: Entities.list[2].name,
  logicCells: [
    [false,false,false],
    [false,true,false],
    [false,false,false]
    ]
  }],
  [{
  selectorImg: Entities.list[3].img,
  selectorName: Entities.list[3].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [false,false,true]
    ]
  },
  {
  selectorImg: Entities.list[4].img,
  selectorName: Entities.list[4].name,
  logicCells: [
    [false,false,true],
    [false,false,false],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities.list[5].img,
  selectorName: Entities.list[5].name,
  logicCells: [
    [false,false,false],
    [true,false,false],
    [false,false,false]
    ]
  }],
  [{
  selectorImg: Entities.list[6].img,
  selectorName: Entities.list[6].name,
  logicCells: [
    [false,false,false],
    [false,false,true],
    [false,false,false]
    ]
  },
  {
  selectorImg: Entities.list[7].img,
  selectorName: Entities.list[7].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [true,false,false]
    ]
  },
  {
  selectorImg: Entities.list[8].img,
  selectorName: Entities.list[8].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    [false,true,null]
    ]
  }]

];*/

// FACILE
/*const Puzzle = [
  [
    {
  selectorImg: Entities.list[0].img,
  selectorName: Entities.list[0].name,
  logicCells: [
    [null,null,true],
    [null,null,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[1].img,
  selectorName: Entities.list[1].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,true,null]
    ]
  },
  {
  selectorImg: Entities.list[2].img,
  selectorName: Entities.list[2].name,
  logicCells: [
    [null,null,null],
    [true,null,null],
    [null,null,null]
    ]
  }],
  [{
  selectorImg: Entities.list[3].img,
  selectorName: Entities.list[3].name,
  logicCells: [
    [null,true,null],
    [null,null,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[4].img,
  selectorName: Entities.list[4].name,
  logicCells: [
    [null,null,null],
    [null,true,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[5].img,
  selectorName: Entities.list[5].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,null,true]
    ]
  }],
  [{
  selectorImg: Entities.list[6].img,
  selectorName: Entities.list[6].name,
  logicCells: [
    [null,null,null],
    [null,null,true],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[7].img,
  selectorName: Entities.list[7].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [true,null,null]
    ]
  },
  {
  selectorImg: Entities.list[8].img,
  selectorName: Entities.list[8].name,
  logicCells: [
    [true,null,null],
    [null,null,null],
    [null,null,null]
    ]
  }]

];*/

// MOYEN
/*[
  [
    {
  selectorImg: Entities.list[0].img,
  selectorName: Entities.list[0].name,
  logicCells: [
    [false,false,null],
    [false,false,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[1].img,
  selectorName: Entities.list[1].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[2].img,
  selectorName: Entities.list[2].name,
  logicCells: [
    [false,false,false],
    [false,null,null],
    [false,null,null]
    ]
  }],
  [{
  selectorImg: Entities.list[3].img,
  selectorName: Entities.list[3].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,null,true]
    ]
  },
  {
  selectorImg: Entities.list[4].img,
  selectorName: Entities.list[4].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [false,null,false]
    ]
  },
  {
  selectorImg: Entities.list[5].img,
  selectorName: Entities.list[5].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,true,null]
    ]
  }],
  [{
  selectorImg: Entities.list[6].img,
  selectorName: Entities.list[6].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,false,false]
    ]
  },
  {
  selectorImg: Entities.list[7].img,
  selectorName: Entities.list[7].name,
  logicCells: [
    [null,null,null],
    [false,false,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.list[8].img,
  selectorName: Entities.list[8].name,
  logicCells: [
    [false,null,null],
    [false,null,null],
    [false,null,null]
    ]
  }]

]*/

// Difficile
[
  [
    {
  selectorImg: Entities.list[0].img,
  selectorName: Entities.list[0].name,
  logicCells: [
    [false,null,null]
    ]
  },
  {
  selectorImg: Entities.list[1].img,
  selectorName: Entities.list[1].name,
  logicCells: [
    [false,null,false]
    ]
  },
  {
  selectorImg: Entities.list[2].img,
  selectorName: Entities.list[2].name,
  logicCells: [
    ["red-circle"],
    [true]
    ]
  }],
  [{
  selectorImg: Entities.list[3].img,
  selectorName: Entities.list[3].name,
  logicCells: [
    ["empty",true],
    ["yellow-triangle","empty"]
    ]
  },
  {
  selectorImg: Entities.list[4].img,
  selectorName: Entities.list[4].name,
  logicCells: [
    [false,"empty","empty"],
    ["empty",false,"empty"],
    ["empty","empty",false]
    ]
  },
  {
  selectorImg: Entities.list[5].img,
  selectorName: Entities.list[5].name,
  logicCells: [
    ["empty","empty",null],
    [true,null,"empty"]
    ]
  }],
  [{
  selectorImg: Entities.list[6].img,
  selectorName: Entities.list[6].name,
  logicCells: [
    ["yellow-circle",null,true]
    ]
  },
  {
  selectorImg: Entities.list[7].img,
  selectorName: Entities.list[7].name,
  logicCells: [
    [null],
    [false],
    [null]
    ]
  },
  {
  selectorImg: Entities.list[8].img,
  selectorName: Entities.list[8].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    ["empty",false,false]
    ]
  }]

]

// Très difficile
/*[
  [
    {
  selectorImg: Entities.PROPERTIES[3].img,
  selectorName:  Entities.PROPERTIES[3].name,
  logicCells: [
    [true,true,true],
    ["empty","triangle","empty"]
    ]
  },
  {
  selectorImg:  Entities.PROPERTIES[1].img,
  selectorName: Entities.PROPERTIES[1].name,
  logicCells: [
    ["empty",true],
    ["yellow",true],
    ["empty",true]
    ]
  },
  {
  selectorImg: Entities.PROPERTIES[4].img,
  selectorName: Entities.PROPERTIES[4].name,
  logicCells: [
    [false,false,false],
    [null,null,null],
    [null,null,null]
    ]
  }],
  [{
  selectorImg: Entities.PROPERTIES[5].img,
  selectorName: Entities.PROPERTIES[5].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities.PROPERTIES[2].img,
  selectorName: Entities.PROPERTIES[2].name,
  logicCells: [
    [null,false,null],
    [false,null,null],
    [null,false,null]
    ]
  }]

]*/

,
size: {
  x: 3,
  y: 3
},
entities: entities,
entityCount: 9

}



export default Puzzle;
