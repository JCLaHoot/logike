import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import QuestionZone from './components/QuestionZone.js';
import AnswerZone from './components/AnswerZone.js';

import Puzzle, {entities} from './components/Puzzle.js';


class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    puzzle:Puzzle,
    entities: entities
  }
}


  render() {
    return (
      <div className="App">
        <Header/>
        <div className="group">
          <QuestionZone puzzle={this.state.puzzle}/>
          <AnswerZone puzzle={this.state.puzzle}
                      entities={this.state.entities}/>
        </div>


there is no footer, this is just plaintext.exe
      </div>
    );
  }
}

export default App;
