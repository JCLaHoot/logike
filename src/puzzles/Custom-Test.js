const puzzle = (entities) => {
  return ({
    name: "Custom Test Puzzle",
  logic:
    [
      [
        {
      selectorImg: entities.list[0].img,
      selectorName: entities.list[0].name,
      logicCells: [
        [true,false,false],
        [false,null,false],
        [false,false,false]
        ]
      },
      {
      selectorImg: entities.list[1].img,
      selectorName: entities.list[1].name,
      logicCells: [
        [false,true,false],
        [false,false,false],
        [false,false,false]
        ]
      },
      {
      selectorImg: entities.list[2].img,
      selectorName: entities.list[2].name,
      logicCells: [
        [false,false,false],
        [false,true,false],
        [false,false,false]
        ]
      }],
      [{
      selectorImg: entities.list[3].img,
      selectorName: entities.list[3].name,
      logicCells: [
        [false,false,false],
        [false,false,false],
        [false,false,true]
        ]
      },
      {
      selectorImg: entities.list[4].img,
      selectorName: entities.list[4].name,
      logicCells: [
        [false,false,true],
        [false,false,false],
        [false,false,false]
        ]
      },
      {
      selectorImg: entities.list[5].img,
      selectorName: entities.list[5].name,
      logicCells: [
        [false,false,false],
        [true,false,false],
        [false,false,false]
        ]
      }],
      [{
      selectorImg: entities.list[6].img,
      selectorName: entities.list[6].name,
      logicCells: [
        [false,false,false],
        [false,false,true],
        [false,false,false]
        ]
      },
      {
      selectorImg: entities.list[7].img,
      selectorName: entities.list[7].name,
      logicCells: [
        [false,false,false],
        [false,false,false],
        [true,false,false]
        ]
      },
      {
      selectorImg: entities.list[8].img,
      selectorName: entities.list[8].name,
      logicCells: [
        [false,false,false],
        [false,false,false],
        [false,true,null]
        ]
      }]

    ],
    size: {
      x: 3,
      y: 3
    },
    entities: entities,
    entityCount: 9
  })
  }

export default puzzle;
