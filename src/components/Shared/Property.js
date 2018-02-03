// Each entity has one or many Property items attached to it. Ex: red, square, cold, thin, etc...
// properties have a name, an img string, and belong to a category of properties.

class Property {
    constructor(category, name, img) {
        this.category = category;
        this.name = name;
        this.img = img;
    }
}

export default Property