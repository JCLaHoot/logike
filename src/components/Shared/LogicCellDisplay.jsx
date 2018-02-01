import React from 'react';
import {LogicCellStates} from './Constants'


const LogicCellDisplay = ({content, onClick, location}) => {

    if (content === LogicCellStates.WHITE) {
        const divStyle = {
            background: `#FFF`,
        };
        return (<div className="logic-cell" style={divStyle} onClick={onClick}></div>);
    } else if (content) {
        let img = content;
        img = '/assets/' + content + '.png';

        return (
            <div className="logic-cell white-bg"><img
                draggable="false"
                src={img}
                alt="logic cell"
                onClick={onClick}
                location={location}/></div>);
    }
    else { // empty cell
        return (<div className="logic-cell empty-bg"
                     onClick={onClick}
                     location={location}></div>);
    }

};

export default LogicCellDisplay;
