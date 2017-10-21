import React from "react";

const SelectorBin = ({puzzle}) => {

  const ImageFactory = (puzzle) => {
    return (
      puzzle.map(function(puzzleCell) {
        return (<img
                  key={puzzleCell.selectorName}
                  src={puzzleCell.selectorImg}
                  alt={puzzleCell.selectorName}
                  />)
      })
    );
  }

  return (
    <div>
      {ImageFactory(puzzle)}
    </div>
  );
};

export default SelectorBin;
