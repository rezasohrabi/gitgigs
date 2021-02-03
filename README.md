# gitgigs
Install
Install with npm:

npm install --save-dev webpack
Install with yarn:

yarn add webpack --dev
Introduction
webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

TL;DR

Bundles ES Modules, CommonJS, and AMD modules (even combined).
Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
Dependencies are resolved during compilation, reducing the runtime size.
Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
Highly modular plugin system to do whatever else your application requires.
Get Started
Check out webpack's quick Get Started guide and the other guides.

Browser Compatibility
webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack also needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions.


---------------------------------------------------------------------------------------------------------------------


Plugins
webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack very flexible.



Loaders
webpack enables the use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.



Performance
webpack uses async I/O and has multiple caching levels. This makes webpack fast and incredibly fast on incremental compilations.



Module Formats
webpack supports ES2015+, CommonJS and AMD modules out of the box. It performs clever static analysis on the AST of your code. It even has an evaluation engine to evaluate simple expressions. This allows you to support most existing libraries out of the box.



Code Splitting
webpack allows you to split your codebase into multiple chunks. Chunks are loaded asynchronously at runtime. This reduces the initial loading time.



Optimizations
webpack can do many optimizations to reduce the output size of your JavaScript by deduplicating frequently used modules, minifying, and giving you full control of what is loaded initially and what is loaded at runtime through code splitting. It can also make your code chunks cache friendly by using hashes.