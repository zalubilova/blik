let a = 0
input.onButtonPressed(Button.A, function () {
    a = 0
    for (let pořadí = 0; pořadí <= 4; pořadí++) {
        led.plot(a, a)
        basic.pause(500)
        led.unplot(a, a)
        a += 1
    }
})
input.onButtonPressed(Button.B, function () {
    a = 4
    for (let pořadí = 0; pořadí <= 4; pořadí++) {
        led.plot(pořadí, a)
        basic.pause(500)
        led.unplot(pořadí, a)
        a += -1
    }
})
basic.forever(function () {
	
})
