import React, {Component} from 'react';
import FlexGrid from '../Shared/FlexGrid';


const defaultSliderValue = 3;

class LogicalConditionBuilder extends Component {


  constructor({props}) {
    super(props);
    this.state = {

    }
  }

  getGridCells = () => {
    var cells = [];
    for (var y = 0; y < this.state.y; y++) {
        var row = [];
        for (var x = 0; x < this.state.x; x++) {
          row.push(null); //nothing in grid. grid size is adjusted via CSS
        };
        cells.push(row);
    };
    return cells;
  }


  render() {
    return (
      <div className="logical-condition-builder">
        <h4>Create Logical Conditions</h4>
        <div>
          Logical Condition List
        </div>
        <button><i className="fa fa-plus" aria-hidden="true">
      </i></button>

      </div>
    )
  }



}

export default LogicalConditionBuilder;
