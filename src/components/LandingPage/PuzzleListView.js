import React from 'react';

import PuzzleListItem from './PuzzleListItem';

const PuzzleListView = ({puzzleList, onSelectHandler}) => {

  const PuzzleListItems = puzzleList.map((puzzle) => {
    return (<PuzzleListItem key={puzzle.name} puzzle={puzzle} onSelectHandler={onSelectHandler}/>);
  })

  return (
    <div className="puzzle-list">
      <h2>Select a puzzle</h2>
      {PuzzleListItems}
    </div>
  )

}

export default PuzzleListView;
