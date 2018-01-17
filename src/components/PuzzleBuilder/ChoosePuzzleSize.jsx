import React from 'react';


const ChoosePuzzleSize = ({chooseSize}) => {

  return (
    <div className="choose-puzzle-size">
      <h4>Choose the puzzle size</h4>

            <input type="range" min="1" max="5" class="slider horizontal-slider" id="myRange"/>
            <div className="float-wrapper">
              <div className="vertical-slider-wrapper">
                <input type="range" min="1" max="5" class="slider vertical-slider" id="myRange"/>
              </div>
              <div class="puzzle-size-preview">
                grid
              </div>
            </div>
    </div>
  )

}

export default ChoosePuzzleSize;
