import React from 'react';

const DropZone = ({x, y, onClickHandler}) => {

    return (
      <div className="drop-zone" x={x} y={y} onClick={onClickHandler}>
      </div>
    )

}

export default DropZone;
