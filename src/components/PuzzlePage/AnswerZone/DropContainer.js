import React, { Component } from 'react';

import { ItemTypes } from '../../Shared/Constants';
import { DropTarget } from 'react-dnd';

import DraggableEntity from './DraggableEntity';


// required. This contains methods that will describe how the container
// will react when items are dragged into it.
const containerTarget = {
  drop(props, monitor) {
    // console.log("item dragged: ", monitor.getItem());
    // console.log("container: ", props)
    props.onDrop(props, monitor.getItem()); //onDrop is defined in the top-level component
  }
};

// collect function is required.
const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
}


class DropContainer extends Component {

  render() {
    const {connectDropTarget, contents, containerType} = this.props;
    //wrapping the component with connectDropTarget is required
    return connectDropTarget(
      <div className={`drop-container ${containerType}`}>
        {contents.map(({name, img}) => {
          return <DraggableEntity key={name} name={name} img={img} oldLocation={this.props.location}/>
        })}
      </div>
    );
  }
}

//The draggable item is wrapped in a DropTarget. Item type accepted is specified here as well.
export default DropTarget(ItemTypes.ENTITY, containerTarget, collect)(DropContainer);
