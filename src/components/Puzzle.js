// image assets
import Entities from './Entities.js';
// ❔✅❌

 //I know it's not super legit, but I want entities to be tied to the puzzle
export const entities = Entities;

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
// const Puzzle = [
//   [
//     {
//   selectorImg: Entities[0].img,
//   selectorName: Entities[0].name,
//   logicCells: [
//     [true,false,false],
//     [false,null,false],
//     [false,false,false]
//     ]
//   },
//   {
//   selectorImg: Entities[1].img,
//   selectorName: Entities[1].name,
//   logicCells: [
//     [false,true,false],
//     [false,false,false],
//     [false,false,false]
//     ]
//   },
//   {
//   selectorImg: Entities[2].img,
//   selectorName: Entities[2].name,
//   logicCells: [
//     [false,false,false],
//     [false,true,false],
//     [false,false,false]
//     ]
//   }],
//   [{
//   selectorImg: Entities[3].img,
//   selectorName: Entities[3].name,
//   logicCells: [
//     [false,false,false],
//     [false,false,false],
//     [false,false,true]
//     ]
//   },
//   {
//   selectorImg: Entities[4].img,
//   selectorName: Entities[4].name,
//   logicCells: [
//     [false,false,true],
//     [false,false,false],
//     [false,false,false]
//     ]
//   },
//   {
//   selectorImg: Entities[5].img,
//   selectorName: Entities[5].name,
//   logicCells: [
//     [false,false,false],
//     [true,false,false],
//     [false,false,false]
//     ]
//   }],
//   [{
//   selectorImg: Entities[6].img,
//   selectorName: Entities[6].name,
//   logicCells: [
//     [false,false,false],
//     [false,false,true],
//     [false,false,false]
//     ]
//   },
//   {
//   selectorImg: Entities[7].img,
//   selectorName: Entities[7].name,
//   logicCells: [
//     [false,false,false],
//     [false,false,false],
//     [true,false,false]
//     ]
//   },
//   {
//   selectorImg: Entities[8].img,
//   selectorName: Entities[8].name,
//   logicCells: [
//     [false,false,false],
//     [false,false,false],
//     [false,true,null]
//     ]
//   }]
//
// ];

// FACILE
/*const Puzzle = [
  [
    {
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    [null,null,true],
    [null,null,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,true,null]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    [null,null,null],
    [true,null,null],
    [null,null,null]
    ]
  }],
  [{
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    [null,true,null],
    [null,null,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    [null,null,null],
    [null,true,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[5].img,
  selectorName: Entities[5].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,null,true]
    ]
  }],
  [{
  selectorImg: Entities[6].img,
  selectorName: Entities[6].name,
  logicCells: [
    [null,null,null],
    [null,null,true],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[7].img,
  selectorName: Entities[7].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [true,null,null]
    ]
  },
  {
  selectorImg: Entities[8].img,
  selectorName: Entities[8].name,
  logicCells: [
    [true,null,null],
    [null,null,null],
    [null,null,null]
    ]
  }]

];*/

// MOYEN
[
  [
    {
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    [false,false,null],
    [false,false,null],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    [false,false,false],
    [false,null,null],
    [false,null,null]
    ]
  }],
  [{
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,null,true]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [false,null,false]
    ]
  },
  {
  selectorImg: Entities[5].img,
  selectorName: Entities[5].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,true,null]
    ]
  }],
  [{
  selectorImg: Entities[6].img,
  selectorName: Entities[6].name,
  logicCells: [
    [null,null,null],
    [null,null,null],
    [null,false,false]
    ]
  },
  {
  selectorImg: Entities[7].img,
  selectorName: Entities[7].name,
  logicCells: [
    [null,null,null],
    [false,false,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[8].img,
  selectorName: Entities[8].name,
  logicCells: [
    [false,null,null],
    [false,null,null],
    [false,null,null]
    ]
  }]

]

// Difficile
/*[
  [
    {
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    [false,null,null]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    [false,null,false]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    ["red-circle"],
    [true]
    ]
  }],
  [{
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    ["empty",true],
    ["yellow-triangle","empty"]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    [false,"empty","empty"],
    ["empty",false,"empty"],
    ["empty","empty",false]
    ]
  },
  {
  selectorImg: Entities[5].img,
  selectorName: Entities[5].name,
  logicCells: [
    ["empty","empty",null],
    [true,null,"empty"]
    ]
  }],
  [{
  selectorImg: Entities[6].img,
  selectorName: Entities[6].name,
  logicCells: [
    ["yellow-circle",null,true]
    ]
  },
  {
  selectorImg: Entities[7].img,
  selectorName: Entities[7].name,
  logicCells: [
    [null],
    [false],
    [null]
    ]
  },
  {
  selectorImg: Entities[8].img,
  selectorName: Entities[8].name,
  logicCells: [
    [false,false,false],
    [false,false,false],
    ["empty",false,false]
    ]
  }]

]*/

// Très difficile
/*const Puzzle = [
  [
    {
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    [true,true,true],
    ["empty","triangle","empty"]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    ["empty",true],
    ["yellow",true],
    ["empty",true]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    [false,false,false],
    [null,null,null],
    [null,null,null]
    ]
  }],
  [{
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    [false,false,false],
    [false,null,false],
    [null,null,null]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    [null,false,null],
    [false,null,null],
    [null,false,null]
    ]
  }]

];*/

,
size: {
  x: 3,
  y: 3
},
entities: entities,
entityCount: 9

}



export default Puzzle;
