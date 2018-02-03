import Entity from './Entity';
import Property from './Property';


// DEPRECATED FILE (replaced with JSON)



const PROPERTIES = [
    new Property("colors", "red", "paint_red"),
    new Property("colors", "blue", "paint_blue"),
    new Property("colors", "yellow", "paint_yellow"),
    new Property("shapes", "square", "square"),
    new Property("shapes", "circle", "circle"),
    new Property("shapes", "triangle", "triangle")
];

// takes an array of objects and outputs an object whose keys correspond to the grouping values
// and that contain arrays of the objects that match the grouping values
const groupArrayBy = (arrayOfObjects, keytoGroupBy) => {
    var obj = {};
    arrayOfObjects.forEach((object) => {
        if (!obj[object[keytoGroupBy]]) {
            obj[object[keytoGroupBy]] = [];
            obj[object[keytoGroupBy]].push(object);
        }
        else {
            obj[object[keytoGroupBy]].push(object)
        }
    });
    return obj;
};

const groupedProperties = groupArrayBy(PROPERTIES, "category");


const Entities = {
    PROPERTIES: PROPERTIES,
    list: [
        new Entity("red Square",
            [groupedProperties.colors[0], groupedProperties.shapes[0]],
            "red_square"),
        new Entity("blue Square",
            [groupedProperties.colors[1], groupedProperties.shapes[0]],
            "blue_square"),
        new Entity("yellow Square",
            [groupedProperties.colors[2], groupedProperties.shapes[0]],
            "yellow_square"),
        new Entity("red-circle",
            [groupedProperties.colors[0], groupedProperties.shapes[1]],
            "red_circle"),
        new Entity("blue-circle",
            [groupedProperties.colors[1], groupedProperties.shapes[1]],
            "blue_circle"),
        new Entity("yellow-circle",
            [groupedProperties.colors[2], groupedProperties.shapes[1]],
            "yellow_circle"),
        new Entity("red-triangle",
            [groupedProperties.colors[0], groupedProperties.shapes[2]],
            "red_triangle"),
        new Entity("blue-triangle",
            [groupedProperties.colors[1], groupedProperties.shapes[2]],
            "blue_triangle"),
        new Entity("yellow-triangle",
            [groupedProperties.colors[2], groupedProperties.shapes[2]],
            'yellow_triangle')
    ]

};


export default Entities;
