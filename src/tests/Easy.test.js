import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import entities from '../components/Shared/Entities';
import easyPuzzle from '../puzzles/Easy';

import {generateAnsContainer} from './TestHelpers';

var puzzle = easyPuzzle(entities);

// normalizing logic:
var newLogic = normalizeLogic(puzzle, entities);
puzzle.logic = newLogic;

const ansArray =
    [["blue-triangle", "yellow-triangle", "red-square"],
        ["red-triangle", "blue-circle", "yellow-square"],
        ["blue-square", "yellow-circle", "red-circle"]];

const containers = generateAnsContainer(ansArray);

test("Easy puzzle validates", () => {
    // expect(validateAnswer(puzzle, entities, ))
    expect(validateAnswer(puzzle, entities, containers)).toEqual(true);
});



const incorrectAnsArray =
    [["blue-triangle", "blue-square", "blue-circle"],
        ["yellow-circle", "red-circle", "red-triangle"],
        ["yellow-triangle", "yellow-square", "red-square"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Easy puzzle does not validate incorrect answers", () => {
    // expect(validateAnswer(puzzle, entities, ))
    expect(validateAnswer(puzzle, entities, incorrectContainers)).toEqual(false);
});
