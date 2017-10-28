import React from 'react';

const DropZone = ({changeHandler, x, y}) => {

    return (
      <div className="drop-zone">
        <input x={x} y={y} onChange={changeHandler}></input>
      </div>
    )

}

export default DropZone;
