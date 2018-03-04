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
            <div className="landing landing-modal">
                <div className="modal-content">
                    <PuzzleListView
                        puzzleList={puzzleList}
                        onSelectHandler={onSelectHandler}
                        validPuzzleNames={validPuzzleNames}
                    />
                    <br/>
                    <h6>You can also upload your own puzzle:</h6>
                    <br/>
                    <input type="file" accept="application/json" id="puzzleUpload" onChange={handleFiles}/>


                    <button onClick={goToBuilder}>
                        <p><i className="fa fa-cubes" aria-hidden="true"></i> Puzzle Builder (beta)</p>
                    </button>

                </div>
                <img src={img} alt=""/>

            </div>
        </div>

    )

};

export default LandingPage;
