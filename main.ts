input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("E F A B A A F G ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
