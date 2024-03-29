import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import mediumPuzzle from '../puzzles/Medium.json';

import {generateAnsContainer} from './TestHelpers';

var puzzle = mediumPuzzle;

// normalizing logic:
var preProcessedLogic = normalizeLogic(puzzle, eColoredShapes);

const ansArray =
    [["blue-triangle", "blue-square", "blue-circle"],
        ["yellow-circle", "red-circle", "red-triangle"],
        ["yellow-triangle", "yellow-square", "red-square"]];

const containers = generateAnsContainer(ansArray);

test("Medium puzzle validates", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, containers)).toEqual(true);
});




const incorrectAnsArray =
    [["blue-triangle", "yellow-triangle", "red-square"],
        ["red-triangle", "blue-circle", "yellow-square"],
        ["blue-square", "yellow-circle", "red-circle"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Medium puzzle does not validate incorrect answers", () => {
    expect(validateAnswer(preProcessedLogic, eColoredShapes, incorrectContainers)).toEqual(false);
});
