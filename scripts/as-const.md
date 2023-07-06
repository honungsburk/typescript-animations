## Stay dry with `as const`

Create fully readonly objects

## Example 1

```ts
// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```

```ts
// Type '"hello"'
let x = <const>"hello";
// Type 'readonly [10, 20]'
let y = <const>[10, 20];
// Type '{ readonly text: "hello" }'
let z = <const>{ text: "hello" };
```

## Real World Example

```ts
type Env = {
  readonly PORT: 9099;
  readonly LOG_LEVEL: "error";
};

const ENV: Env = {
  PORT: 9099,
  LOG_LEVEL: "error",
};
```

```ts
const ENV = {
  PORT: 9099,
  LOG_LEVEL: "error",
} as const;
```

If you don't want type literals you are better off defining the type separately:

```ts
type Env = {
  readonly PORT: number;
  readonly LOG_LEVEL: "debug" | "info" | "error" | "warning" | "trace" | "none";
};

const ENV: Env = {
  PORT: 9099,
  LOG_LEVEL: "error",
};
```

## Example 2

```ts

function unzip(xs: ) {
    return [] as const
}

```
