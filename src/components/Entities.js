import redSquare from '../assets/red_square.png';
import blueSquare from '../assets/blue_square.png';
import yellowSquare from '../assets/yellow_square.png';
import redCircle from '../assets/red_circle.png';
import blueCircle from '../assets/blue_circle.png';
import yellowCircle from '../assets/yellow_circle.png';
import redTriangle from '../assets/red_triangle.png';
import blueTriangle from '../assets/blue_triangle.png';
import yellowTriangle from '../assets/yellow_triangle.png';

// an entity the main element that is manipulated in the puzzle.
// it has properties, a name based on the properties,
// a common name which may differ from the name, and an image
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


const Entities = [
  new Entity("red Square",
              new Properties("red", "square"),
              redSquare),
  new Entity("blue Square",
              new Properties("blue", "square"),
              blueSquare),
  new Entity("yellow Square",
              new Properties("yellow", "square"),
              yellowSquare),
  new Entity("red-circle",
              new Properties("red", "circle"),
              redCircle),
  new Entity("blue-circle",
              new Properties("blue", "circle"),
              blueCircle),
  new Entity("yellow-circle",
              new Properties("yellow", "circle"),
              yellowCircle),
  new Entity("red-triangle",
              new Properties("red", "triangle"),
              redTriangle),
  new Entity("blue-triangle",
              new Properties("blue", "triangle"),
              blueTriangle),
  new Entity("yellow-triangle",
              new Properties("yellow", "triangle"),
              yellowTriangle)
]


export default Entities;
