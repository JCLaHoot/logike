import React, { Component } from 'react';
import './App.css';

//components
import Header from './components/Header.js';
import QuestionZone from './components/QuestionZone.js';
import AnswerZone from './components/AnswerZone.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <QuestionZone/>
        <AnswerZone/>

there is no footer, this is just plaintext.exe
      </div>
    );
  }
}

export default App;
