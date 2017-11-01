let strip = light.createNeoPixelStrip(pins.A0, 9, NeoPixelMode.RGBW);

strip.setPixelColor(0, Colors.Red);
strip.setPixelColor(1, Colors.Orange);
strip.setPixelColor(2, Colors.Yellow);
strip.setPixelColor(3, Colors.Green);
strip.setPixelColor(4, Colors.Blue);
strip.setPixelColor(4, Colors.Blue);
strip.setPixelColor(6, Colors.Indigo);
strip.setPixelColor(7, Colors.Violet);
strip.setPixelColor(8, Colors.Pink);

strip.show();

loops.forever(function() {
  light.pixels.showAnimation(light.animation(LightAnimation.Rainbow), 100);
  strip.move(LightMove.Rotate, 1);
  loops.pause(100);
});
input.onGesture(Gesture.Shake, function() {
  light.pixels.stopAllAnimations();
  light.pixels.showAnimation(light.animation(LightAnimation.Sparkle), 1000);
});
