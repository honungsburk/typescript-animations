import { makeScene2D, Txt } from "@motion-canvas/2d";
import {
  all,
  createRef,
  slideTransition,
  waitFor,
  Direction,
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

  // yield* codeRef().edit(2, false)`${insert("function map(fn, array) {}")}`;

  yield* codeRef().edit(
    2,
    false
  )`function map(fn${insert(": any")}, array${insert(": any")})${insert(": any")} {${insert("\n\n")}}`;

  yield* codeRef().edit(2, false)`function map(fn: any, array: any): any {
  ${insert("for (let item of array) {\n  \n  }")}
}`;

  yield* codeRef().edit(
    2,
    false
  )`function map(fn: any, array: any): any {${insert("\n  const newArray: any[] = [];")}
  for (let item of array) {

  }
}`;

  yield* codeRef().edit(2, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    ${insert("const newItem: any = fn(item);")}
  }
}`;

  yield* codeRef().edit(2, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);${insert("\n    newArray.push(newItem);")}
  }
}`;

  yield* codeRef().edit(2, false)`function map(fn: any, array: any): any
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }${insert("\n  return newArray;")}
}`;

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
  yield* waitFor(3);
});
