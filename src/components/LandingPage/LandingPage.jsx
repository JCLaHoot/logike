import React from 'react';

import PuzzleListView from './PuzzleListView.jsx';

const LandingPage = ({puzzleList, onSelectHandler, appendPuzzleList, validPuzzleNames, goToBuilder}) => {

    let img = '/assets/colour_shapes@2x.png';


    // when a file is uploaded, this checks to see that it's the right type, then adds it to the puzzle list
    const handleFiles = () => {
        var selectedFiles = document.getElementById('puzzleUpload').files;

        var reader = new FileReader();

        // checks if the JSON is a valid puzzle
        const validPuzzle = (puzzle) => {
            let keys = ["name", "entitySetID", "logic", "size"];
            return keys.every((key) => {return puzzle.hasOwnProperty(key)});
        };

        reader.onload = (event) => {
            let puzzle = JSON.parse(event.target.result);
            if(validPuzzle(puzzle)) {
                appendPuzzleList(puzzle);
            }
            else {
                console.log("JSON file does not contain a properly formatted Logike puzzle")
            }
        };

        //checks the file type before attempting to read it
        for (let i = 0; i < selectedFiles.length; i++) {
            if(selectedFiles[i].type === 'application/json') {
                reader.readAsText(selectedFiles[i]);
            }
        }
    };


    return (
        <div className="float-wrapper">
            <div className="landing">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>Select a puzzle</h3>
                    </div>
                    <PuzzleListView
                        puzzleList={puzzleList}
                        onSelectHandler={onSelectHandler}
                        validPuzzleNames={validPuzzleNames}
                    />
                    <div className="modal-footer">
                        <h6>Or, make your own!</h6>
                        <div className="file-input-wrapper">
                            <label for="puzzleUpload" className="button-dark">Upload Puzzle</label>
                            <input type="file" accept="application/json" id="puzzleUpload" onChange={handleFiles}/>

                        </div>
                        <button className="button-dark" onClick={goToBuilder}>
                            Puzzle Builder (beta)
                        </button>
                    </div>

                </div>
                <img src={img} alt=""/>

            </div>
        </div>

    )

};

export default LandingPage;
