let nombres_1 = 0
let Nombres_2 = 0
input.onButtonPressed(Button.A, function () {
    nombres_1 = nombres_1 + 1
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("" + (nombres_1 + Nombres_2))
})
input.onButtonPressed(Button.AB, function () {
    nombres_1 = 0
    nombres_1 = 0
    basic.showString("000")
})
input.onButtonPressed(Button.B, function () {
    Nombres_2 = Nombres_2 + 1
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
