import { makeProject } from "@motion-canvas/core";

import example from "./scenes/example?scene";
import scene1 from "./scenes/scene1?scene";
import scene2 from "./scenes/scene2?scene";

export default makeProject({
  scenes: [scene1, scene2],
});