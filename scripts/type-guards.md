# How to use Type Guards in Typescript

Type guards are functions that return true if something is of a certain type, and the compiler knows about it.

## Example

```ts
function isString(x: any): x is string {
  return typeof x === "string";
}

const x: string | number = "Hello, world!";

if (isString(x)) {
  x.trim();
  x.at();
  // etc
} else {
  // And inside of here it is a number
  x.toString();
  const y: number = x + 123;
}
```
