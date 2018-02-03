import eColoredShapes from './eColoredShapes';

// import CustomTest from '../../puzzles/Custom-Test.js';
import Tutorial from '../../puzzles/Tutorial.js';
import Easy from '../../puzzles/Easy.js';
import Medium from '../../puzzles/Medium.js';
import Difficult from '../../puzzles/Difficult.js';

// TODO: save puzzles as JSON instead...

const PuzzleFiles = [Tutorial, Easy, Medium, Difficult];

// injects eColoredShapes into puzzles
const PuzzleList = PuzzleFiles.map((puzzle) => {
    return (puzzle(eColoredShapes));
});

export default PuzzleList;
