input.onButtonPressed(Button.AB, function () {
    αποτέλεσμα = 0
})
input.onButtonPressed(Button.A, function () {
    ψηφίο = randint(0, 9)
    basic.showString("" + (ψηφίο))
})
input.onButtonPressed(Button.B, function () {
    επιλογήτελεστή = randint(0, 4)
    if (επιλογήτελεστή == 0) {
        basic.showString("" + (τελεστής[0]))
        αποτέλεσμα = αποτέλεσμα + ψηφίο
    }
    if (επιλογήτελεστή == 1) {
        basic.showString("" + (τελεστής[1]))
        αποτέλεσμα = αποτέλεσμα - ψηφίο
    }
    if (επιλογήτελεστή == 2) {
        basic.showString("" + (τελεστής[2]))
        αποτέλεσμα = αποτέλεσμα * ψηφίο
    }
    if (επιλογήτελεστή == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . # # # .
            . . . . .
            . . # . .
            `)
        αποτέλεσμα = αποτέλεσμα / ψηφίο
    }
    if (επιλογήτελεστή == 4) {
        basic.showString("" + (τελεστής[4]))
        αποτέλεσμα = αποτέλεσμα
        basic.pause(5000)
        for (let index = 0; index < 3; index++) {
            basic.showString("=")
            basic.showNumber(αποτέλεσμα)
        }
    }
})
let επιλογήτελεστή = 0
let ψηφίο = 0
let αποτέλεσμα = 0
let τελεστής: string[] = []
τελεστής = [
"+",
"-",
"*",
":",
"="
]
αποτέλεσμα = 0
