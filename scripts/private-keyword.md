## Why should you use the `private` keyword in typescript?

Use the private keyword to hide methods and properties too the outside world.

### Basic concept

```ts
class SomeClass {
  internalField: number = ...;

  internalMethod(): string {
    ...
  }
}

const someClass = new SomeClass();

console.log(class.internalField); // Works!
console.log(class.internalMethod()); // Works!
```

```ts
class SomeClass {
  private internalField: number = ...;

  private internalMethod(): string {
    ...
  }
}

const someClass = new SomeClass();

console.log(class.internalField); // Does Not Work!
console.log(class.internalMethod()); // Does Not Work!
```

### How to use

```ts
class Transcriber {
  private currentTranscription: string[] = [];
  private recognizer: SpeechRecognizer | undefined = undefined;

  async start(stream: MediaStream): Promise<void> {
    ...
    this.recognizer = new SpeechRecognizer(...);

    this.currentTranscription = [];

    this.recognizer.recognized = (e, recognition) => {
      if (recognition.result.text) {
        this.currentTranscription.push(recognition.result.text);
      }
    };

    return this.recognizer.start()
  }

  async stop(): Promise<string[]> {
    await this.recognizer.stop()
    const transcript = this.currentTranscription;
    return transcript
  }
}
```
