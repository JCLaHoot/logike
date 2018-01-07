import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import LandingPage from '../components/LandingPage/LandingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingPage onSelectHandler={App.onSelectHandler} validPuzzleNames={[]}/>, div);
});
