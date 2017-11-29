import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import PuzzlePage from './components/PuzzlePage/PuzzlePage';
// import Puzzle from './components/Shared/Puzzle';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    // puzzle: Puzzle
    puzzle: null
  }
}

// runs when a puzzle is selected and changes the state
onSelectHandler = (puzzle) => {
this.setState(
  {puzzle: puzzle}
);
}

// specifies which views will be displayed depending on which data is available
displayCorrectViews = () => {
  if(this.state.puzzle) {
    return (
      <PuzzlePage puzzle={this.state.puzzle}/>
    )
  }
  else {
    return (
      <LandingPage onSelectHandler={this.onSelectHandler} />
    )
  }
}



  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content-wrapper" >
          {this.displayCorrectViews()}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
