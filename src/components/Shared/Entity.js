// an Entity is the main element that is manipulated in the puzzle.
// it has properties, a name based on the properties,
// a common name which may differ from the name, and an image
// ex: red square, potato, JK Rowling

class Entity {
    constructor(commonName, properties, img) {
        this.properties = properties; // an array;
        this.name = Object.values(properties.map((property) => {
                return property.name
            }
        )).join("-");
        this.commonName = commonName; // for display purposes ONLY
        this.img = img;
    }
}

export default Entity;