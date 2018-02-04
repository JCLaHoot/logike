import {containsSelector} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import difficultPuzzle from '../puzzles/Difficult.json';

const puzzle = difficultPuzzle;

test("logical condition with triangle contains selector", () => {
    expect(containsSelector(puzzle.logic[0].logicCells, eColoredShapes)).toEqual(true);
});
