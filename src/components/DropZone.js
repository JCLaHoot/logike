import React from 'react';

const DropZone = ({changeHandler, x, y}) => {

    return (
      <div className="drop-zone">
        <input location={[x, y]} onChange={changeHandler}></input>

      </div>
    )

}

export default DropZone;
