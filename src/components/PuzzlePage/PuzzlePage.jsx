import React from 'react';

import QuestionZone from './QuestionZone/QuestionZone.js';
import AnswerZone from './AnswerZone/AnswerZone.js';
import Modal from '../Shared/Modal';


const PuzzlePage = ({puzzle}) => {

    return (
        <div className="puzzle-page">
          <div className="float-wrapper">
            <QuestionZone puzzle={puzzle}/>
            <AnswerZone puzzle={puzzle}/>
          </div>
          <Modal
              title="Congratulations!"
              content="You beat the puzzle! You must be really smart! Blablablablabla"
              affirmativeText="Next Puzzle"
              dismissiveText="Main Menu"
              />
        </div>
    )

};

export default PuzzlePage;
