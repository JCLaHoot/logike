import React, {Component} from 'react';

import EntityLists from '../Shared/EntityLists';
import {getPuzzleEntities} from '../Shared/EntityHelpers';

import QuestionZone from './QuestionZone/QuestionZone.js';
import AnswerZone from './AnswerZone/AnswerZone.js';
import Modal from '../Shared/Modal';
import Toast from './Toast';


const questionZoneTutorialText = (
    <div className={"question-zone-text"}>
        <h5>Welcome to Logike!</h5>
        <p>The cards below represent logical conditions.
            All of them must be "true" in order to solve the puzzle.</p>
    </div>
);
const ansZoneTutorialText = (
    <div className={"answer-zone-text"}>
        <p>Drag the shapes onto the board below in order to satisfy the logical conditions.</p>
        <p>Hint: the red square goes in the top-left corner...</p>

    </div>
);


class PuzzlePage extends Component {

    constructor({props, puzzle, returnToMainMenu, nextPuzzle, logPuzzleCompletion}) {
        super(props);
        this.state = {
            puzzle: puzzle,
            entities: getPuzzleEntities(puzzle, EntityLists),
            returnToMainMenu: returnToMainMenu,
            nextPuzzle: nextPuzzle,
            logPuzzleCompletion: logPuzzleCompletion,
            toastContents: {
                toastMessage: "potato",
                show: false
            },
            modalContents: {
                title: null,
                content: null,
                affirmativeText: null,
                dismissiveText: null,
                affirmativeAction: null,
                dismissiveAction: null,
                show: false
            }
        }

    }



    showToast = (toastMessage) => {
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
        }, 3000);


    };

    updateModal = (modalContents) => {
        this.setState({modalContents: modalContents});
    };

    closeModal = () => {
        var modalContents = this.state.modalContents;
        modalContents.show = false;
        this.setState({modalContents: modalContents});
    };

    render() {
        var isTutorial = false;
        if(this.state.puzzle.name === "Tutorial 🍼") {
            isTutorial = true;
        }

        return (
            <div className="puzzle-page">
                <div className="float-wrapper">
                    <QuestionZone puzzle={this.state.puzzle}
                                  entities={this.state.entities}
                                  textContent={isTutorial ? questionZoneTutorialText : null}/>
                    <AnswerZone
                        puzzle={this.state.puzzle}
                        entities={this.state.entities}
                        textContent={ isTutorial ? ansZoneTutorialText : null}
                        updateModal={this.updateModal}
                        closeModal={this.closeModal}
                        returnToMainMenu={this.state.returnToMainMenu}
                        nextPuzzle={this.state.nextPuzzle}
                        logPuzzleCompletion={this.state.logPuzzleCompletion}
                        showToast={this.showToast}
                    />
                </div>
                <Toast show={this.state.toastContents.show} toastMessage={this.state.toastContents.toastMessage}/>
                {Modal(this.state.modalContents, this.closeModal)}
            </div>
        )
    }


}

export default PuzzlePage;
