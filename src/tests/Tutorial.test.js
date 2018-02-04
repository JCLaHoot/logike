import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import tutorialPuzzle from '../puzzles/Tutorial.json';

import {generateAnsContainer} from './TestHelpers';

var puzzle = tutorialPuzzle;

// normalizing logic:
var newLogic = normalizeLogic(puzzle, eColoredShapes);
puzzle.logic = newLogic;

const ansArray =
    [["red-square", "red-circle"],
        ["yellow-square", "blue-triangle"]];

const containers = generateAnsContainer(ansArray);

test("Tutorial puzzle validates", () => {
    expect(validateAnswer(puzzle, eColoredShapes, containers)).toEqual(true);
});



const incorrectAnsArray =
    [["blue-triangle", "blue-square"],
        ["yellow-circle", "red-circle"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Tutorial puzzle does not validate incorrect answers", () => {
    expect(validateAnswer(puzzle, eColoredShapes, incorrectContainers)).toEqual(false);
});
