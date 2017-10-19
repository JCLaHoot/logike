import React, {Component} from "react";
import Grid from './Grid.js';

// This is useless. ignore it. I use it to copypasta nonsense into the matrix
// cells ={[["some data", "a cat", <h1>an h1</h1>],
//         ["🍇🍍🍉🍐🍉", "🦊🐭🦊🐭🐰🐭", "kinder surprise"],
//         [323, 4324, "fsdfgdsfsadf"]]}

class QuestionZone extends Component {


  constructor(props) {
  super(props);
  this.state = {
  }
}


render() {
  return (
    <div>
This is a question zone ⬇️
      <Grid cells={[[<Grid/>,<Grid/>,<Grid/>],
                  [<Grid/>,<Grid/>,<Grid/>],
                  [<Grid/>,<Grid/>,<Grid/>]]}
                  />
This is a question zone ⬆️
    </div>
  )
}

};

export default QuestionZone;
