import React, {Component} from "react";

import Grid from './Grid.js';
import SelectorBin from './SelectorBin.js';

class AnswerZone extends Component {

  constructor({props, puzzle}) {
  super(props);
  this.state = {
    puzzle: puzzle
  }
}

render() {
  return (
    <div>
This is an answer zone ⬇️
<SelectorBin puzzle={this.state.puzzle}/>

<br/>
<Grid/>
  <br/>
<button>Validate</button>
<br/>


This is an answer zone ⬆️

    </div>
  )
}

};

export default AnswerZone;
