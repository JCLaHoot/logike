import React from 'react';

const LogicCellDisplay = ({img}) => {

  // makes the component also accept colours instead of just images
  var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(img)
  var content;
  if(isHex) {
    const divStyle = {
      background: `${img}`,
    };
    content = (<div className="content" style={divStyle}></div>);
  } else {
    content = (<img src={img}/>);
  }



  return (
    <div className="logic-cell">
      {content}
    </div>
  );


};

export default LogicCellDisplay;
