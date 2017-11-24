import React from 'react';

import QuestionZone from './QuestionZone/QuestionZone.js';
import AnswerZone from './AnswerZone/AnswerZone.js';


const PuzzlePage = ({puzzle}) => {

    return (
        <div className="puzzle-page">
          <div className="float-wrapper">
            <QuestionZone puzzle={puzzle}/>
            <AnswerZone puzzle={puzzle}/>
          </div>
        </div>
    )

};

export default PuzzlePage;
