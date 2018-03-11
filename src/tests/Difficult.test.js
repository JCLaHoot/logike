import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import difficultPuzzle from '../puzzles/Difficult.json';

import {generateAnsContainer} from './TestHelpers';

var puzzle = difficultPuzzle;

// normalizing logic:
var preProcessedLogic = normalizeLogic(puzzle, eColoredShapes);

const ansArray =
    [["yellow-square", "red-square", "blue-square"],
    ["red-circle", "yellow-triangle", "blue-circle"],
    ["yellow-circle", "red-triangle", "blue-triangle"]];

const containers = generateAnsContainer(ansArray);

test("Difficult puzzle validates", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, containers)).toEqual(true);
});


const incorrectAnsArray =
    [["blue-triangle", "blue-square", "blue-circle"],
        ["yellow-circle", "red-circle", "red-triangle"],
        ["yellow-triangle", "yellow-square", "red-square"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Difficult puzzle does not validate incorrect answers", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, incorrectContainers)).toEqual(false);
});
