// image assets
import Shapes from '../assets/Shapes.js';
// ❔✅❌


const Puzzle = [
  {
  selectorImg: Shapes[0].src,
  selectorName: Shapes[0].alt,
  logicCells: [
    ["✅","❌","❌"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[1].src,
  selectorName: Shapes[1].alt,
  logicCells: [
    ["❌","✅","❌"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[2].src,
  selectorName: Shapes[2].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","✅","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[3].src,
  selectorName: Shapes[3].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["❌","❌","✅"]
    ]
  },
  {
  selectorImg: Shapes[4].src,
  selectorName: Shapes[4].alt,
  logicCells: [
    ["❌","❌","✅"],
    ["❌","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[5].src,
  selectorName: Shapes[5].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["✅","❌","❌"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[6].src,
  selectorName: Shapes[6].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","✅"],
    ["❌","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[7].src,
  selectorName: Shapes[7].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["✅","❌","❌"]
    ]
  },
  {
  selectorImg: Shapes[8].src,
  selectorName: Shapes[8].alt,
  logicCells: [
    ["❌","❌","❌"],
    ["❌","❌","❌"],
    ["❌","✅","❌"]
    ]
  }

];

export default Puzzle;
