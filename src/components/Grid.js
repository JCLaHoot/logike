import React from "react";
import './Grid.css';

// makes transformations on the cell level in a 2d array
export const deepMap = (twoDimensionalArray, transform) => {
  return twoDimensionalArray.map((row, y) => {
    return row.map((cell, x) => {
      return transform(cell, x, y);
    })
  })
}

// does something using each of the cells in a 2d array
export const deepForEach = (twoDimensionalArray, action) => {
   twoDimensionalArray.forEach((row, y) => {
     row.forEach((cell, x) => {
       action(cell, x, y);
    })
  })
}

export const deepSome = (twoDimensionalArray, check) => {
   return twoDimensionalArray.some((row, y) => {
     return row.some((cell, x) => {
       return check(cell, x, y);
    })
  })
}

// returns true if every cell in a 2d array is true
export const deepEvery = (twoDimensionalArray, check) => {
  return twoDimensionalArray.every((row, y) => {
    return row.every((cell, x) => {
      return check(cell, x, y);
    })
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
