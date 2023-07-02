import { makeScene2D, Txt } from "@motion-canvas/2d";
import {
  all,
  createRef,
  slideTransition,
  waitFor,
  Direction,
  waitUntil,
  DEFAULT,
} from "@motion-canvas/core";
import {
  CodeBlock,
  edit,
  insert,
  lines,
  word,
} from "@motion-canvas/2d/lib/components/CodeBlock";

const baseIndentation = "    ";

function indent(n: number = 1) {
  return baseIndentation.repeat(n);
}

export default makeScene2D(function* (view) {
  view.fill("#242424"); // set the background of this scene to dark gray
  const codeRef = createRef<CodeBlock>();

  // set up the scene:
  yield view.add(
    <CodeBlock
      ref={codeRef}
      language="ts"
      code={`const input = [1, 2, 3];
    `}
    />
  );

  yield* slideTransition(Direction.Bottom);

  yield* waitUntil("highlight-numbers");
  yield codeRef().selection(word(0, 14, 9));

  yield* waitUntil("add-map");
  yield codeRef().selection(DEFAULT);
  yield* codeRef().edit(
    2,
    false
  )`const input = [1, 2, 3];${insert("\nconst output = input.map((n) => n % 2 === 0);")}
  `;

  yield* waitUntil("input-type");
  yield* codeRef().edit(2, true)`
  const input${insert(": number[]")} = [1, 2, 3];
  const output = input.map((n) => n % 2 === 0);
  `;

  yield* waitUntil("output-type");
  yield* codeRef().edit(2, true)`
  const input: number[] = [1, 2, 3];
  const output${insert(": boolean[]")} = input.map((n) => n % 2 === 0);
  `;

  yield codeRef().selection(DEFAULT);
  yield* waitUntil("reformat");
  yield* codeRef().edit(3, false)`
  const input: number[] = [1, 2, 3];
  const output: boolean[] = ${insert(
    "\n" + indent()
  )}input.map(${insert("\n" + indent(2))}(n) => n % 2 === 0${insert("\n" + indent())});
  `;

  yield* waitUntil("fn-param-type");
  yield* codeRef().edit(2, true)`
  const input: number[] = [1, 2, 3];
  const output: boolean[] = 
      input.map(
          (n${insert(": number")}) => n % 2 === 0
      );
  `;

  yield* waitUntil("fn-return-type");
  yield* codeRef().edit(2, true)`
  const input: number[] = [1, 2, 3];
  const output: boolean[] = 
      input.map(
          (n: number)${insert(": boolean")} => n % 2 === 0
      );
  `;

  yield* waitUntil("strings-example");
  yield* codeRef().edit(1, true)`
  const input: number[] = [1, 2, 3];
  const output: ${edit("boolean", "string")}[] =
      input.map(
          (n: number): ${edit(
            "boolean",
            "string"
          )} => ${edit("n % 2 === 0", "n.toString()")}
      );
  `;

  yield* waitUntil("array-strings-example");
  yield* codeRef().edit(1, true)`
  const input: number[] = [1, 2, 3];
  const output: string[]${insert("[]")} =
      input.map(
          (n: number): string${insert(
            "[]"
          )} => ${insert("[")}n.toString()${insert("]")}
      );
  `;

  yield* waitUntil("object-example");
  yield* codeRef().edit(1, true)`
  const input: number[] = [1, 2, 3];
  const output: ${edit("string[]", "{ n: number }")}[] =
      input.map(
          (n: number): ${edit(
            "string[]",
            "{ n: number }"
          )} => ${edit("[n.toString()]", "{ n }")}
      );
  `;
  yield* waitUntil("scene-1-over");
  yield codeRef().selection(DEFAULT);
});
