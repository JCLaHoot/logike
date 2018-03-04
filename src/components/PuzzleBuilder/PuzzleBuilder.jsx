import React, {Component} from 'react';

// import Modal from '../Shared/Modal';
// import Toast from '../PuzzlePage/Toast';

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'
import ChoosePuzzleSize from './ChoosePuzzleSize'
import LogicalConditionBuilder from './LogicalConditionBuilder';


class PuzzleBuilder extends Component {

    defaultPuzzleSize = 3;


    constructor({props}) {
        super(props);
        this.state = {
            entityLists: EntityLists,
            selectedEntityList: null,
            puzzleSize: null //must be formatted as a plain object with x and y as keys
        }
    }

    //sets the selected entity list on click
    selectEntityList = (entityList) => {
        this.setState({
            selectedEntityList: entityList
        });
    };

    //sets the size of the puzzle on slider change
    selectPuzzleSize = (x, y) => {
        this.setState({
            puzzleSize: {
                x: x,
                y: y
            }
        });
    };


    render() {
        return (
            <div className="puzzle-builder">
                <div className="float-wrapper">
                    <h3>Puzzle Builder</h3>
                    <p>(This is currently under construction <span>🏗</span>️, but you can check it out anyway)</p>
                    <br/>
                    <ChooseEntityList
                        entityLists={this.state.entityLists}
                        selectEntityList={this.selectEntityList}
                        selectedEntityList={this.state.selectedEntityList}/>
                    <br/>
                    {this.state.selectedEntityList
                        ?
                        <ChoosePuzzleSize selectPuzzleSize={this.selectPuzzleSize}
                                          defaultPuzzleSize={this.defaultPuzzleSize}/>
                        :
                        null}
                    {this.state.puzzleSize
                        ?
                        <LogicalConditionBuilder
                            puzzleSize={this.state.puzzleSize}
                            selectedEntityList={this.state.selectedEntityList}/>
                        :
                        null}


                </div>
            </div>
        )
    }


}

export default PuzzleBuilder;
