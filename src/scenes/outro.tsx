import { makeScene2D, Txt, Rect } from "@motion-canvas/2d";
import { slideTransition, waitFor, Direction } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.fill("#242424"); // set the background of this scene to dark gray
  // set up the scene:
  yield view.add(
    <Rect layout direction={"column"} alignItems={"center"}>
      <Txt fontSize={84} fill="#fff">
        Happy Coding!
      </Txt>
    </Rect>
  );

  yield* slideTransition(Direction.Bottom);
  // proceed with the animation
  yield* waitFor(3);
});
