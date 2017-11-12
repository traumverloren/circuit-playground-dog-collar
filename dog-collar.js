let strip = light.createNeoPixelStrip(pins.A1, 9, NeoPixelMode.RGBW);
let isPaused = false;
let needsSetup = true;

const setupStrip = () => {
  strip.setPixelColor(0, Colors.Red);
  strip.setPixelColor(1, Colors.Orange);
  strip.setPixelColor(2, Colors.Yellow);
  strip.setPixelColor(3, Colors.Green);
  strip.setPixelColor(4, Colors.Blue);
  strip.setPixelColor(5, Colors.Blue);
  strip.setPixelColor(6, Colors.Indigo);
  strip.setPixelColor(7, Colors.Violet);
  strip.setPixelColor(8, Colors.Pink);
  strip.show();
  needsSetup = false;
};

loops.forever(() => {
  if (needsSetup) {
    setupStrip();
  }

  if (!isPaused) {
    light.showAnimation(light.rainbowAnimation, 100);
    strip.move(LightMove.Rotate, 1);
  }
});

input.onGesture(Gesture.Shake, () => {
  strip.stopAllAnimations();
  strip.showAnimation(light.sparkleAnimation, 1000);
  needsSetup = true;
});

input.buttonA.onEvent(ButtonEvent.Click, () => {
  strip.stopAllAnimations();
  light.stopAllAnimations();
  strip.clear();
  light.clear();
  isPaused = true;
});

input.buttonB.onEvent(ButtonEvent.Click, () => {
  isPaused = false;
  needsSetup = true;
});
