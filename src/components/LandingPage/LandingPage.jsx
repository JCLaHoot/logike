import React from 'react';

import PuzzleList from '../Shared/PuzzleList.js';
import PuzzleListView from './PuzzleListView'

const LandingPage = ({onSelectHandler}) => {

  return (
    <div className="landing">
      <PuzzleListView puzzleList={PuzzleList} onSelectHandler={onSelectHandler}/>

      <button className="puzzle-builder-button">
        Puzzle Builder
      </button>
    </div>
  )

}

export default LandingPage;
