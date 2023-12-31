import { makeScene2D, Txt, Rect } from "@motion-canvas/2d";
import {
  slideTransition,
  waitFor,
  Direction,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.fill("#242424"); // set the background of this scene to dark gray
  // set up the scene:
  yield view.add(
    <Rect layout direction={"column"} alignItems={"center"}>
      <Txt fontSize={84} fill="#fff">
        What are generics?
      </Txt>
      <Txt fontSize={84 / 1.641} fill="#fff">
        (Typescript)
      </Txt>
    </Rect>
  );

  yield* slideTransition(Direction.Bottom, 1);

  yield* waitUntil("intro-over");
});
