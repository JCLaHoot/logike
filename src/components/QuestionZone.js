import React, {Component} from "react";
import Grid from './Grid.js';

// This is useless. ignore it. I use it to copypasta nonsense into the matrix
// list ={[["some data", "a cat", <h1>an h1</h1>],
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
      <Grid list={[[<Grid/>,<Grid/>,<Grid/>],
                  [<Grid/>,<Grid/>,<Grid/>],
                  [<Grid/>,<Grid/>,<Grid/>]]}
                  />
                  this is trash meant to make Paolo cringe ⬇️
      <Grid list={[["wow", "this", "CSS"],
                  [null,"is", null, "the", null, "💣", ],
                  ["dot", null, "calm.", <Grid list={[["wow", "this", "CSS"],
                              [null,"is", null, "the", null, "💣"],
                              ["dot", null, "calm.", <Grid list={[["wow", "this", "CSS"],
                                          [null,"is", null, "the", null, "💣"],
                                          ["dot", null, "calm.", <Grid list={[["wow", "this", "CSS"],
                                                      [null,"is", null, "the", null, "💣"],
                                                      ["dot", null, "calm."]]}/>]]}/>]]}/>]]}/>
                                                      this is trash meant to make Paolo cringe ⬆️
                                                      <br/>

This is a question zone ⬆️
    </div>
  )
}

};

export default QuestionZone;
