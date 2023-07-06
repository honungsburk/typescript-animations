# Any in typescript

We use `any` when we do not care about the type

## Script

We use `any` when we do not care or don't know about the type

```ts
let x: any = 123;
x = true;
x = "what?";
x = [1, 2, 3, 4];
```

The `any` type gives typescript an escape hatch. It let's you opt-out of the type checker.

This is useful if you, for example, are converting an old javascript application into typescript.
If you didn't have `any` you would be forced to add types to potentially tens of thousands of lines of code all at ones.
That would be big undertaking. But thanks to any you would be able to add types gradually to your project.

Here we have a function that returns

```js
export const searchJobs = async (query) => {
  const response = await axios.get("/jobs/search", {
    params: { query: query },
    baseURL: BASE_URL,
  });

  return result.data;
};
```

We add any types to be explicit.

```js
export const searchJobs = async (query: any): any => {
  const response = await axios.get("/jobs/search", {
    params: { query: query },
    baseURL: BASE_URL,
  });

  return result.data;
};
```

After looking at the code we quickly discover that the query parameter is a `string`. The response is a bit more
difficult to figure out but at least we know it is returning a promise.

```js
export const searchJobs = async (query: string): Promise<any> => {
  const response = await axios.get("/jobs/search", {
    params: { query: query },
    baseURL: BASE_URL,
  });

  return result.data;
};
```

Later we come back after some more time in the trenches and write the final return type

```js

type JobDocument = {
    company?: string,
    salaryRange?: {
        top: string,
        low: string,
        currency; string
    }
    title: string,
    description: string
    tags?: string[]
}

export const searchJobs = async (query: string): Promise<JobDocument> => {
  const response = await axios.get("/jobs/search", {
    params: { query: query },
    baseURL: BASE_URL,
  });

  return result.data;
};
```
