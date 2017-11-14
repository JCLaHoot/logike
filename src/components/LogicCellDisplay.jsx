import React from "react";

const LogicCellDisplay = ({img}) => {

  // makes the component also accept colours instead of just images
  var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(img)
  var imgString;
  if(isHex) {
    imgString = `url('https://dummyimage.com/10/${img.slice(1)}/&text=+')`;
  } else {
    imgString = `url('${img}')`;
  }

  const divStyle = {
    background: imgString,
    backgroundSize: 'cover'

  };

  return (
    <div className="logic-cell-display" style={divStyle}>
    </div>
  );


};

export default LogicCellDisplay;
