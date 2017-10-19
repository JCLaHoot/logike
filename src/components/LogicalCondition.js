import React from 'react';

import Grid from './Grid.js';

const LogicalCondition = ({cells, selectorImg}) => {
  return (
    <div>
      <img src={selectorImg}/>
      <Grid cells={cells}/>
    </div>
  )
}

export default LogicalCondition
