// an entity the main element that is manipulated in the puzzle.
// it has properties, a name based on the properties,
// a common name which may differ from the name, and an image
// TODO: allow for custom adding of images without hardcoding it here.
// TODO: create property list programatically with categories as keys
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

class Property {
    constructor(category, name, img) {
        this.category = category;
        this.name = name;
        this.img = img; //can be a HEX for colours
    }
}


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

// generates a list of all possible selectors based on the list of names and properties of entities;
const fetchAllProperties = (entities) => {
    var list = [];
    // lists all the names of entities used (since they are sometimes selectors)
    entities.list.forEach((entity) => {
        list.push(entity.name);
    });
    // lists all selectors, regardless of type
    entities.PROPERTIES.forEach((property) => {
        list = list.concat(property.name);
    });
    return list;
};


// generates a list of all selectors. This list mixes Properties AND Entities,
// and should only be used to access name or img of the selector.
const fetchAllPossibleSelectors = (entities) => {
    var list = [];
    list = list.concat(entities.list);
    list = list.concat(entities.PROPERTIES);
    return list;
};


const Entities = {
    fetchAllProperties: fetchAllProperties,
    fetchAllPossibleSelectors: fetchAllPossibleSelectors,
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
