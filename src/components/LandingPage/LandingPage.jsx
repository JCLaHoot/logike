import React from 'react';

import PuzzleListView from './PuzzleListView'

const LandingPage = ({puzzle}) => {

  return (
    <div>
      <PuzzleListView/>

      <button>
        Puzzle Builder
      </button>
    </div>
  )

}

export default LandingPage;
