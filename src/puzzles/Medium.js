const puzzle = (entities) => {
    return ({
        name: "Medium 🌶️",
        logic:
            [

                    {
                        selectorImg: entities.list[0].img,
                        selectorName: entities.list[0].name,
                        logicCells: [
                            [false, null, null]
                        ]
                    },
                    {
                        selectorImg: entities.list[1].img,
                        selectorName: entities.list[1].name,
                        logicCells: [
                            [false, null, false]
                        ]
                    },
                    {
                        selectorImg: entities.list[2].img,
                        selectorName: entities.list[2].name,
                        logicCells: [
                            ["red-circle"],
                            [true]
                        ]
                    },
                {
                    selectorImg: entities.list[3].img,
                    selectorName: entities.list[3].name,
                    logicCells: [
                        ["empty", true],
                        ["yellow-triangle", "empty"]
                    ]
                },
                    {
                        selectorImg: entities.list[4].img,
                        selectorName: entities.list[4].name,
                        logicCells: [
                            [false, "empty", "empty"],
                            ["empty", false, "empty"],
                            ["empty", "empty", false]
                        ]
                    },
                    {
                        selectorImg: entities.list[5].img,
                        selectorName: entities.list[5].name,
                        logicCells: [
                            ["empty", "empty", null],
                            [true, null, "empty"]
                        ]
                    },
                {
                    selectorImg: entities.list[6].img,
                    selectorName: entities.list[6].name,
                    logicCells: [
                        ["yellow-circle", null, true]
                    ]
                },
                    {
                        selectorImg: entities.list[7].img,
                        selectorName: entities.list[7].name,
                        logicCells: [
                            [null],
                            [false],
                            [null]
                        ]
                    },
                    {
                        selectorImg: entities.list[8].img,
                        selectorName: entities.list[8].name,
                        logicCells: [
                            [false, false, false],
                            [false, false, false],
                            ["empty", false, false]
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
