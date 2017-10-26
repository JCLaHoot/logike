import React, {Component} from "react";

import Grid from './Grid.js';
import EntityBin from './EntityBin.js';
import DropZone from './DropZone.js';

class AnswerZone extends Component {

  constructor({props, puzzle, entities}) {
  super(props);
  this.state = {
    puzzle: puzzle,
    entities: entities
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

// TODO: EntityBin needs to be populated using the puzzle, to get the right # of entities.
render() {
  return (
    <div>
This is an answer zone ⬇️
<EntityBin entities={this.state.entities}/>

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
