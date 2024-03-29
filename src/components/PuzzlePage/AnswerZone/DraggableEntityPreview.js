import React, {Component} from 'react';
import {DragLayer} from 'react-dnd';

import DraggableEntity from './DraggableEntity';

// gets the data about the item being dragged.
const collect = (monitor) => {
    var item = monitor.getItem();
    // compensated for potential scroll;
    var offset = monitor.getSourceClientOffset();
    if (offset) {
        offset.x += window.pageXOffset;
        offset.y += window.pageYOffset;
    }


    return {
        name: item && item.name,
        img: item && item.img,
        oldLocation: item && item.oldLocation,
        currentOffset: offset, //required
        isDragging: monitor.isDragging()
    }
};

const getItemStyles = (currentOffset) => {
    if (!currentOffset) {
        return {
            display: 'none'

        };
    }


    // http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
    var x = currentOffset.x;
    var y = currentOffset.y;
    var transform = `translate(${x}px, ${y}px)`;


    return {
        pointerEvents: 'none',
        transform: transform,
        WebkitTransform: transform
    };

};


class ItemPreview extends Component {

    render() {
        const PreviewContents = ({
                                     name,
                                     img,
                                     oldLocation,
                                     isDragging,
                                     currentOffset
                                 }) => {
            if (!isDragging) {
                return null;
            }

            // the div makes the magic happen for the preview. The contents should match the item being dragged
            return (
                <div className="item-preview" style={getItemStyles(currentOffset)}>
                    <DraggableEntity name={name} img={img} oldLocation={oldLocation}/>
                </div>
            );
        };

        return PreviewContents(this.props);

    }

}

//The preview is wrapped in DragLayer. There is no item type.
export default DragLayer(collect)(ItemPreview);
