import redSquare from '../assets/red_square.png';
import blueSquare from '../assets/blue_square.png';
import yellowSquare from '../assets/yellow_square.png';
import redCircle from '../assets/red_circle.png';
import blueCircle from '../assets/blue_circle.png';
import yellowCircle from '../assets/yellow_circle.png';
import redTriangle from '../assets/red_triangle.png';
import blueTriangle from '../assets/blue_triangle.png';
import yellowTriangle from '../assets/yellow_triangle.png';
import square from '../assets/square.svg';
import circle from '../assets/circle.svg';
import triangle from '../assets/triangle.svg';

// an entity the main element that is manipulated in the puzzle.
// it has properties, a name based on the properties,
// a common name which may differ from the name, and an image
// TODO: allow for custom adding of images without hardcoding it here.
// TODO: create property list programatically with categories as keys
class Entity {
  constructor(commonName, properties, img) {
    this.properties = properties; // an array;
    this.name = Object.values(properties).join("-");
    this.commonName = commonName; // for display purposes ONLY
    this.img = img;
  }
}

// TODO: allow for custom adding of key-value pairs
// TODO: add images for key-value pairs
 class Properties {
   constructor(color, shape) {
     this.color = color;
     this.shape = shape;
   }
 }

 class Property {
   constructor(category, name, img) {
     this.category = category;
     this.name = name;
     this.img = img; //can be a HEX for colours
   }
 }

 const PROPERTIES = {
   COLORS: ["red", "blue", "yellow"],
   SHAPES: ["square", "circle", "triangle"]
 }


const ENTITY_PROPERTIES = [
  new Property("colors", "red", "#d7433a"),
  new Property("colors", "blue", "#3a7ed7"),
  new Property("colors", "yellow", "#fff469"),
  new Property("shapes", "square", square),
  new Property("shapes", "circle", circle),
  new Property("shapes", "triangle", triangle)
];

// takes an array of objects and outputs an object whose keys correspond to the grouping values
// and that contain arrays of the objects that match the grouping values
const groupArrayBy = (arrayOfObjects, keytoGroupBy) => {
  var obj = {};
  arrayOfObjects.forEach((object) => {
    if(!obj[object[keytoGroupBy]]) {
      obj[object[keytoGroupBy]] = [];
      obj[object[keytoGroupBy]].push(object);
    }
    else {
      obj[object[keytoGroupBy]].push(object)
    }
  })
  return obj;
}
groupArrayBy(ENTITY_PROPERTIES, "category");

 // generates a list of all possible selectors based on the list of names and properties of entities;
const fetchAllProperties = (entities) => {
    var list = [];
    // lists all the names of entities used (since they are sometimes selectors)
    entities.list.forEach((entity) => {
      list.push(entity.name);
    })
    // lists all selectors, regardless of type
    for (var property in entities.PROPERTIES) {
      list = list.concat(entities.PROPERTIES[property]);
    }
    return list;
  }


const Entities = {
  fetchAllProperties: fetchAllProperties,
  PROPERTIES: PROPERTIES,
  list: [
    new Entity("red Square",
                new Properties(PROPERTIES.COLORS[0], PROPERTIES.SHAPES[0]),
                redSquare),
    new Entity("blue Square",
                new Properties(PROPERTIES.COLORS[1], PROPERTIES.SHAPES[0]),
                blueSquare),
    new Entity("yellow Square",
                new Properties(PROPERTIES.COLORS[2], PROPERTIES.SHAPES[0]),
                yellowSquare),
    new Entity("red-circle",
                new Properties(PROPERTIES.COLORS[0], PROPERTIES.SHAPES[1]),
                redCircle),
    new Entity("blue-circle",
                new Properties(PROPERTIES.COLORS[1], PROPERTIES.SHAPES[1]),
                blueCircle),
    new Entity("yellow-circle",
                new Properties(PROPERTIES.COLORS[2], PROPERTIES.SHAPES[1]),
                yellowCircle),
    new Entity("red-triangle",
                new Properties(PROPERTIES.COLORS[0], PROPERTIES.SHAPES[2]),
                redTriangle),
    new Entity("blue-triangle",
                new Properties(PROPERTIES.COLORS[1], PROPERTIES.SHAPES[2]),
                blueTriangle),
    new Entity("yellow-triangle",
                new Properties(PROPERTIES.COLORS[2], PROPERTIES.SHAPES[2]),
                yellowTriangle)
  ]

}


export default Entities;
