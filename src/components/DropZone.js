import React from 'react';

const DropZone = ({changeHandler, x, y, onClickHandler}) => {

    return (
      <div className="drop-zone" x={x} y={y} onClick={onClickHandler}>
      </div>
    )

}

export default DropZone;
