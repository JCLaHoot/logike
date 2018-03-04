import CustomTest from '../../puzzles/Custom-Test.json';
import FruitVegetablePuzzle from '../../puzzles/FruitVegetablePuzzle.json';
import Tutorial from '../../puzzles/Tutorial.json';
import Easy from '../../puzzles/Easy.json';
import Medium from '../../puzzles/Medium.json';
import Difficult from '../../puzzles/Difficult.json';

// OPTIMIZE: replace entities in puzzles with UID of entity list, then swap in entity list on the fly

const PuzzleList = [Tutorial, Easy, Medium, Difficult, FruitVegetablePuzzle, CustomTest];


export default PuzzleList;
