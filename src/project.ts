import { makeProject } from "@motion-canvas/core";

import intro from "./scenes/intro?scene";
import scene1 from "./scenes/scene1-why?scene";
import scene2 from "./scenes/scene2-how?scene";

export default makeProject({
  scenes: [intro, scene1, scene2],
});
