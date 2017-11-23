import React from 'react';

import FlexGrid from '../../Shared/FlexGrid.js';

const LogicalCondition = ({cells, selectorImg, selectorName}) => {

  // makes the component also accept colours instead of just images
  var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(selectorImg)
  var imgString;
  if(isHex) {
    imgString = `https://dummyimage.com/10/${selectorImg.slice(1)}/&text=+`;
  } else {
    imgString = selectorImg;
  }

  return (
    <div className="logical-condition">
      <div className="selector-banner">
        <img src={imgString} alt={selectorName}/>
      </div>
      <FlexGrid cells={cells}/>
    </div>
  )
}

export default LogicalCondition
