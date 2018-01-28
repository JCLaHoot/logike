import React from 'react';
import {LogicCellStates} from './Constants'


const LogicCellDisplay = ({content}) => {

    if (content === LogicCellStates.WHITE) {
        const divStyle = {
            background: `#FFF`,
        };
        return (<div className="logic-cell" style={divStyle}></div>);
    } else if (content) {
        return (
            <div className="logic-cell white-bg"><img draggable="false" src={content} alt="logic cell"/></div>);
    }
    else { // empty cell
        return (<div className="logic-cell"></div>);
    }

};

export default LogicCellDisplay;
