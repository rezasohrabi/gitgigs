<div align="center">
  <br>
  <br>
  <br>
  <h1>webpack</h1>
  <p>
    webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
</div>


<h2 align="center">Install</h2>

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```

<h2 align="center">Introduction</h2>

webpack is a bundler for modules. The main purpose is to bundle JavaScript
files for usage in a browser, yet it is also capable of transforming, bundling,
or packaging just about any resource or asset.

**TL;DR**

- Bundles [ES Modules](https://www.2ality.com/2014/09/es6-modules-final.html), [CommonJS](http://wiki.commonjs.org/), and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.

### Get Started

Check out webpack's quick [**Get Started**](https://webpack.js.org/guides/getting-started) guide and the [other guides](https://webpack.js.org/guides/).

### Browser Compatibility

webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).
webpack also needs `Promise` for `import()` and `require.ensure()`. If you want to support older browsers, you will need to [load a polyfill](https://webpack.js.org/guides/shimming/) before using these expressions.

<h2 align="center">Concepts</h2>

### [Plugins](https://webpack.js.org/plugins/)

webpack has a [rich plugin
interface](https://webpack.js.org/plugins/). Most of the features
within webpack itself use this plugin interface. This makes webpack very
**flexible**.


### [Loaders](https://webpack.js.org/loaders/)

webpack enables the use of loaders to preprocess files. This allows you to bundle
**any static resource** way beyond JavaScript. You can easily [write your own
loaders](https://webpack.js.org/api/loaders/) using Node.js.

Loaders are activated by using `loadername!` prefixes in `require()` statements,
or are automatically applied via regex from your webpack configuration.


### Performance

webpack uses async I/O and has multiple caching levels. This makes webpack fast
and incredibly **fast** on incremental compilations.

### Module Formats

webpack supports ES2015+, CommonJS and AMD modules **out of the box**. It performs clever static
analysis on the AST of your code. It even has an evaluation engine to evaluate
simple expressions. This allows you to **support most existing libraries** out of the box.

### [Code Splitting](https://webpack.js.org/guides/code-splitting/)

webpack allows you to split your codebase into multiple chunks. Chunks are
loaded asynchronously at runtime. This reduces the initial loading time.

### [Optimizations](https://webpack.js.org/guides/production-build/)

webpack can do many optimizations to **reduce the output size of your
JavaScript** by deduplicating frequently used modules, minifying, and giving
you full control of what is loaded initially and what is loaded at runtime
through code splitting. It can also make your code chunks **cache
friendly** by using hashes.