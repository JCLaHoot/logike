import React, {Component} from 'react';

// import Modal from '../Shared/Modal';
// import Toast from '../PuzzlePage/Toast';
import FileSaver from 'file-saver';
// import BlobJS from 'blob.js'

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'
import ChoosePuzzleSize from './ChoosePuzzleSize'
import LogicalConditionBuilder from './LogicalConditionBuilder';


class PuzzleBuilder extends Component {

    defaultPuzzleSize = 3;


    constructor({props, appendPuzzleList, returnToMainMenu}) {
        super(props);
        this.state = {
            entityLists: EntityLists,
            selectedEntityList: null,
            puzzleSize: null, //must be formatted as a plain object with x and y as keys
            logicalConditions: null, //array of logical conditions expected
            puzzleName: null
        }
    }

    //sets the selected entity list on click
    selectEntityList = (entityList) => {
        console.log(entityList);

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

    // allows the logical condition to be passed up to the puzzle builder
    sendLogicalConditionsToPuzzleBuilder = (logicalConditions) => {
        this.setState({logicalConditions: logicalConditions});
    };

    puzzleNameChangeHandler = (event) =>{
        var text = event.target.value;
        this.setState({puzzleName: text});
    };

    //exports the puzzle as JSON and pushes it into the puzzle list
    exportPuzzle = () => {
        let puzzle = {
            name: this.state.puzzleName,
            entitySetID: this.state.selectedEntityList.ID,
            logic: this.state.logicalConditions,
            size: this.state.puzzleSize
        };
        this.props.appendPuzzleList(puzzle);

        //downloads the puzzle as a JSON file
        let blob = new Blob([JSON.stringify(puzzle)], {type: "application/json;charset=utf-8"});
        FileSaver.saveAs(blob, `puzzle-${this.state.puzzleName}.json`);

        //returns to the menu
        this.props.returnToMainMenu();
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
                            selectedEntityList={this.state.selectedEntityList}
                            sendLogicalConditionsToPuzzleBuilder={this.sendLogicalConditionsToPuzzleBuilder}/>
                        :
                        null}
                    {this.state.logicalConditions
                        ?
                        <div>
                            <h4>What do you want to call your masterpiece?</h4>
                            <br/>
                            <input type="text" onChange={this.puzzleNameChangeHandler}/>
                            <br/>
                            <button onClick={this.exportPuzzle}>Download Puzzle File and Return to Puzzle List</button>
                        </div>
                        :
                        null}
                </div>
            </div>
        )
    }


}

export default PuzzleBuilder;
