## Why should you use the `readonly` keyword in typescript?

Use the `readonly` keyword to prevent properties on objects from being updated.

### Basic concept

```ts
type Book = {
    name: string
    author: string
    rating: number
}

const book: Book = {
    name: "Harry Potter and the Philosopher’s Stone"
    author: "J.K. Rowling"
    rating: 4.47
}

console.log(book.author)
book.author = "Some other author"
console.log(book.author)
```

```ts
type Book = {
    name: string
    readonly author: string
    rating: number
}

const book: Book = {
    name: "Harry Potter and the Philosopher’s Stone"
    author: "J.K. Rowling"
    rating: 4.47
}

console.log(book.author)
book.author = "Some other author" // Won't work
console.log(book.author)
```

## Real World Examples

### Immutable Config

We have configuration parameters that are loaded when the application starts and then never changed.

```ts

type Environment = {
    readonly PORT: number
    readonly LOG_LEVEL: "debug" | "info" | "error" | "warning" | "trace" | "none"
}

const ENV: Environment = {
    PORT = process.env.PORT ?? 9099
    LOG_LEVEL = process.env.LOG_LEVEL ?? "error"
}
```
