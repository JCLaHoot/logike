import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import PuzzlePage from './components/PuzzlePage/PuzzlePage';


import PuzzleList from './components/Shared/PuzzleList.js';

import Puzzle from './components/Shared/Puzzle.js';


class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    puzzle: Puzzle,
  }
}



  render() {
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
        <PuzzlePage puzzle={this.state.puzzle}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
