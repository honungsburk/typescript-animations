# Script

## Generics

What are generics?

Imagine you have an array of numbers

```ts
const numbers = [1, 2, 3];
```

and you use the `map` function to turn it into an array of booleans

```ts
const numbers = [1, 2, 3];
const booleans = numbers.map((n) => n % 2 === 0);
```

If we would write out the types explicitly it would look something like this

```ts
const numbers: number[] = [1, 2, 3];
const booleans: boolean[] = numbers.map((n: number): boolean => n % 2 === 0);
```

But I don't have to return booleans. I could do strings, arrays, objects, or anything I'd like.

```ts
const numbers: number[] = [1, 2, 3];
const booleans: boolean[] = numbers.map((n: number): boolean => n % 2 === 0);
const strings: string[] = numbers.map((n: number): string => n.toString());
const arrays: string[][] = numbers.map((n: number): string[] => [n.toString()]);
const objects: { n: number }[] = numbers.map((n: number): { n: number } => ({
  n,
}));
```

How does that work? And how would we do it ourselves?

Let's write our own map function and go to the bottom of this!

We know that our map function should take a function, and an array and return a final array. Let's not
bother with the types just slap in the `any` type anywhere the compiler complains and focus on the body
of the function.

```ts
function map(fn: any, array: any): any {}
```

We iterate through each item in the array we were given, applying our function to each item, then pushing
it into a new array. When we are done we simply return the new array.

```ts
function map(fn: any, array: any): any {
  const newArray = [];
  for (let item of array) {
    const newItem = fn(item);
    newArray.push(newItem);
  }

  return newArray;
}
```

Now, it time to add types. We know the function takes one argument and returns something. We also know that we
take one array, and return a new one.

```ts
function map(fn: (x: any) => any, array: any[]): any[] {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: any = fn(item);
    newArray.push(newItem);
  }

  return newArray;
}
```

But we also know that the argument to the function we were given must be of the same type as whatever the array contains.

```ts
function map(fn: (x: A) => any, array: A[]): any[] {
  const newArray: any[] = [];
  for (let item of array) {
    const newItem: A = fn(item);
    newArray.push(newItem);
  }

  return newArray;
}
```

Same is true for whatever the function returns. It must match the contents of the new array.

```ts
function map(fn: (x: A) => B, array: A[]): B[] {
  const newArray: B[] = [];
  for (let item of array) {
    const newItem: A = fn(item);
    newArray.push(newItem);
  }

  return newArray;
}
```

And here we are pretty much done, except that typescript what us to declare our generics using angle brackets.

```ts
function map<A, B>(fn: (x: A) => B, array: A[]): B[] {
  const newArray: B[] = [];
  for (let item of array) {
    const newItem: A = fn(item);
    newArray.push(newItem);
  }

  return newArray;
}
```

### Script 2

What are generics?

Imagine you have an array of numbers and you use one of my favorite methods: the `map` method. to turn it from an array of numbers into an array of booleans

let's reformat a bit.

As you have probably figured out the function takes numbers and outputs booleans

But we don't have to return booleans, we could return strings, a list of strings, or even an entire object. The `map` method can return different types depending on its inputs. This is the power of generics. Letting the caller of the method decide the type.

But how does it work?

Let's write our own version.
We will set all types to any for now, so we can focus on writing the body of the function.

We want to loop through each item in the array, applying it to
the function and appending it to our new list. And when we are done, return said list.

So let's think a bit. This function takes one argument so it should look something like this. We know that the array is an array, so let's add that as well. Same is true for the return type.

But we also know that the argument to the function must be of the same type as whatever the array contains. So whatever these two any's should be, they must be the same.

By the same logic the return type of the function must match contents or the returned array.

Finally, we declare our two generics: A and B. And there you go: a function mapping an array from one type to another.

Happy coding.
