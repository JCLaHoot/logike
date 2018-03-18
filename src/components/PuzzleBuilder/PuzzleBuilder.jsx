import React, {Component} from 'react';

// import Modal from '../Shared/Modal';
import Toast from '../PuzzlePage/Toast';
import FileSaver from 'file-saver';
import _ from 'lodash';
// import BlobJS from 'blob.js'

import EntityLists from '../Shared/EntityLists'
import ChooseEntityList from './ChooseEntityList'
import ChoosePuzzleSize from './ChoosePuzzleSize'
import LogicalConditionBuilder from './LogicalConditionBuilder';

import renderLogicalCondition from '../Shared/renderLogicalCondition'



class PuzzleBuilder extends Component {

    defaultPuzzleSize = 2;

    iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


    constructor({props, appendPuzzleList, returnToMainMenu}) {
        super(props);
        this.state = {
            toastContents: {
                toastMessage: "potato",
                show: false
            },
            entityLists: EntityLists,
            selectedEntityList: null,
            puzzleSize: null, //must be formatted as a plain object with x and y as keys
            logicalConditions: null, //array of logical conditions expected
            puzzleName: null,
            puzzleDifficulty: 5
        }
    }

    showToast = (toastMessage, timeout) => {
        this.setState({
            toastContents: {
                toastMessage: toastMessage,
                show: true
            }
        });

        setTimeout(() => {
            this.setState({
                toastContents: {
                    toastMessage: toastMessage,
                    show: false
                }
            });
        }, timeout);
    };

    //sets the selected entity list on click
    selectEntityList = (entityList) => {
        // if the entity list is changed and logical conditions have been made, display a warning.
        if(this.state.logicalConditions
            &&
            this.state.selectedEntityList !== entityList) {
            this.showToast("Entity list changed: logical conditions have been reset", 5000)
        }

        //  not all entity lists are the same length, so this checks that the list change is possible
        if(this.state.puzzleSize && (this.state.puzzleSize.x * this.state.puzzleSize.y) > entityList.list.length) {
            _.throttle(this.showToast, 6000)("Puzzle is too big to fit all of the entities 😢 it will be impossible to solve!", 5000);

        }

        this.setState({
            selectedEntityList: entityList,
            //resets the rest of the puzzle data to prevent impossible puzzles
            logicalConditions: null,
            puzzleName: null,
            puzzleDifficulty: 5
        });

    };

    //sets the size of the puzzle on slider change
    selectPuzzleSize = (x, y) => {
        this.setState({
            puzzleSize: {
                x: x,
                y: y
            },
            //resets the rest of the puzzle data
            logicalConditions: null,
            puzzleName: null,
            puzzleDifficulty: 5
        });

        // if there's no space for all of the entities, show a toast as a warning for that
        if((x * y) > this.state.selectedEntityList.list.length) {

            _.throttle(this.showToast, 6000)("Puzzle is too big to fit all of the entities 😢 it will be impossible to solve!", 5000);

        }
        else if ((x * y) <= this.state.selectedEntityList.list.length) {
            this.setState({
                toastContents: {
                    toastMessage: null,
                    show: false
                }
            })
        }

        // if the size is changed and logical conditions have been made, display a warning.
        if(this.state.logicalConditions
            &&
            this.state.puzzleSize !== {
                x: x,
                y: y
            }) {
            this.showToast("Puzzle size changed: logical conditions have been reset", 5000)
        }

    };

    // allows the logical condition to be passed up to the puzzle builder
    sendLogicalConditionsToPuzzleBuilder = (logicalConditions) => {
        if(!this.state.logicalConditions) {
            this.setState({logicalConditions: [logicalConditions]});
        }
        else {
            let newLogicalConditions = this.state.logicalConditions.slice();
            newLogicalConditions.push(logicalConditions);
            this.setState({logicalConditions: newLogicalConditions});

        }
    };

    puzzleNameChangeHandler = (event) =>{
        var text = event.target.value;
        this.setState({puzzleName: text});
    };

    setDifficulty = (event) => {
        let difficulty = parseInt(event.target.value, 10);
        this.setState({puzzleDifficulty: difficulty});
    };

    //exports the puzzle as JSON and pushes it into the puzzle list
    exportPuzzle = () => {
        let puzzle = {
            name: this.state.puzzleName,
            entitySetID: this.state.selectedEntityList.ID,
            logic: this.state.logicalConditions,
            size: this.state.puzzleSize,
            difficulty: this.state.puzzleDifficulty
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
                                logicalConditions-={this.state.logicalConditions}
                                sendLogicalConditionsToPuzzleBuilder={this.sendLogicalConditionsToPuzzleBuilder}/>
                            :
                            null}
                    </div>
                    {/*OPTIMIZE: create new JS file for this section*/}
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
                                <h4>How difficult is it?</h4>
                                <div className="difficulty-picker">
                                    <h4>🍼</h4>
                                    <input type="range" min="0" defaultValue="5"  max="10" className="slider horizontal-slider"
                                           onInput={this.setDifficulty}
                                    />
                                    <h4>🔥</h4>
                                </div>

                                <div>
                                    <button className="button-dark" onClick={this.exportPuzzle} disabled={this.state.puzzleName ? false : true}>
                                        <i className="fa fa-download" aria-hidden="true"></i> Download Puzzle File and Return to Puzzle List
                                    </button>
                                </div>

                            </div>
                            :
                            null}
                    </div>
                <Toast show={this.state.toastContents.show} toastMessage={this.state.toastContents.toastMessage}/>


            </div>
        )
    }


}

export default PuzzleBuilder;
