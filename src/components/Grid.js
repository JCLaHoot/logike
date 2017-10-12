import React, {Component} from "react";
import './Grid.css';


var defaultList = [[1,2,3],[4,5,6],[7,8,9]];

class Grid extends Component {

  constructor(props) {
  super(props);
  this.state = {
    list: props.list
  }
}

componentWillMount() {
  if(!this.state.list) {
    this.setState({list: defaultList});
  }
}


/*
Takes an array of arrays, and creates a grid, pupulating each
cell with the elements in the inner arrays.
*/
buildGrid = (data) => {
  var grid = [];
  grid.push(
    <table>
      <tbody>{
        data.forEach(function(row) {
          grid.push(<tr>{
            row.forEach(function(cell){
              grid.push(<td>{cell}</td>)
            })
          }</tr>)
        })
      }</tbody>
    </table>);

  return grid;
}

// doesn't work... WHY????
// buildBetterGrid = (data) => {
//   return(
//     <table>
//       <tbody>{
//         data.forEach(function(row) {
//           return(<tr>{
//             row.forEach(function(cell){
//               return(<td>{cell}</td>);
//             })
//           }</tr>);
//         })
//       }</tbody>
//     </table>);
// }


  render() {
    return (
      <div className="grid">
      {this.buildGrid(this.state.list)}
      </div>
    )
  }

};


export default Grid;
