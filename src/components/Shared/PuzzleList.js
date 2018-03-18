import CustomTest from '../../puzzles/Custom-Test.json';
import FruitVegetablePuzzle from '../../puzzles/FruitVegetablePuzzle.json';
import Tutorial from '../../puzzles/Tutorial.json';
import Easy from '../../puzzles/Easy.json';
import Medium from '../../puzzles/Medium.json';
import Difficult from '../../puzzles/Difficult.json';

// OPTIMIZE: replace entities in puzzles with UID of entity list, then swap in entity list on the fly

let PuzzleList = [Tutorial, Easy, Medium, Difficult, FruitVegetablePuzzle, CustomTest];


const byDifficulty = (a, b) => {
    if (a.difficulty < b.difficulty) {
        return -1;
    }
    if (a.difficulty > b.difficulty) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

PuzzleList.sort(byDifficulty);



export default PuzzleList;
