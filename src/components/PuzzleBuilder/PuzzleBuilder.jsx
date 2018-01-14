import React, {Component} from 'react';

import Modal from '../Shared/Modal';
import Toast from '../PuzzlePage/Toast';

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'


class PuzzleBuilder extends Component {

  constructor({props}) {
    super(props);
    this.state = {
      entityLists: EntityLists,
      selectedEntityList: null
    }
  }

  selectEntityList = (entityList) => {
    console.log(entityList);
    this.setState({
      selectedEntityList: entityList
    });
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
          </div>
        </div>
    )
  }


};

export default PuzzleBuilder;
