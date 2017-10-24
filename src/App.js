import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import QuestionZone from './components/QuestionZone.js';
import AnswerZone from './components/AnswerZone.js';

import Puzzle from './components/Puzzle.js';


class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    puzzle:Puzzle
  }
}


  render() {
    return (
      <div className="App">
        <Header/>
        <QuestionZone puzzle={this.state.puzzle}/>
        <AnswerZone puzzle={this.state.puzzle}/>

there is no footer, this is just plaintext.exe
      </div>
    );
  }
}

export default App;
