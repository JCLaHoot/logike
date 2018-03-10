import React from 'react';

import PuzzleListItem from './PuzzleListItem';

const PuzzleListView = ({puzzleList, onSelectHandler, validPuzzleNames}) => {

    console.log("validPuzzleNames: ", validPuzzleNames);
    const PuzzleListItems = puzzleList.map((puzzle) => {
        var isValidated = false;
        if (validPuzzleNames.includes(puzzle.name)) {
            isValidated = true;
        }
        return (<PuzzleListItem
            key={puzzle.name}
            puzzle={puzzle}
            onSelectHandler={onSelectHandler}
            isValidated={isValidated}
        />);
    });

    return (
        <div className="puzzle-list">
            {PuzzleListItems}
        </div>
    )

};

export default PuzzleListView;
