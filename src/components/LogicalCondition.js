import React from 'react';

import Grid from './Grid.js';

const LogicalCondition = ({cells, selectorImg, selectorName}) => {
  return (
    <div className="logical-condition">
      <img src={selectorImg} alt={selectorName}/>
      <Grid cells={cells}/>
    </div>
  )
}

export default LogicalCondition
