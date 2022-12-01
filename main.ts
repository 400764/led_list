let list: number[][] = []
basic.forever(function () {
    basic.pause(200)
    basic.clearScreen()
    basic.pause(100)
    list = [
    [
    0,
    0,
    1,
    0,
    0
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    1,
    0,
    1,
    0,
    1
    ],
    [
    0,
    0,
    1,
    0,
    0
    ]
    ]
    for (let index = 0; index <= 4; index++) {
        for (let _1 = 0; _1 <= 4; _1++) {
            if (list[index][_1] == 1) {
                led.plot(_1, index)
            } else {
                led.unplot(_1, index)
            }
        }
    }
})
