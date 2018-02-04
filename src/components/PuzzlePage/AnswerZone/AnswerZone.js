import React, {Component} from "react";
import {
    deepMap,
    deepEvery
}
    from '../../Shared/TwoDimensionalMethods.js';
import {
    normalizeLogic,
    validateAnswer
}
    from './Validation';

import FlexGrid from '../../Shared/FlexGrid.js';
import DropContainer from './DropContainer';
import DraggableEntityPreview from './DraggableEntityPreview';
import {DragDropContext} from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

class AnswerZone extends Component {

    constructor({props, puzzle, entities, textContent, showToast, updateModal, closeModal, returnToMainMenu, nextPuzzle, logPuzzleCompletion}) {
        super(props);
        this.state = {
            puzzle: puzzle,
            entities: entities,
            validAns: null,
            entityBin: {
                id: "entity-bin",
                contents: entities.list.map((entity) => {
                    return {
                        name: entity.name,
                        img: entity.img
                    }
                })
            },
            containers: this.dropContainerFactory(puzzle),
            showToast: showToast,
            updateModal: updateModal,
            closeModal: closeModal,
            returnToMainMenu: returnToMainMenu,
            nextPuzzle: nextPuzzle,
            logPuzzleCompletion: logPuzzleCompletion

        }
        // console.log("puzzle: ", this.state.puzzle);
    }

// creates a 2d array that contains all of the puzzle cells.
    dropContainerFactory = (puzzle) => {
        var cells = [];
        for (var y = 0; y < puzzle.size.y; y++) {
            var row = [];
            for (var x = 0; x < puzzle.size.x; x++) {
                row.push(
                    {
                        id: `drop-container-${x}-${y}`,
                        location: {x: x, y: y},
                        contents: []
                    }
                );
            }
            cells.push(row);
        }
        return cells;
    };

    componentDidMount() {
        // normalizing the logic upfront saves time when validating
        var newLogic = normalizeLogic(this.state.puzzle, this.state.entities);
        this.setState(this.state.puzzle.logic : newLogic);
    }

// resets the puzzle so that you can complete it again
    resetPuzzle = () => {
        this.setState({
            validAns: null,
            entityBin: {
                id: "entity-bin",
                contents: this.state.entities.list.map((entity) => {
                    return {
                        name: entity.name,
                        img: entity.img
                    }
                })
            },
            containers: this.dropContainerFactory(this.state.puzzle)
        });
    };


    // Runs when an item is dropped into the drop zone.
    onDrop = (container, entity) => {
        var droppedItemName = entity.name;
        var dropZoneLocation = container.location; //Where the item is being dragged TO
        var oldLocation = entity.oldLocation; //Where the item was dragged FROM

        // if item isn't going anywhere, there's nothing to do in most cases.
        if (dropZoneLocation === oldLocation) {
            return;
        }

        // allows dragged items to be swapped
        var dropZoneOccupied = false;
        var EntityToSwap;
        if (container.contents.length > 0 && dropZoneLocation !== "entity-bin") {
            dropZoneOccupied = true;
            EntityToSwap = container.contents[0];
        }

        // Recreates the data structure of the entity-bin
        var newEntityBin = this.state.entityBin;
        if (dropZoneLocation === "entity-bin") {
            newEntityBin.contents.push(entity);
        } else {
            var newContents = newEntityBin.contents.filter((entity) => {
                return entity.name !== droppedItemName; //filters out the dragged item
            });
            if (dropZoneOccupied && oldLocation === "entity-bin") {     // allows dragged items to be swapped
                newContents.push(EntityToSwap);
            }
            newEntityBin.contents = newContents;
        }

        // Recreates the data structure of the containers, depending on where you move them.
        var newContainers = deepMap(this.state.containers, (container) => {
            var newContents;
            if (container.location === oldLocation) { // removes dropped item from container it was dragged FROM
                newContents = container.contents.filter((entity) => {
                    return entity.name !== droppedItemName; //filters out the dragged item
                });
                if (dropZoneOccupied) { // allows dragged items to be swapped
                    newContents.push(EntityToSwap);
                }
                container.contents = newContents;
                return container;
            }
            else if (container.location === dropZoneLocation) { // adds dropped item to container it's being dragged TO
                newContents = container.contents;
                newContents.push(entity);
                if (dropZoneOccupied) {  // allows dragged items to be swapped
                    newContents = newContents.filter((entity) => {
                        return entity.name !== EntityToSwap.name;
                    })
                }
                container.contents = newContents;
                return container;
            }
            else { // cases where container is unchanged
                return container;
            }
        });

        // updates the state to then update the DOM
        this.setState({
            entityBin: newEntityBin,
            containers: newContainers
        })
    };

    // var used as an easter egg if validate is spammed
    emptyCount = 0;

    // helper used to randomize strings
    // TODO: move to helper js file once if used again outside of ansZone
    drawFrom = (textArray) => {
        var randomNumber = Math.floor(Math.random() * textArray.length);
        return textArray[randomNumber];
    };


    // validates the answer that the user has entered and makes the appropriate UI changes
    runValidation = () => {

        // TODO add alert to fill in additional spaces
        // checks to make sure that all eColoredShapes have been placed
        // also shows a different message if user keeps spamming the button.
        var allFilled = deepEvery(this.state.containers, (container) => {
            this.emptyCount = 0;
            return container.contents.length > 0;
        });
        if (!allFilled) {
            this.emptyCount++;
            if (this.emptyCount > 50) {
                this.state.showToast("Are you trying to break my app? 🤔");
                return;
            }
            if (this.emptyCount > 30) {
                this.state.showToast("Why are you doing this?");
                return;
            }
            if (this.emptyCount > 15) {
                this.state.showToast("Stop Spamming this button!");
                return;
            }
            this.state.showToast(this.drawFrom(["Some blocks haven't been placed!",
                "Are you forgetting something?",
                "Some spaces are still empty!"]
            ));
            return;
        }

        // does all of the heavy lifting for the validation.
        var valid = validateAnswer(this.state.puzzle, this.state.entities, this.state.containers);


        this.setState({validAns: valid});

        if (valid) {
            this.state.logPuzzleCompletion(this.state.puzzle);
        }

        // resets the puzzle then closes the modal
        var resetAndClose = () => {
            this.resetPuzzle();
            this.state.closeModal();
        };

        // TODO: use this instead of going back to menu after valid
        // var closeAndNext = () => {
        //   this.state.closeModal();
        //   this.state.nextPuzzle(this.state.puzzle)
        // }


        var modalContent;
        if (valid) {
            modalContent = {
                title: "Congratulations! 🎉",
                content: "You did it! Keep up the good work!",
                affirmativeText: "Next Puzzle",
                dismissiveText: "Retry Puzzle",
                affirmativeAction: this.state.returnToMainMenu, //TODO: fix to go directly to next
                dismissiveAction: resetAndClose,
                show: true
            }
        }
        else {
            modalContent = {
                title: `Oops! ${this.drawFrom(["🤷‍♂️", "🤷‍♀️"])}`,
                content: "Keep trying! With a little patience I'm sure you'll figure it out.",
                affirmativeText: "Try Again",
                dismissiveText: "Main Menu",
                affirmativeAction: this.state.closeModal,
                dismissiveAction: this.state.returnToMainMenu,
                show: true
            }
        }

        this.state.updateModal(modalContent);
    };

    // converts the validation bool to a string based className
    getValidationClassName = (bool) => {
        switch (bool) {
            case true:
                return "valid-true";
            case false:
                return "valid-false";
            default:
                return null;
        }
    };

// TODO: remove line breaks and restyle
    render() {
        return (
                <div className="answer-zone-wrapper">
                    {this.props.textContent}
                    <div className="answer-zone">
                        <DropContainer containerType="entity-bin"
                                       contents={this.state.entityBin.contents}
                                       location="entity-bin"
                                       onDrop={this.onDrop}
                        />
                        <div className={`drop-zone-container ${this.getValidationClassName(this.state.validAns)}`}>
                            <FlexGrid cells={
                                deepMap(this.state.containers, (container) => {
                                    return <DropContainer
                                        id={container.id}
                                        location={container.location}
                                        contents={container.contents}
                                        onDrop={this.onDrop}
                                    />
                                })
                            }/>
                        </div>
                        <button onClick={this.runValidation}>Validate</button>
                        <DraggableEntityPreview/>
                    </div>

                </div>

        )
    }


}

export default DragDropContext(TouchBackend({enableMouseEvents: true}))(AnswerZone);
