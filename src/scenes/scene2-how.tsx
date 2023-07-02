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
  remove,
  lines,
  word,
} from "@motion-canvas/2d/lib/components/CodeBlock";

export default makeScene2D(function* (view) {
  view.fill("#242424"); // set the background of this scene to dark gray
  const codeRef = createRef<CodeBlock>();

  // perform a slide transition to the left:
  // set up the scene:
  yield view.add(
    <CodeBlock
      ref={codeRef}
      language="ts"
      code={`function map(fn, array) {}`}
    />
  );

  yield* slideTransition(Direction.Bottom);

  yield* waitUntil("any-types");
  yield* codeRef().edit(
    0.1,
    false
  )`function map(fn${insert(":")}, array${insert(":")})${insert(":")} {}`;
  yield* codeRef().edit(
    2,
    true
  )`function map(fn:${insert(" any")}, array:${insert(" any")}):${insert(" any")} {${insert("\n\n")}}`;

  yield* waitUntil("for-loop");

  yield* codeRef().edit(1, true)`function map(fn: any, array: any): any {
  ${insert("for (let item of array) {\n  \n  }")}
}`;

  yield* waitUntil("apply-fn");
  yield* codeRef().edit(1, true)`function map(fn: any, array: any): any {
  for (let item of array) {
    ${insert("const newItem: any = fn(item);")}
  }
}`;
  yield* waitUntil("append-item");
  yield* codeRef().edit(
    1,
    true
  )`function map(fn: any, array: any): any {${insert("\n  const newArray: any[] = [];")}
  for (let item of array) {
    const newItem: any = fn(item);${insert("\n    newArray.push(newItem);")}
  }
}`;

  yield* waitUntil("return-new-array");
  yield* codeRef().edit(2, true)`function map(fn: any, array: any): any {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }${insert("\n  return newArray;")}
}`;

  yield* waitUntil("highlight-nothing");
  yield codeRef().selection(DEFAULT);

  yield* waitUntil("highlight-fn-arg");
  yield codeRef().selection([word(0, 13, 2), word(3, 25, 8)].flat());

  yield* waitUntil("fn-arg-type");
  yield* codeRef().edit(
    2,
    true
  )`function map(fn: ${edit("any", "(x: any) => any")}, array: any): any {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;

  yield* waitUntil("array-highlight");
  yield codeRef().selection(word(0, 34, 10));

  yield* waitUntil("array-arg-type");
  yield codeRef().selection(word(0, 34, 12));
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: any) => any, array: any${insert("[]")}): any {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("array-return-type");
  yield codeRef().selection(word(0, 49, 5));
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: any) => any, array: any[]): any${insert("[]")} {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;

  yield* waitUntil("a-same-type-first");
  yield codeRef().selection([word(0, 21, 3)].flat());

  yield* waitUntil("a-same-type-second");
  yield codeRef().selection([word(0, 41, 3)].flat());

  yield* waitUntil("a-same-type-both");
  yield codeRef().selection([word(0, 21, 3), word(0, 41, 3)].flat());

  yield* waitUntil("a-generic");
  yield* codeRef().edit(
    2,
    true
  )`function map(fn: (x: ${edit("any", "A")}) => any, array: ${edit("any", "A")}[]): any[] {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;

  // yield* waitUntil("b-same-type-first");
  // yield codeRef().selection([word(0, 27, 3)].flat());

  // yield* waitUntil("b-same-type-second");
  // yield codeRef().selection([word(0, 45, 3)].flat());

  yield* waitUntil("b-same-type-both");
  yield codeRef().selection([word(0, 27, 3), word(0, 45, 3)].flat());
  yield* waitUntil("b-generic");
  yield* codeRef().edit(
    2,
    true
  )`function map(fn: (x: A) => ${edit("any", "B")}, array: A[]): ${edit("any", "B")}[] {
  const newArray: ${edit("any", "B")}[] = [];
  for (let item of array) {
    const newItem: ${edit("any", "B")} = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("generics");
  yield* codeRef().edit(
    2,
    true
  )`function map${insert("<A, B>")}(fn: (x: A) => B, array: A[]): B[] {
  const newArray: B[] = [];
  for (let item of array) {
    const newItem: B = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;

  yield* waitUntil("over");
  yield codeRef().selection(DEFAULT);

  yield* waitUntil("A's");
  yield codeRef().selection(
    [word(0, 13, 1), word(0, 27, 1), word(0, 43, 1)].flat()
  );

  yield* waitUntil("B's");
  yield codeRef().selection(
    [
      word(0, 16, 1),
      word(0, 33, 1),
      word(0, 49, 1),
      word(1, 18, 1),
      word(3, 19, 1),
    ].flat()
  );

  // proceed with the animation
  yield* waitUntil("scene-2-over");
});
