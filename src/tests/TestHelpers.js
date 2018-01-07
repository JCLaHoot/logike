import {deepMap, getGridX, getGridY} from '../components/Shared/TwoDimensionalMethods';

// Takes a Two Dimensional Array of answer strings, and creates expected answer cells for them.
export const generateAnsContainer = (TwoDimensionalArray) => {

    var cells = [];
    for (var y = 0; y < getGridY(TwoDimensionalArray); y++) {
        var row = [];
        for (var x = 0; x < getGridX(TwoDimensionalArray); x++) {
          row.push(
            {
              id: `drop-container-${x}-${y}`,
              location: {x: x, y: y},
              contents: [{"name": TwoDimensionalArray[y][x],
                          "img": null,
                          "oldLocation": "entity-bin"
                        }]
            }
          );
        };
        cells.push(row);
    };
    return cells;
}
