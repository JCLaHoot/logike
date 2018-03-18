import React, {Component} from 'react';

// import Modal from '../Shared/Modal';
// import Toast from '../PuzzlePage/Toast';
import FileSaver from 'file-saver';
// import BlobJS from 'blob.js'

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'
import ChoosePuzzleSize from './ChoosePuzzleSize'
import LogicalConditionBuilder from './LogicalConditionBuilder';

import renderLogicalCondition from '../Shared/renderLogicalCondition'



class PuzzleBuilder extends Component {

    defaultPuzzleSize = 3;

    iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


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

    //mixing styling in CSS and here because YOLO 🔥
    warningStyle = {
        color: '#ff1744',
        fontWeight: 'bold'
    };


    render() {
        return (
            <div className="puzzle-builder">

                    <div className="builder-header">
                        <h3>Puzzle Builder</h3>
                        <p>(This is currently under construction <span>🏗</span>️, but you can use it anyway!
                            There's no validation (yet) to stop you from making impossible puzzles <span>😉</span></p>
                        {this.iOS ? <p style={this.warningStyle}>*using the puzzle builder on iOS is NOT recommended</p> : ''}
                    </div>
                    <ChooseEntityList
                        entityLists={this.state.entityLists}
                        selectEntityList={this.selectEntityList}
                        selectedEntityList={this.state.selectedEntityList}/>
                    <div className={`builder-section ${this.state.selectedEntityList ? 'enabled' : ''}`}>
                        {this.state.selectedEntityList
                            ?
                            <ChoosePuzzleSize selectPuzzleSize={this.selectPuzzleSize}
                                              defaultPuzzleSize={this.defaultPuzzleSize}/>
                            :
                            null}
                    </div>
                    <div className={`builder-section ${this.state.puzzleSize ? 'enabled' : ''}`}>
                        {this.state.puzzleSize
                            ?
                            <LogicalConditionBuilder
                                puzzleSize={this.state.puzzleSize}
                                selectedEntityList={this.state.selectedEntityList}
                                sendLogicalConditionsToPuzzleBuilder={this.sendLogicalConditionsToPuzzleBuilder}/>
                            :
                            null}
                    </div>
                    <div className={`builder-section ${this.state.logicalConditions ? 'enabled' : ''}`}>
                        {this.state.logicalConditions
                            ?
                            <div className="save-puzzle-section">
                                <div className="wrap-row logical-condition-list">
                                    {renderLogicalCondition(this.state.logicalConditions, this.state.selectedEntityList)}
                                </div>
                                <h4>What do you want to call your masterpiece?</h4>
                                <input type="text"
                                       onChange={this.puzzleNameChangeHandler}
                                       placeholder="puzzle name"
                                       className={this.state.puzzleName ? 'hasContent' : ''}/>
                                <div>
                                    <button className="button-dark" onClick={this.exportPuzzle} disabled={this.state.puzzleName ? false : true}>
                                        <i className="fa fa-download" aria-hidden="true"></i> Download Puzzle File and Return to Puzzle List
                                    </button>
                                </div>
                            </div>
                            :
                            null}
                    </div>

            </div>
        )
    }


}

export default PuzzleBuilder;
