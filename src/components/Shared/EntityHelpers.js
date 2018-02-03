// Set of helper methods for Entities and Entity Properties


// generates a list of all possible selectors based on the list of names and properties of eColoredShapes;
export const fetchAllProperties = (entities) => {
    var list = [];
    // lists all the names of eColoredShapes used (since they are sometimes selectors)
    entities.list.forEach((entity) => {
        list.push(entity.name);
    });
    // lists all selectors, regardless of type
    entities.PROPERTIES.forEach((property) => {
        list = list.concat(property.name);
    });
    return list;
};


// generates a list of all selectors. This list mixes Properties AND eColoredShapes,
// and should only be used to access name or img of the selector.
export const fetchAllPossibleSelectors = (entities) => {
    var list = [];
    list = list.concat(entities.list);
    list = list.concat(entities.PROPERTIES);
    return list;
};