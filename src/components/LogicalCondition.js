import React from 'react';

import Grid from './Grid.js';

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
      <img src={imgString} alt={selectorName}/>
      <Grid cells={cells}/>
    </div>
  )
}

export default LogicalCondition
