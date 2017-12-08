import React, { Component } from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import PuzzlePage from './components/PuzzlePage/PuzzlePage';
import PuzzleList from './components/Shared/PuzzleList';

// provides dialog on reload... TODO: save data instead
window.onbeforeunload = (event) => {
  return "Warning: refreshing the page will delete your progress.";
};

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    puzzle: null,
    validPuzzleNames: []
  }
}

// brings you back to the main menu by clearing the loaded puzzle
returnToMainMenu = () => {
  this.setState(
    {puzzle: null}
  );
}

// runs when a puzzle is selected and changes the state
onSelectHandler = (puzzle) => {
this.setState(
  {puzzle: puzzle}
);
}

// takes the provided puzzle and then begins the next one in the list.
nextPuzzle = (completedPuzzle) => {

var currentIndex = PuzzleList.findIndex((puzzle) => {
  return puzzle.name === completedPuzzle.name;
})

if(currentIndex + 1 < PuzzleList.length) {
  this.setState(
    {puzzle: PuzzleList[currentIndex + 1]}
  );
}
else {
  console.log("you completed all the puzzles!");
}
}

// takes note of which puzzles are done
logPuzzleCompletion = (puzzle) => {
  var newValidPuzzleNames = this.state.validPuzzleNames;
  if(!newValidPuzzleNames.includes(puzzle.name)) {
    newValidPuzzleNames.push(puzzle.name);
    this.setState({validPuzzleNames : newValidPuzzleNames});
  }
}

// specifies which views will be displayed depending on which data is available
displayCorrectViews = (puzzle) => {
  if(puzzle) {
    return (
      <PuzzlePage
        puzzle={puzzle}
        returnToMainMenu={this.returnToMainMenu}
        nextPuzzle={this.nextPuzzle}
        logPuzzleCompletion={this.logPuzzleCompletion}

      />
    )
  }
  else {
    return (
      <LandingPage
        onSelectHandler={this.onSelectHandler}
        validPuzzleNames={this.state.validPuzzleNames}
      />
    )
  }
}



  render() {
    return (
      <div className="App">
        <Header returnToMainMenu={this.returnToMainMenu}/>
        <div className="content-wrapper" >
          {this.displayCorrectViews(this.state.puzzle)}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
