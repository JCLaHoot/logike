import React from 'react';

const DropZone = ({changeHandler, x, y, onClickHandler}) => {

    return (
      <div className="drop-zone" onClick={onClickHandler}>
        <input x={x} y={y} onChange={changeHandler}></input>
      </div>
    )

}

export default DropZone;
