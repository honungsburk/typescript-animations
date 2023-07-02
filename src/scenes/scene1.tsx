import { makeScene2D, Txt } from "@motion-canvas/2d";
import { slideTransition, waitFor, Direction } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // set up the scene:
  view.add(<Txt>First Scene</Txt>);
  yield* slideTransition(Direction.Bottom);

  // proceed with the animation
  yield* waitFor(3);
});
