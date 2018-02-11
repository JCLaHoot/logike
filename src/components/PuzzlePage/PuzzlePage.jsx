import React, {Component} from 'react';

import EntityLists from '../Shared/EntityLists';
import {getPuzzleEntities} from '../Shared/EntityHelpers';

import QuestionZone from './QuestionZone/QuestionZone.js';
import AnswerZone from './AnswerZone/AnswerZone.js';
import Modal from '../Shared/Modal';
import Toast from './Toast';


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

        // renders the text for the tutorial if the puzzle is a tutorial.
        // tutorial text fields may be null
        var isTutorial = this.state.puzzle.isTutorial;
        var questionZoneTutorialText;
        var ansZoneTutorialText;
        if(isTutorial) {
            questionZoneTutorialText = (
                <div className={"question-zone-text"}>
                    <h5>{this.state.puzzle.tutorialQuestionHeader}</h5>
                    <p>{this.state.puzzle.tutorialQuestionBody}</p>
                </div>
            );
            ansZoneTutorialText = (
                <div className={"answer-zone-text"}>
                    <p>{this.state.puzzle.tutorialAnswerBody}</p>
                </div>
            );
        }

        return (
            <div className="puzzle-page">
                <div className="float-wrapper">
                    <QuestionZone puzzle={this.state.puzzle}
                                  entities={this.state.entities}
                                  textContent={isTutorial ? questionZoneTutorialText: null}/>
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
