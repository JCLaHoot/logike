import React, {Component} from 'react';

import QuestionZone from './QuestionZone/QuestionZone.js';
import AnswerZone from './AnswerZone/AnswerZone.js';
import Modal from '../Shared/Modal';
import Toast from './Toast';


class PuzzlePage extends Component {

    constructor({props, puzzle, returnToMainMenu, nextPuzzle, logPuzzleCompletion}) {
        super(props);
        this.state = {
            puzzle: puzzle,
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
        return (
            <div className="puzzle-page">
                <div className="float-wrapper">
                    <QuestionZone puzzle={this.state.puzzle}/>
                    <AnswerZone
                        puzzle={this.state.puzzle}
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
