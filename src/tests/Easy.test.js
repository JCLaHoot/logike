import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import easyPuzzle from '../puzzles/Easy.json';

import {generateAnsContainer} from './TestHelpers';

var puzzle = easyPuzzle;

// normalizing logic:
var preProcessedLogic = normalizeLogic(puzzle, eColoredShapes);

const ansArray =
    [["blue-triangle", "yellow-triangle", "red-square"],
        ["red-triangle", "blue-circle", "yellow-square"],
        ["blue-square", "yellow-circle", "red-circle"]];

const containers = generateAnsContainer(ansArray);

test("Easy puzzle validates", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, containers)).toEqual(true);
});



const incorrectAnsArray =
    [["blue-triangle", "blue-square", "blue-circle"],
        ["yellow-circle", "red-circle", "red-triangle"],
        ["yellow-triangle", "yellow-square", "red-square"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Easy puzzle does not validate incorrect answers", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, incorrectContainers)).toEqual(false);
});
