const puzzle = (entities) => {
    return ({
        name: "Difficult 💀",
        logic:
            [

                {
                    selectorImg: entities.PROPERTIES[3].img,
                    selectorName: entities.PROPERTIES[3].name,
                    logicCells: [
                        [true, true, true],
                        ["empty", "triangle", "empty"]
                    ]
                },
                {
                    selectorImg: entities.PROPERTIES[1].img,
                    selectorName: entities.PROPERTIES[1].name,
                    logicCells: [
                        ["empty", true],
                        ["yellow", true],
                        ["empty", true]
                    ]
                },
                {
                    selectorImg: entities.PROPERTIES[4].img,
                    selectorName: entities.PROPERTIES[4].name,
                    logicCells: [
                        [false, false, false],
                        [null, null, null],
                        [null, null, null]
                    ]
                },
                {
                    selectorImg: entities.PROPERTIES[5].img,
                    selectorName: entities.PROPERTIES[5].name,
                    logicCells: [
                        [false, false, false],
                        [false, null, false],
                        [null, null, null]
                    ]
                },
                    {
                        selectorImg: entities.PROPERTIES[2].img,
                        selectorName: entities.PROPERTIES[2].name,
                        logicCells: [
                            [null, false, null],
                            [false, null, null],
                            [null, false, null]
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
