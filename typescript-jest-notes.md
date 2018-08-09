# Jest with TypeScript

_There weren't that many jest & typescript articles out there so I thought I'd make a concise but complete tutorial on how to use these two together._

## Install

Jest with TypeScript requires, `jest`, `@types/jest` & `ts-jest` as development dependencies. So install them with:

```bash
npm i -D jest @types/jest ts-jest
```

- `jest` is the jest framework itself including its runner
- `@types/jest` are the required typescript typing modules for jest to test against
- `ts-jest` is a preprocessor that does live transpiling of typescript before jest sees it

## Configure

Jest among other locations will look inside any file named `jest.config.js` in the root of the project. This is important because jest needs to know how to handle the project.

`./jest.config.js`

```js
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
```

- Here it is assumed that all files will be in the project root's `src` directory.
  - This isn't necessary and can be customesed for whatever organizing method is used.
- `transform` is a configuration object to specify to `jest` that it should send `.ts` & `.tsx` files to `ts-jest` for transpiling before running tests.
- `test-regex`
  - Tells jest to look for tests in either:
    - Directories named `__tests__`
    - Files with the pattern `SOME-FILE.test.ts` or `SOME-FILE.spec.tsx`
    - Any extension for typescript, be it `.tsx` or `.ts` will work
- `moduleFileExtensions` is a configuration parameter to tell jest to look out for some file extensions that are commonly used in typescript & javascript projects.
  - This has been specified as `ts|tsx|js|tsx|json|node`.

## Test

Now, running `npx jest` in any typescript project should execute the tests created. And it can be run constantly and just watch for file changes to trigger a new run of the tests using `npx jest --watch`.

### NPM Script

Optionally this can be run through an npm script:

```json
{
  // previous package.json...
  "scripts": {
    // ... other scripts ...
    "test": "jest",
    "test:watch": "jest --watch"
  },
  // next parts of package.json...
}
```

Now running `npm run test` performs one run of all test files that jest finds, according to its configuration file. And `npm run test:watch` will keep jest running and waiting for a file change to run tests.

## Create Tests

So far there hasn't been any tests for it to pick up on. Let's create some.

### Test a Bubble Sort Module

Create a file `bubble-sort.ts` in `src`:

```ts

```

...and a test file `bubble-sort.test.ts` in `src`:

```ts
```

