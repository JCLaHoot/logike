import React, {Component} from "react";
import LogicalCondition from './LogicalCondition.js';
import Grid, {deepMap}  from './Grid.js';



class QuestionZone extends Component {

  constructor({props, puzzleLogic}) {
    super(props);
    this.state = {
      puzzleLogic
    };
  }

// ❔✅❌

  // builds a 2d array of LogicalConditions
  buildLogicalConditions = (puzzleLogic) => {
    return deepMap(puzzleLogic, (puzzleCell, x, y) => {

// converts logicCell values to symbols for the UI
    var visualizeLogicCells = (logicCell, x, y) => {
          switch (logicCell) {
            case null:
              return null;
            case true:
              return "✅";
            case false:
              return "❌";
            default:
              return "";
          }
        }
// returns the UI contents of each puzzleCell (which contails logicCells)
    return (<LogicalCondition
              selectorImg={puzzleCell.selectorImg}
              selectorName={puzzleCell.selectorName}
              cells={deepMap(puzzleCell.logicCells, visualizeLogicCells)}
              />)
    });
  }


  render() {
    return (
        <div className="question-zone">
          This is a question zone ⬇️
          <Grid cells={this.buildLogicalConditions(this.state.puzzleLogic)}/>
          This is a question zone ⬆️
        </div>
    )
  }

};

export default QuestionZone;
