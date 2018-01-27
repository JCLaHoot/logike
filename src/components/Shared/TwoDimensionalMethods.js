// Set of methods that can be applied to two Dimensional Arrays


// makes transformations on the cell level in a 2d array
export const deepMap = (twoDimensionalArray, transform) => {
    return twoDimensionalArray.map((row, y) => {
        return row.map((cell, x) => {
            return transform(cell, x, y);
        })
    })
};

// does something using each of the cells in a 2d array
export const deepForEach = (twoDimensionalArray, action) => {
    twoDimensionalArray.forEach((row, y) => {
        row.forEach((cell, x) => {
            action(cell, x, y);
        })
    })
};

export const deepSome = (twoDimensionalArray, check) => {
    return twoDimensionalArray.some((row, y) => {
        return row.some((cell, x) => {
            return check(cell, x, y);
        })
    })
};

// returns true if every cell in a 2d array is true
export const deepEvery = (twoDimensionalArray, check) => {
    return twoDimensionalArray.every((row, y) => {
        return row.every((cell, x) => {
            return check(cell, x, y);
        })
    })
};

// gets the height of the grid
export const getGridY = (grid) => {
    return grid.length;
};
// gets the width of the grid
export const getGridX = (grid) => {
    var rowLengths = grid.map((row) => {
        return row.length;
    });
    return Math.max(...rowLengths);
};

// creates an empty 2d array
export const createTwoDimensionalArray = (xSize, ySize) => {
    var grid = [];
    for (var y = 0; y < ySize; y++) {
        var row = [];
        for (var x = 0; x < xSize; x++) {
            row.push([]); // may need to just be null
        }
        grid.push(row);
    }
    return grid;
};
