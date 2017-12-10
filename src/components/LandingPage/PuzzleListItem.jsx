import React from 'react';

const PuzzleListItem = ({puzzle, onSelectHandler, isValidated}) => {

  return (
    <div onClick={()=>{
        onSelectHandler(puzzle);
      }}>
      <h5 className={`puzzle-name ${isValidated ? 'validated' : ''}`}>
        <i className="fa fa-check-square" aria-hidden="true"></i>
        &nbsp;
        {puzzle.name}
      </h5>
    </div>
  )

}

export default PuzzleListItem;
