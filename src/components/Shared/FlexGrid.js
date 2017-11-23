import React from "react";



const FlexGrid = ({cells}) => {
// prevents crashes in the event that an empty grid is used.
if(!cells) {
  return "Empty Grid Component";
}

/*
Takes an array of arrays, and creates a grid, pupulating each
cell with the elements in the inner arrays.
*/
const buildGrid = (cells) => {
  return(
    <div className="flex-grid">
      {
        cells.map(function(row, y) {
          return(<div key={y} className="flex-row">{
            row.map(function(cell, x){
              return(<div key={x} className="flex-cell">{cell}</div>);
            })
          }</div>);
        })
      }
    </div>
  );
}

    return (
      buildGrid(cells)
    )

};

export default FlexGrid;
