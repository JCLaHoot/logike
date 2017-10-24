import React from 'react';

import redSquare from '../assets/red_square.png';
import blueSquare from '../assets/blue_square.png';
import yellowSquare from '../assets/yellow_square.png';
import redCircle from '../assets/red_circle.png';
import blueCircle from '../assets/blue_circle.png';
import yellowCircle from '../assets/yellow_circle.png';
import redTriangle from '../assets/red_triangle.png';
import blueTriangle from '../assets/blue_triangle.png';
import yellowTriangle from '../assets/yellow_triangle.png';


class Entity {
  constructor(name, properties, img) {
    this.name = name;
    this.properties = properties; // an array;
    this.img = img;
  }
}

const properties = {
   groupName: "shapes",
   color: [{name:"red", img:""}, {name:"blue", img:""}, {name:"yellow", img:""}],
   shape: [{name:"square", img:""}, {name:"circle", img:""}, {name:"triangle", img:""}]
 }


const Entities = [
  new Entity("red square",
              [properties.color[0].name, properties.shape[0]],
              redSquare),
  new Entity("blue square",
              [properties.color[1].name, properties.shape[0]],
              blueSquare),
  new Entity("yellow square",
              [properties.color[2].name, properties.shape[0]],
              yellowSquare),
  new Entity("red circle",
              [properties.color[0].name, properties.shape[1]],
              redCircle),
  new Entity("blue circle",
              [properties.color[1].name, properties.shape[1]],
              blueCircle),
  new Entity("yellow circle",
              [properties.color[2].name, properties.shape[1]],
              yellowCircle),
  new Entity("red triangle",
              [properties.color[0].name, properties.shape[2]],
              redTriangle),
  new Entity("blue triangle",
              [properties.color[1].name, properties.shape[2]],
              blueTriangle),
  new Entity("yellow triangle",
              [properties.color[2].name, properties.shape[2]],
              yellowTriangle)
]




export default Entities;
