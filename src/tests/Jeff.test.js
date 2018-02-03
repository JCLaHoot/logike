import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import entities from '../components/Shared/Entities';
import extremePuzzle from '../puzzles/Difficult';

import {generateAnsContainer} from './TestHelpers';

var puzzle = extremePuzzle(entities);

// normalizing logic:
var newLogic = normalizeLogic(puzzle, entities);
puzzle.logic = newLogic;

const ansArray =
    [["yellow-square", "red-square", "blue-square"],
    ["red-circle", "yellow-triangle", "blue-circle"],
    ["yellow-circle", "red-triangle", "blue-triangle"]];

const containers = generateAnsContainer(ansArray);

test("testing Jeff's puzzle example", () => {
    // expect(validateAnswer(puzzle, entities, ))
    expect(validateAnswer(puzzle, entities, containers)).toEqual(true);
});
