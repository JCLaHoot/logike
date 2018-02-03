import {containsSelector} from '../components/PuzzlePage/AnswerZone/Validation';
import eColoredShapes from '../components/Shared/eColoredShapes';
import extremePuzzle from '../puzzles/Difficult';

const puzzle = extremePuzzle(eColoredShapes);

test("logical condition with triangle contains selector", () => {
    expect(containsSelector(puzzle.logic[0].logicCells, eColoredShapes)).toEqual(true);
});
