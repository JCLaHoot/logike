import React from 'react';

const PuzzleListItem = ({puzzle, onSelectHandler}) => {

  return (
    <div onClick={()=>{
        onSelectHandler(puzzle);
      }}>
      <h5 className="puzzle-name">{puzzle.name}</h5>
    </div>
  )

}

export default PuzzleListItem;
