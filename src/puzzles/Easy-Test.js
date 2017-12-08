const puzzle = (entities) => {
  return ({
    name: "Easy Puzzle",
  logic:
  [
    [
      {
    selectorImg: entities.list[0].img,
    selectorName: entities.list[0].name,
    logicCells: [
      [null,null,true],
      [null,null,null],
      [null,null,null]
      ]
    },
    {
    selectorImg: entities.list[1].img,
    selectorName: entities.list[1].name,
    logicCells: [
      [null,null,null],
      [null,null,null],
      [null,true,null]
      ]
    },
    {
    selectorImg: entities.list[2].img,
    selectorName: entities.list[2].name,
    logicCells: [
      [null,null,null],
      [true,null,null],
      [null,null,null]
      ]
    }],
    [{
    selectorImg: entities.list[3].img,
    selectorName: entities.list[3].name,
    logicCells: [
      [null,true,null],
      [null,null,null],
      [null,null,null]
      ]
    },
    {
    selectorImg: entities.list[4].img,
    selectorName: entities.list[4].name,
    logicCells: [
      [null,null,null],
      [null,true,null],
      [null,null,null]
      ]
    },
    {
    selectorImg: entities.list[5].img,
    selectorName: entities.list[5].name,
    logicCells: [
      [null,null,null],
      [null,null,null],
      [null,null,true]
      ]
    }],
    [{
    selectorImg: entities.list[6].img,
    selectorName: entities.list[6].name,
    logicCells: [
      [null,null,null],
      [null,null,true],
      [null,null,null]
      ]
    },
    {
    selectorImg: entities.list[7].img,
    selectorName: entities.list[7].name,
    logicCells: [
      [null,null,null],
      [null,null,null],
      [true,null,null]
      ]
    },
    {
    selectorImg: entities.list[8].img,
    selectorName: entities.list[8].name,
    logicCells: [
      [true,null,null],
      [null,null,null],
      [null,null,null]
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
