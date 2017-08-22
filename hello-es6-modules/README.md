# Hello World For ES6
A simple hello world project for ES6.

## Installation
To Install:

```bash
npm install
npm start
```

## How This Works
There are two steps in this process. Open the package.json for the npm scripts code.
1. Use Babel To Convert the ES5.
2. Use Browserify to Convert the CommonJS module syntax to something that works in a browser.

## Notes

Since Babel can handle the ES6 Modules, but can not convert them to browser readable code (without requirejs)
you need the two steps.
