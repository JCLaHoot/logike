import {containsSelector} from '../components/PuzzlePage/AnswerZone/Validation';
import entities from '../components/Shared/Entities';
import extremePuzzle from '../puzzles/Extreme-Test';

const puzzle = extremePuzzle(entities);

test("logical condition with triangle contains selector", () => {
  expect(containsSelector(puzzle.logic[0][0].logicCells, entities)).toEqual(true);
})
