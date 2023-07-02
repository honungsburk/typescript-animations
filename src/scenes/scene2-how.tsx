import { makeScene2D, Txt } from "@motion-canvas/2d";
import {
  all,
  createRef,
  slideTransition,
  waitFor,
  Direction,
  waitUntil,
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
    2,
    false
  )`function map(fn${insert(": any")}, array${insert(": any")})${insert(": any")} {${insert("\n\n")}}`;

  yield* waitUntil("for-loop");

  yield* codeRef().edit(1, false)`function map(fn: any, array: any): any {
  ${insert("for (let item of array) {\n  \n  }")}
}`;

  yield* waitUntil("new-array");

  yield* codeRef().edit(
    2,
    false
  )`function map(fn: any, array: any): any {${insert("\n  const newArray: any[] = [];")}
  for (let item of array) {

  }
}`;

  yield* waitUntil("apply-fn");
  yield* codeRef().edit(1, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    ${insert("const newItem: any = fn(item);")}
  }
}`;
  yield* waitUntil("append-item");
  yield* codeRef().edit(1, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);${insert("\n    newArray.push(newItem);")}
  }
}`;

  yield* waitUntil("return-new-array");
  yield* codeRef().edit(1, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }${insert("\n  return newArray;")}
}`;

  yield* waitUntil("fn-arg-type");
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: ${edit("any", "(x: any) => any")}, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("array-arg-type");
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: any) => any, array: any${insert("[]")}): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("array-return-type");
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: any) => any, array: any[]): any${insert("[]")}
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("a-generic");
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: ${edit("any", "A")}) => any, array: ${edit("any", "A")}[]): any[]
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;
  yield* waitUntil("b-generic");
  yield* codeRef().edit(
    2,
    false
  )`function map(fn: (x: A) => ${edit("any", "B")}, array: A[]): ${edit("any", "B")}[]
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
    false
  )`function map${insert("<A, B>")}(fn: (x: A) => B, array: A[]): B[]
  const newArray: B[] = [];
  for (let item of array) {
    const newItem: B = fn(item);
    newArray.push(newItem);
  }
  return newArray;
}`;

  // proceed with the animation
  yield* waitUntil("scene-2-over");
});
