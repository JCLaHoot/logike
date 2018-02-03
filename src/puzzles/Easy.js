const puzzle = (entities) => {
    return ({
        name: "Easy 🌱",
        logic:
            [

                    {
                        selectorImg: entities.list[0].img,
                        selectorName: entities.list[0].name,
                        logicCells: [
                            [false, false, null],
                            [false, false, null],
                            [null, null, null]
                        ]
                    },
                    {
                        selectorImg: entities.list[1].img,
                        selectorName: entities.list[1].name,
                        logicCells: [
                            [false, false, false],
                            [false, null, false],
                            [null, null, null]
                        ]
                    },
                    {
                        selectorImg: entities.list[2].img,
                        selectorName: entities.list[2].name,
                        logicCells: [
                            [false, false, false],
                            [false, null, null],
                            [false, null, null]
                        ]
                    },
                {
                    selectorImg: entities.list[3].img,
                    selectorName: entities.list[3].name,
                    logicCells: [
                        [null, null, null],
                        [null, null, null],
                        [null, null, true]
                    ]
                },
                    {
                        selectorImg: entities.list[4].img,
                        selectorName: entities.list[4].name,
                        logicCells: [
                            [false, false, false],
                            [false, null, false],
                            [false, null, false]
                        ]
                    },
                    {
                        selectorImg: entities.list[5].img,
                        selectorName: entities.list[5].name,
                        logicCells: [
                            [null, null, null],
                            [null, null, null],
                            [null, true, null]
                        ]
                    },
                {
                    selectorImg: entities.list[6].img,
                    selectorName: entities.list[6].name,
                    logicCells: [
                        [null, null, null],
                        [null, null, null],
                        [null, false, false]
                    ]
                },
                    {
                        selectorImg: entities.list[7].img,
                        selectorName: entities.list[7].name,
                        logicCells: [
                            [null, null, null],
                            [false, false, false],
                            [null, null, null]
                        ]
                    },
                    {
                        selectorImg: entities.list[8].img,
                        selectorName: entities.list[8].name,
                        logicCells: [
                            [false, null, null],
                            [false, null, null],
                            [false, null, null]
                        ]
                    }

            ],
        size: {
            x: 3,
            y: 3
        },
        entities: entities,
        entityCount: 9
    })
};

export default puzzle;
