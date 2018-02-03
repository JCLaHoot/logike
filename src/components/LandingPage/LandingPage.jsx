import React from 'react';

import PuzzleList from '../Shared/PuzzleList.js';
import PuzzleListView from './PuzzleListView'

const LandingPage = ({onSelectHandler, validPuzzleNames, goToBuilder}) => {

    let img = '/assets/' + 'colour_shapes@2x' + '.png';

    return (
        <div className="float-wrapper">
            <div className="landing landing-modal">
                <div className="modal-content">
                    <PuzzleListView
                        puzzleList={PuzzleList}
                        onSelectHandler={onSelectHandler}
                        validPuzzleNames={validPuzzleNames}
                    />

                    <button onClick={goToBuilder}>
                        <p><i className="fa fa-cubes" aria-hidden="true"></i> Puzzle Builder (coming soon)</p>
                    </button>

                </div>
                <img src={img} alt=""/>

            </div>
        </div>

    )

};

export default LandingPage;
