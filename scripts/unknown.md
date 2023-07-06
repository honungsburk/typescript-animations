# When to use `unknown` in typescript

Unknown is similar to any: it can describe any type.

```ts
let x: unknown = 123;
x = true;
x = "what?";
x = [1, 2, 3, 4];
```

the difference is that while when using any you could do whatever you like. With `unknown` you won't be allowed to do anything.

```ts
let x: unknown = 123;

let y = x + 40; // ERROR!
```

You will be forced to convince the type checker that what you want to do is okay. Which could be solved by like this

```ts
let x: unknown = 123;

if (typeof x === "number") {
  let y = x + 40; // OK!
}
```
