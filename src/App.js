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

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
