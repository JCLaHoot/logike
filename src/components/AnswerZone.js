import React, {Component} from "react";

import Grid from './Grid.js';
import SelectorBin from './SelectorBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle}) {
  super(props);
  this.state = {
    puzzle: puzzle
  }
}

dropZoneFactory = () => {
  var cells = [];
  for (var y = 0; y < 3; y++) {
      var row = []
      for (var x = 0; x < 3; x++) {
        row.push(
          <DropZone/>
        )
      }
      cells.push(row);
  }
  return cells
}

render() {
  return (
    <div>
This is an answer zone ⬇️
<SelectorBin puzzle={this.state.puzzle}/>

<br/>
<Grid cells={this.dropZoneFactory()}/>
  <br/>
<button>Validate</button>
<br/>


This is an answer zone ⬆️

    </div>
  )
}

};

export default AnswerZone;
