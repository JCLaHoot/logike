const puzzle = (entities) => {
  return ({
    name: "Baby Puzzle",
  logic:
    [
      [
        {
      selectorImg: entities.PROPERTIES[0].img,
      selectorName: entities.PROPERTIES[0].name,
      logicCells: [
        [true ,false],
        [false,null]
        ]
      },
      {
      selectorImg: entities.list[1].img,
      selectorName: entities.list[1].name,
      logicCells: [
        [false,true],
        [false,false]
        ]
      }],
      [{
      selectorImg: entities.list[3].img,
      selectorName: entities.list[3].name,
      logicCells: [
        [false,false],
        [false,true]
        ]
      },
      {
      selectorImg: entities.list[4].img,
      selectorName: entities.list[4].name,
      logicCells: [
        [false,false],
        [true,false]
        ]
      }]

    ],
    size: {
      x: 2,
      y: 2
    },
    entities: entities,
    entityCount: 4
  })
  }

export default puzzle;
