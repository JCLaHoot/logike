const puzzle = (entities) => {
    return ({
        name: "Tutorial 🍼",
        logic:
            [
                [
                    {
                        selectorImg: entities.list[0].img,
                        selectorName: entities.list[0].name,
                        logicCells: [
                            [true, null],
                            [null, null]
                        ]
                    },
                    {
                        selectorImg: entities.list[7].img,
                        selectorName: entities.list[7].name,
                        logicCells: [
                            [null, null],
                            [null, true]
                        ]
                    },
                    {
                        selectorImg: entities.list[2].img,
                        selectorName: entities.list[2].name,
                        logicCells: [
                            [null, null],
                            [true, null]
                        ]
                    }],
                [{
                    selectorImg: entities.list[3].img,
                    selectorName: entities.list[3].name,
                    logicCells: [
                        [null, true],
                        [null, null ]
                    ]
                }]

            ],
        size: {
            x: 2,
            y: 2
        },
        entities: entities,
        entityCount: 9
    })
};

export default puzzle;
