# When should you use `never` in typescript?

The `never` type is for something that never happens. A function that never returns or an array that never contains any values.

```ts
function iNeverReturn(): never {
  throw new Error("never!");
}
```
