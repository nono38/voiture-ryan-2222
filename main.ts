radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(1)
    if (receivedNumber == 101) {
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        wuKong.lightIntensity(11)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        wuKong.mecanumRun(wuKong.RunList.left, 10)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    wuKong.mecanumRun(wuKong.RunList.Front, 10)
})
input.onButtonPressed(Button.B, function () {
    wuKong.mecanumRun(wuKong.RunList.right, 10)
})
radio.setGroup(10)
basic.forever(function () {
	
})
