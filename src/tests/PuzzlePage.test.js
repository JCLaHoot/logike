import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import PuzzlePage from '../components/PuzzlePage/PuzzlePage';

import PuzzleList from '../components/Shared/PuzzleList'

PuzzleList.map((puzzle) => {
  test(`${puzzle.name} renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<PuzzlePage puzzle={puzzle}/>, div);
  });
})
