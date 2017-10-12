import React, {Component} from "react";
import Grid from './Grid.js';



class QuestionZone extends Component {


  constructor(props) {
  super(props);
  this.state = {
  }
}


render() {
  return (
    <div>
    This is a question zone
    <Grid list={[[<Grid/>,<Grid/>,<Grid/>],
                [<Grid/>,<Grid/>,<Grid/>],
                [<Grid/>,<Grid/>,<Grid/>]]}
                />
This is a question zone
    </div>
  )
}

};

export default QuestionZone;
