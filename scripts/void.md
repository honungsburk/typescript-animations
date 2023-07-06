# What is void?

Use void to describe a function that doesn't return a value.

## Script

### Scene 1

What is the return type of this function?

```ts
function helloWorld() {
  console.log("Hello, world!");
}

helloWorld();
```

It is `void`!

```ts
function helloWorld(): void {
  console.log("Hello, world!");
}
helloWorld();
```

You can assign the output of a void function to a variable

```ts
function helloWorld(): void {
  console.log("Hello, world!");
}
let speech: void = sayHi();
console.log(speech); //Output: undefined
```

### Scene 2

A variable that is void can only be assigned `null` or `undefined`

```ts
let nothing: void = undefined;
let nothing2: void = null;
let num: void = 1; // Error
```
