turnLeft();
for (var count = 0; count < 2; count++) {
  moveForward();
}
for (var count2 = 0; count2 < 2; count2++) {
  destroyBlock();
  moveForward();
}
turnRight();
destroyBlock();
for (var count3 = 0; count3 < 2; count3++) {
  turnRight();
}
for (var count4 = 0; count4 < 2; count4++) {
  moveForward();
}
destroyBlock();
moveForward();
turnLeft();
for (var count5 = 0; count5 < 5; count5++) {
  moveForward();
}
destroyBlock();
turnLeft();
for (var count6 = 0; count6 < 5; count6++) {
  moveForward();
}
destroyBlock();
turnLeft();
for (var count7 = 0; count7 < 3; count7++) {
  moveForward();
}
destroyBlock();
moveForward();
turnLeft();
for (var count8 = 0; count8 < 3; count8++) {
  placeBlockAhead("bedrock");
  turnLeft();
  moveForward();
}
