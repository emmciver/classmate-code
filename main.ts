input.onGesture(Gesture.TiltLeft, function () {
    music.playTone(698, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
