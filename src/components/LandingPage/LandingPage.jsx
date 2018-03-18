import React from 'react';

import PuzzleListView from './PuzzleListView.jsx';

const LandingPage = ({puzzleList, onSelectHandler, appendPuzzleList, validPuzzleNames, goToBuilder}) => {

    let img = '/assets/colour_shapes@2x.png';

    // when a file is uploaded, this checks to see that it's the right type, then adds it to the puzzle list
    const handleFiles = () => {
        var selectedFiles = document.getElementById('puzzleUpload').files;

        // checks if the JSON is a valid puzzle
        const validPuzzle = (puzzle) => {
            let keys = ["name", "entitySetID", "logic", "size"];
            return keys.every((key) => {return puzzle.hasOwnProperty(key)});
        };

        //checks if the file is JSON
        //OPTIMIZE by implementing magic number solution: https://stackoverflow.com/questions/49225475/file-input-files-not-read-onchange-on-mobile/49229215#49229215
        const validJSON = (file) => {
            if(file.name.includes('.json')){
                let maxSizeInKB = 25;
                if(file.size < (maxSizeInKB * 1000)) {
                    return true;
                }
                else {
                    alert(`${file.name} is bigger than ${maxSizeInKB}kB. \nHarass @JCLaHoot on Twitter and he'll fix it!`)
                }
            }
            else {
                alert(`${file.name} is not a valid JSON file`)
            }
        };


        // runs for each puzzle uploaded
        const onLoad = (event) => {
            let puzzle = JSON.parse(event.target.result);
            if(validPuzzle(puzzle)) {
                appendPuzzleList(puzzle);
            }
            else {
                console.log("JSON file does not contain a properly formatted Logike puzzle");
            }
        };

        //checks the file type before attempting to read it
        for (let i = 0; i < selectedFiles.length; i++) {
            if(validJSON(selectedFiles[i])) {
                // creates new readers so that it can read many files sequentially.
                var reader = new FileReader();
                reader.onload = onLoad;
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
                            <label htmlFor="puzzleUpload" className="button-dark">Upload Puzzle(s)</label>
                            <input type="file"
                                   multiple
                                   accept="application/json"
                                   id="puzzleUpload"
                                   onChange={handleFiles}/>
                        </div>

                        <button className="button-dark" onClick={goToBuilder}>
                            Puzzle Builder (beta)
                        </button>
                    </div>

                </div>
                <img src={img} alt=""/>

            </div>
        </div>

    );



};

export default LandingPage;
