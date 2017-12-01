import React from 'react';

const LogicCellDisplay = ({content}) => {

  // makes the component also accept colours instead of just images
  var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(content)
  var cellContent;
  if(isHex) {
    const divStyle = {
      background: `${content}`,
    };
    cellContent = (<div className="logic-cell" style={divStyle}></div>);
  } else if (content) {
    cellContent = (<div className="logic-cell white-bg"><img src={content} alt="logic cell"/></div>);
  }
  else { // empty cell
    cellContent = (<div className="logic-cell"></div>);
  }



  return (
    cellContent
  );


};

export default LogicCellDisplay;
