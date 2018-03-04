import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import PuzzleList from '../components/Shared/PuzzleList';
import LandingPage from '../components/LandingPage/LandingPage';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage puzzleList={PuzzleList}
                                 appendPuzzleList={App.appendPuzzleList}
                                 onSelectHandler={App.onSelectHandler}
                                 goToBuilder={App.goToBuilder}
                                 validPuzzleNames={[]}/>, div);
});
