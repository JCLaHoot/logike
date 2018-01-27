import {validateAnswer, normalizeLogic} from '../components/PuzzlePage/AnswerZone/Validation';
import entities from '../components/Shared/Entities';
import easyPuzzle from '../puzzles/Easy-Test';

import {generateAnsContainer} from './TestHelpers';

var puzzle = easyPuzzle(entities);

// normalizing logic:
var newLogic = normalizeLogic(puzzle, entities);
puzzle.logic = newLogic;


const ansArray = 
    [["yellow-triangle", "red-circle", "red-square"],
    ["yellow-square", "blue-circle", "red-triangle"],
    ["blue-triangle", "blue-square", "yellow-circle"]];

const containers = generateAnsContainer(ansArray);

test("testing The Easy puzzle", () => {
    expect(validateAnswer(puzzle, entities, containers)).toEqual(true);
});
