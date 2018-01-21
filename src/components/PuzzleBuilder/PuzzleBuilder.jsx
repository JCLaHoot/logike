import React, {Component} from 'react';

import Modal from '../Shared/Modal';
import Toast from '../PuzzlePage/Toast';

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'
import ChoosePuzzleSize from './ChoosePuzzleSize'
import LogicalConditionBuilder from './LogicalConditionBuilder';


class PuzzleBuilder extends Component {


  constructor({props}) {
    super(props);
    this.state = {
      entityLists: EntityLists,
      selectedEntityList: null,
      puzzleSize: { x: null,
                    y: null }
    }
  }


  selectEntityList = (entityList) => {
    console.log(entityList);
    this.setState({
      selectedEntityList: entityList
    });
  }

  selectPuzzleSize = (x, y) => {
    this.setState({
      puzzleSize: { x: x,
                    y: y }
    });
    console.log(x,y);

  }


  render() {
    return (
        <div className="puzzle-builder">
          <div className="float-wrapper">
            <h3>Puzzle Builder</h3>
            <ChooseEntityList
              entityLists={this.state.entityLists}
              selectEntityList={this.selectEntityList}
              selectedEntityList={this.state.selectedEntityList}/>
            <ChoosePuzzleSize selectPuzzleSize={this.selectPuzzleSize}/>
            <LogicalConditionBuilder/>
          </div>
        </div>
    )
  }


};

export default PuzzleBuilder;
