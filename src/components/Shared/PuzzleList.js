import Entities from './Entities.js';

import CustomTest from '../../puzzles/Custom-Test.js';
import EasyTest from '../../puzzles/Easy-Test.js';
import MediumTest from '../../puzzles/Medium-Test.js';
import DifficultTest from '../../puzzles/Difficult-Test.js';
import ExtremeTest from '../../puzzles/Extreme-Test.js';

// TODO: save puzzles as JSON instead...

const PuzzleFiles = [CustomTest, EasyTest, MediumTest, DifficultTest, ExtremeTest];

// injects entities into puzzles
const PuzzleList = PuzzleFiles.map((puzzle) => {
    return (puzzle(Entities));
});

export default PuzzleList;
