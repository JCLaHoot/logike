import React from "react";
import './Grid.css';

// makes transformations on the cell level in a 2d array
export const deepMap = (twoDimensionalArray, transform) => {
  return twoDimensionalArray.map((row, y) => {
    var mapped = [];
    for (var x = 0; x < row.length; x++)
      mapped.push(transform(row[x], x, y));
    return mapped;
  })
}

// returns true if every cell in a 2d array is true
export const deepEvery = (twoDimensionalArray, check) => {
  return twoDimensionalArray.every((row, y) => {
    for (var x = 0; x < row.length; x++) {
      if (!check(row[x], x, y)) {
        return false;
      }
    }
    return true;
  })
}


const Grid = ({cells}) => {
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
    <table className="grid">
      <tbody>{
        cells.map(function(row, y) {
          return(<tr key={y}>{
            row.map(function(cell, x){
              return(<td key={x}>{cell}</td>);
            })
          }</tr>);
        })
      }</tbody>
    </table>);
}

    return (
      buildGrid(cells)
    )

};

export default Grid;
