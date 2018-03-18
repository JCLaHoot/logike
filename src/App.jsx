import React, {Component} from 'react';
import './App.css';


//components
import Header from './components/Header.js';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import PuzzleBuilder from './components/PuzzleBuilder/PuzzleBuilder';
import PuzzlePage from './components/PuzzlePage/PuzzlePage';
import PuzzleList from './components/Shared/PuzzleList';

import {UINames} from './components/Shared/Constants';

// provides dialog on reload... TODO: save data instead
window.onbeforeunload = () => {
    return "Warning: refreshing the page will delete your progress.";
};

// fixes iOS bug
document.addEventListener("touchstart", function () {
}, true);


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            puzzleList: PuzzleList,
            puzzle: null,
            activeInterface: UINames.LANDING_PAGE,
            validPuzzleNames: []
        }
    }

// brings you back to the main menu by clearing the loaded puzzle
    returnToMainMenu = () => {
        this.setState(
            {
                puzzle: null,
                activeInterface: UINames.LANDING_PAGE
            }
        );
    };

    // allows puzzles to be sorted by difficulty
    byDifficulty = (a, b) => {
        if (a.difficulty < b.difficulty) {
            return -1;
        }
        if (a.difficulty > b.difficulty) {
            return 1;
        }
        // a must be equal to b
        return 0;
    };


    // adds to the puzzle list (from an upload, or the puzzle builder)
    appendPuzzleList = (puzzle) => {
        let newPuzzleList = this.state.puzzleList;
        newPuzzleList.push(puzzle);
        newPuzzleList.sort(this.byDifficulty);
        console.log(newPuzzleList);
        this.setState({puzzleList: newPuzzleList});
    }


// runs when a puzzle is selected and changes the state
    onSelectHandler = (puzzle) => {
        this.setState(
            {puzzle: puzzle}
        );
    };

    goToBuilder = () => {
        this.setState(
            {activeInterface: UINames.PUZZLE_BUILDER}
        );
    };

// takes the provided puzzle and then begins the next one in the list.
    nextPuzzle = (completedPuzzle) => {

        var currentIndex = this.state.puzzleList.findIndex((puzzle) => {
            return puzzle.name === completedPuzzle.name;
        });

        if (currentIndex + 1 < this.state.puzzleList.length) {
            this.setState(
                {puzzle: this.state.puzzleList[currentIndex + 1]}
            );
        }
        else {
            console.log("you completed all the puzzles!");
        }
    };

// takes note of which puzzles are done
    logPuzzleCompletion = (puzzle) => {
        var newValidPuzzleNames = this.state.validPuzzleNames;
        if (!newValidPuzzleNames.includes(puzzle.name)) {
            newValidPuzzleNames.push(puzzle.name);
            this.setState({validPuzzleNames: newValidPuzzleNames});
        }
    };


// specifies which views will be displayed depending on which data is available
    displayCorrectViews = (puzzle) => {
        if (puzzle) {
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
            if (this.state.activeInterface === UINames.LANDING_PAGE) {
                return (
                    <LandingPage
                        puzzleList={this.state.puzzleList}
                        onSelectHandler={this.onSelectHandler}
                        appendPuzzleList={this.appendPuzzleList}
                        validPuzzleNames={this.state.validPuzzleNames}
                        goToBuilder={this.goToBuilder}
                    />
                )
            }
            if (this.state.activeInterface === UINames.PUZZLE_BUILDER) {
                return (
                    <PuzzleBuilder
                        appendPuzzleList={this.appendPuzzleList}
                        returnToMainMenu={this.returnToMainMenu}
                    />
                )
            }

        }
    };


    render() {
        return (
            <div className="App">
                <Header returnToMainMenu={this.returnToMainMenu}/>
                <div className="content-wrapper">
                    {this.displayCorrectViews(this.state.puzzle)}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
