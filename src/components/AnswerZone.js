import React, {Component} from "react";
import Grid from './Grid.js';

class AnswerZone extends Component {

  constructor(props) {
  super(props);
  this.state = {
  }
}

render() {
  return (
    <div>
This is an answer zone ⬇️

<br/>
<br/>
<Grid/>
<br/>


This is an answer zone ⬆️

    </div>
  )
}

};

export default AnswerZone;
