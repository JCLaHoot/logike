// image assets
import Entities from './Entities.js';
// ❔✅❌

var ob = {
  entityProperty: "red-square",
  position:
    [[true, null, null],
    [null, null, null],
    [null , null, null]]

};


const Puzzle = [
  {
  selectorImg: Entities[0].img,
  selectorName: Entities[0].name,
  logicCells: [
    ["✅","❌","❌"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[1].img,
  selectorName: Entities[1].name,
  logicCells: [
    ["❌","✅","❌"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[2].img,
  selectorName: Entities[2].name,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","✅","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[3].img,
  selectorName: Entities[3].name,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["❌","❌","✅"]
    ]
  },
  {
  selectorImg: Entities[4].img,
  selectorName: Entities[4].name,
  logicCells: [
    ["❌","❌","✅"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[5].img,
  selectorName: Entities[5].name,
  logicCells: [
    ["❌","❌","❌"],
    ["✅","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[6].img,
  selectorName: Entities[6].name,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","✅"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[7].img,
  selectorName: Entities[7].name,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["✅","❌","❌"]
    ]
  },
  {
  selectorImg: Entities[8].img,
  selectorName: Entities[8].name,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["❌","✅","❌"]
    ]
  }

];

export default Puzzle;
