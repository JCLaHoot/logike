import React from 'react';

const PuzzleListItem = ({puzzle, onSelectHandler, isValidated}) => {

  return (
    <a
      onClick={()=>{
        onSelectHandler(puzzle);
      }}
      className="button-wrapper">
      <h5 className={`puzzle-name ${isValidated ? 'validated' : ''}`}>
        <i className="fa fa-check-square" aria-hidden="true"></i>
        &nbsp;
        {puzzle.name}
      </h5>
    </a>
  )

}

export default PuzzleListItem;
