import { makeScene2D, Txt } from "@motion-canvas/2d";
import {
  all,
  createRef,
  slideTransition,
  waitFor,
  Direction,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // set up the scene:
  view.add(<Txt>Second Scene</Txt>);

  // perform a slide transition to the left:
  yield* slideTransition(Direction.Left);

  // proceed with the animation
  yield* waitFor(3);
});
