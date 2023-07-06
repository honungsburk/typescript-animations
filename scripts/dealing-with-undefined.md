# Dealing with undefined and null

## Synthetic Example

### ?? operator

```ts
let x: number | undefiend = undefined;
let n: number = x ?? 23;

console.log(n); // 23
```

```ts
let x: number | undefiend = 42;
let n: number = x ?? 23;

console.log(n); // 42
```

### Optional chaining

```ts
let obj: { n?: number } | undefined = undefined;

if (obj !== undefined && obj.n !== undefined) {
  console.log(obj.n);
} else {
  console.log("23");
}
```

We can simplify the boolean expression somewhat by using optional chaining

```ts
let obj: { n?: number } | undefined = undefined;

if (obj?.n !== undefined) {
  console.log(obj.n);
} else {
  console.log("23");
}
```

let's create a seperate variable to be extra clear about what is goi
ng on

```ts
let obj: { n?: number } | undefined = undefined; // {n : undefined}, { n: 42 }

let objN: number | undefined = obj?.n;

if (objN !== undefined) {
  console.log(obj.n);
} else {
  console.log("23");
}
```

And if we combine it with the previous operator we can simplify it further.

```ts
let obj: { n?: number } | undefined = undefined;

console.log(obj?.n ?? "23");
```

## Real world example

```ts
function runApp(config?: { port?: number }): void {
  const app = createApp(...)

  ...

  let port = 9099

  if(config && config.port !== undefined) {
    port = config.port
  }

  app.run({
    port: port,
  });
}
```

We can simplify this code by using optional chaining.

```ts
function runApp(config?: { port?: number }): void {
  const app = createApp(...)

  ...

  let port = 9099

  if(config?.port !== undefined) {
    port = config.port
  }

  app.run({
    port: port,
  });
}
```

```ts
function runApp(config?: { port?: number }): void {
  const app = createApp(...)

  ...

  app.run({
    port: config?.port ?? 9099,
  });
}
```
