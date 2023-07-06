## How to make your class constructors smaller!

Use the private keyword to hide methods and properties too the outside world.

### Basic concept

```ts
class SomeClass {
  constructor(field1: string, field2: boolean) {}
}

const someClass = new SomeClass("hello", true);

console.log(someClass.field1); // Does not work!
console.log(someClass.field2); // Does not work!
```

```ts
class SomeClass {
  constructor(public field1: string, public field2: boolean) {}
}

const someClass = new SomeClass("hello", true);

console.log(someClass.field1); // Works!
console.log(someClass.field2); // Works!
```

```ts
class SomeClass {
  constructor(public field1: string, private field2: boolean) {}

  method(): boolean {
    return this.field2;
  }
}

const someClass = new SomeClass("hello", true);

console.log(someClass.field1); // Works!
console.log(someClass.field2); // Does not work!
```

```ts
class SomeClass {
  public field1: string;
  private field2: boolean;

  constructor(_field1: string, _field2: boolean) {
    this.field1 = _field1;
    this.field2 = _field2;
  }

  method(): boolean {
    return this.field2;
  }
}

const someClass = new SomeClass("hello", true);

console.log(someClass.field1); // Works!
console.log(someClass.field2); // Does not work!
```

### How to use

```ts

```
