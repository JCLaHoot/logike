import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import entities from '../components/Shared/Entities';
import tutorialPuzzle from '../puzzles/Tutorial';

import {generateAnsContainer} from './TestHelpers';

var puzzle = tutorialPuzzle(entities);

// normalizing logic:
var newLogic = normalizeLogic(puzzle, entities);
puzzle.logic = newLogic;

const ansArray =
    [["red-square", "red-circle"],
        ["yellow-square", "blue-triangle"]];

const containers = generateAnsContainer(ansArray);

test("Tutorial puzzle validates", () => {
    expect(validateAnswer(puzzle, entities, containers)).toEqual(true);
});



const incorrectAnsArray =
    [["blue-triangle", "blue-square"],
        ["yellow-circle", "red-circle"]];

const incorrectContainers = generateAnsContainer(incorrectAnsArray);

test("Tutorial puzzle does not validate incorrect answers", () => {
    expect(validateAnswer(puzzle, entities, incorrectContainers)).toEqual(false);
});
