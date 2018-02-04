import eColoredShapes from './eColoredShapes';

// import CustomTest from '../../puzzles/Custom-Test.json';
import Tutorial from '../../puzzles/Tutorial.json';
import Easy from '../../puzzles/Easy.json';

import Medium from '../../puzzles/Medium.json';
import Difficult from '../../puzzles/Difficult.json';

// OPTIMIZE: replace entities in puzzles with UID of entity list, then swap in entity list on the fly

const PuzzleList = [Tutorial, Easy, Medium, Difficult];


export default PuzzleList;
