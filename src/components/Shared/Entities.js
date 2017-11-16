import redSquare from '../../assets/red_square.png';
import blueSquare from '../../assets/blue_square.png';
import yellowSquare from '../../assets/yellow_square.png';
import redCircle from '../../assets/red_circle.png';
import blueCircle from '../../assets/blue_circle.png';
import yellowCircle from '../../assets/yellow_circle.png';
import redTriangle from '../../assets/red_triangle.png';
import blueTriangle from '../../assets/blue_triangle.png';
import yellowTriangle from '../../assets/yellow_triangle.png';
import square from '../../assets/square.svg';
import circle from '../../assets/circle.svg';
import triangle from '../../assets/triangle.svg';

// an entity the main element that is manipulated in the puzzle.
// it has properties, a name based on the properties,
// a common name which may differ from the name, and an image
// TODO: allow for custom adding of images without hardcoding it here.
// TODO: create property list programatically with categories as keys
class Entity {
  constructor(commonName, properties, img) {
    this.properties = properties; // an array;
    this.name = Object.values(properties.map((property) => {
      return property.name}
      )).join("-");
    this.commonName = commonName; // for display purposes ONLY
    this.img = img;
  }
}

 class Property {
   constructor(category, name, img) {
     this.category = category;
     this.name = name;
     this.img = img; //can be a HEX for colours
   }
 }


const PROPERTIES = [
  new Property("colors", "red", "#FF5554"),
  new Property("colors", "blue", "#0E90FF"),
  new Property("colors", "yellow", "#FFDA30"),
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

const groupedProperties = groupArrayBy(PROPERTIES, "category");

 // generates a list of all possible selectors based on the list of names and properties of entities;
const fetchAllProperties = (entities) => {
    var list = [];
    // lists all the names of entities used (since they are sometimes selectors)
    entities.list.forEach((entity) => {
      list.push(entity.name);
    })
    // lists all selectors, regardless of type
    for (var property in entities.PROPERTIES) {
      list = list.concat(entities.PROPERTIES[property.name]);
    }
    return list;
  }

const fetchAllPossibleSelectors = (entities) => {
  var list = [];
  list = list.concat(entities.list);
  list = list.concat(entities.PROPERTIES);
  return list;
}


const Entities = {
  fetchAllProperties: fetchAllProperties,
  fetchAllPossibleSelectors: fetchAllPossibleSelectors,
  PROPERTIES: PROPERTIES,
  list: [
    new Entity("red Square",
                [groupedProperties.colors[0], groupedProperties.shapes[0]],
                redSquare),
    new Entity("blue Square",
                [groupedProperties.colors[1], groupedProperties.shapes[0]],
                blueSquare),
    new Entity("yellow Square",
                [groupedProperties.colors[2], groupedProperties.shapes[0]],
                yellowSquare),
    new Entity("red-circle",
                [groupedProperties.colors[0], groupedProperties.shapes[1]],
                redCircle),
    new Entity("blue-circle",
                [groupedProperties.colors[1], groupedProperties.shapes[1]],
                blueCircle),
    new Entity("yellow-circle",
                [groupedProperties.colors[2], groupedProperties.shapes[1]],
                yellowCircle),
    new Entity("red-triangle",
                [groupedProperties.colors[0], groupedProperties.shapes[2]],
                redTriangle),
    new Entity("blue-triangle",
                [groupedProperties.colors[1], groupedProperties.shapes[2]],
                blueTriangle),
    new Entity("yellow-triangle",
                [groupedProperties.colors[2], groupedProperties.shapes[2]],
                yellowTriangle)
  ]

}


export default Entities;
