let ψηφίο = 0
let επιλογήτελεστή = 0
input.onButtonPressed(Button.A, function () {
    ψηφίο = randint(0, 9)
    basic.showString("" + (ψηφίο))
})
input.onButtonPressed(Button.B, function () {
    επιλογήτελεστή = randint(0, 4)
    if (επιλογήτελεστή == 0) {
        basic.showString("+")
    }
    if (επιλογήτελεστή == 1) {
        basic.showString("-")
    }
    if (επιλογήτελεστή == 2) {
        basic.showString("x")
    }
    if (επιλογήτελεστή == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . # # # .
            . . . . .
            . . # . .
            `)
    }
    if (επιλογήτελεστή == 4) {
        basic.showString("=")
    }
})
