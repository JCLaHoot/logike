import React from 'react';

import PuzzleList from '../Shared/PuzzleList.js';
import PuzzleListView from './PuzzleListView'

import background from '../../assets/colour_shapes@2x.png'

const LandingPage = ({onSelectHandler, validPuzzleNames}) => {

  return (
    <div className="float-wrapper">
      <div className="landing landing-modal">
        <div className="modal-content">
          <PuzzleListView
            puzzleList={PuzzleList}
            onSelectHandler={onSelectHandler}
            validPuzzleNames={validPuzzleNames}
          />

          <button >
            <p><i className="fa fa-cubes" aria-hidden="true"></i> Puzzle Builder (coming soon)</p>
          </button>

        </div>
        <img src={background} alt=""/>

      </div>
    </div>

  )

}

export default LandingPage;
