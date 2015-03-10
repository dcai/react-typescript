## Using react.js with TypeScript


### Option 1

jsx-typescript + typescript-loader

This is easy, we can directly write jsx in TypeScript, however jsx-typescript is actually a fork of offically TypeScript implementation, it has to keep up with new TS release, and it's maintained by individual instead of formal team, so this might not be an ideal way to go.


### Option 2
"ts-jsx-loader" + "ts-loader"

Wrap jsx with a function call:

```
React.jsx(`
    <App />
`)
```
