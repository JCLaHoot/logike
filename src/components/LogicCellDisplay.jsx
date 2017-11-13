import React from "react";

const LogicCellDisplay = ({img}) => {

  // can also accept colours instead of images
  var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(img)
  var imgString;
  if(isHex) {
    imgString = img;
  } else {
    imgString = 'url(' + img + ')';
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
