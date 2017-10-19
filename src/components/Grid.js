import React, {Component} from "react";
import './Grid.css';

const Grid = ({cells}) => {
// prevents crashes in the event that an empty grid is used.
if(!cells) {
  return "Empty Grid Component";
}
/*
Takes an array of arrays, and creates a grid, pupulating each
cell with the elements in the inner arrays.
*/
const buildGrid = (data) => {
  return(
    <table>
      <tbody>{
        data.map(function(row, y) {
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
      <div className="grid">
      {buildGrid(cells)}
      </div>
    )

};

export default Grid;
