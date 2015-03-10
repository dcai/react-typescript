## Using react.js with TypeScript

### Pain point 1: Cannot find external module react/addons.ts

#### Solution
Trick compiler to belive the file exists by adding definition files, please see lib/.
And we need to add `///<reference path="" />` line to all TypeScript files.


### Pain point 2: jsx
#### Option 1

[jsx-typescript](https://github.com/fdecampredon/jsx-typescript) + [typescript-loader](https://github.com/jgoz/typescript-loader)

This is easy, we can directly write jsx in TypeScript, however jsx-typescript is actually a fork of offically TypeScript implementation, it has to keep up with new TS release, and it's maintained by individual instead of formal team, so this might not be an ideal way to go.


#### Option 2
[ts-jsx-loader](https://github.com/jbrantly/ts-jsx-loader) + [ts-loader](https://github.com/jbrantly/ts-loader)

Wrap jsx within a function call:

```
React.jsx(`
    <App />
`)
```

We will have this kind of wrapper for jsx, but the implementation is simpler and maintainable.
