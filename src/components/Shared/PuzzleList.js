import Entities from './Entities.js';

import CustomTest from '../../puzzles/Custom-Test.js';
import EasyTest from '../../puzzles/Easy-Test.js';
import MediumTest from '../../puzzles/Medium-Test.js';
import DifficultTest from '../../puzzles/Difficult-Test.js';
import ExtremeTest from '../../puzzles/Extreme-Test.js';

// TODO: save puzzles as JSON instead...

const puzzleFiles = [CustomTest, EasyTest, MediumTest, DifficultTest, ExtremeTest];

// injects entities into puzzles
const puzzleList = puzzleFiles.map((puzzle) => {
  const puzzleWithEntities = (puzzle(Entities));
  console.log(JSON.stringify(puzzleWithEntities,undefined, 2));

  return puzzleWithEntities;
})


var index = [];
for (let i=0; i<puzzleList.length; i++) {
  index.push({
    name: puzzleList[i].name,
    file: puzzleList[i].id + '.json'
  });
}

console.log(JSON.stringify(index, undefined, 2));



export default puzzleList;
