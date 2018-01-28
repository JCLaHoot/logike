import React from 'react';

import FlexGrid from './FlexGrid.js';

const LogicalCondition = ({cells, selectorImg, selectorName}) => {

    return (
        <div key={selectorName} className="logical-condition">
            <div className="selector-banner">
                <img draggable="false" src={selectorImg} alt={selectorName}/>
            </div>
            <FlexGrid cells={cells}/>
        </div>
    )
};

export default LogicalCondition
