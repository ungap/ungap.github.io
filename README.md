# ungap

Modern Web development one jump at the time

![jumping the gap](img/denny-luan-crop.jpg)
<sup>**Photo by [Denny Luan](https://unsplash.com/photos/ovm_b91yEgY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/gap-landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)**</sup>


## About

The [ungap project](https://github.com/ungap) was born after [years](https://github.com/WebReflection/es6-collections) of [attempts](https://github.com/WebReflection/poorlyfills) to always fix [the](https://www.npmjs.com/search?q=weakmap) [same](https://www.npmjs.com/search?q=weakset) [issue](https://www.npmjs.com/search?q=ES%20Map), but never in a modular way and, most importantly, never in a single, 100% code covered, **organization**.


### Focused on size, compatibility, and quality

Each module is written in ES5 compatible syntax to avoid both unnecessary transpilers bloat and potentially unexpected behaviors.
Each module is also 100% code-covered through tests able to verify the whole API both as native and polyfilled version.
The constrains per module are the following:

  * NodeJS, ESM, Worker, and Web compatibility
  * easy to read and maintain ES5 syntax, keeping the code size in mind
  * mandatory 100% code coverage through all possible NodeJS hacks to ensure every part of the code that has a meaning works as expected (some meaningless part can be skipped but functionalities must be ensured)
  * every module is stand-alone, allowing incremental patch or polyfilling
  * modules should be bundlers and transpilers resistant to avoid any possible, production code, surprise <sup><sub>[1]</sub></sup>
  
<sup><sub>[1]</sub></sup> <sup><sub>as example: [stripped out features detections](https://twitter.com/WebReflection/status/1065665486233448449)</sub></sup>


#### **⚠** Pragmatic is better than <sub><sup>(im)</sup></sub>perfect

There are parts of the specifications that are very hard, if not impossible, to polyfill.
The main purpose of this project is to help developers move forward, and possibly without unnecessary bloat.
This basically means that polyfills are written to support 99% of the use cases, without granting 100% spec compliance.

If you need that, which again is basically impossible in most of the cases, feel free to keep using whatever monolithic polyfill or approach you were using before.


## How to use a module

Every single module is made available as ESM, through the `package.json`'s `module` field, CJS via `package.json`'s `main` field, and browser script polyfill / patch via `package.json`'s `unpkg` field so that you can use directly the [unpkg CDN](https://unpkg.com/#/).

```js
// as ECMAScript module
import WeakSet from '@ungap/weakset';

// as CommonJS module
const WeakSet = require('@ungap/weakset');

// as Browser global patch
<script src="https://unpkg.com/@ungap/weakset"></script>
```


## Essential polyfills

Essentials modules covers most common use cases without going full bloated API.
As example, the [essential-map](https://unpkg.com/@ungap/essential-map) exposes only `get`, `set`, `delete`, and `has` which is most of the time everything one needs, as opposite of going full [map](https://unpkg.com/@ungap/map).
The main benefit of the essential modules is their size, simplicity, or even performance.

  * [@ungap/essential-map](https://github.com/ungap/essential-map) with only common method
  * [@ungap/essential-set](https://github.com/ungap/essential-set) with only common method
  * [@ungap/essential-symbol](https://github.com/ungap/essential-symbol) providing just its uniqueness
  * [@ungap/essential-weakset](https://github.com/ungap/essential-weakset) with simpler logic but widely compatible


## Regular polyfills

  * [@ungap/assign](https://github.com/ungap/assign) compatible with all JS engines
  * [@ungap/array-iterator](https://github.com/ungap/array-iterator) compatible with all engines that have a global `Symbol`
  * [@ungap/custom-elements-builtin](https://github.com/ungap/custom-elements-builtin) compatible with browsers that already have `customElements` (i.e. Safari)
  * [@ungap/custom-event](https://github.com/ungap/custom-event) compatible with all browsers
  * [@ungap/dom-iterable](https://github.com/ungap/dom-iterable) compatible with all engines that have a global `Symbol`
  * [@ungap/element-matches](https://github.com/ungap/element-matches) compatible with all JS engines with a DOM env.
  * [@ungap/event](https://github.com/ungap/event) with double fallback through `CustomEvent`
  * [@ungap/event-target](https://github.com/ungap/event-target) compatible with all JS engines
  * [@ungap/from-entries](https://github.com/ungap/from-entries) compatible with all JS engines
  * [@ungap/global-this](https://github.com/ungap/global-this) compatible with all JS engines
  * [@ungap/import-node](https://github.com/ungap/import-node) compatible with all JS engines
  * [@ungap/is-array](https://github.com/ungap/is-array) compatible with all JS engines
  * [@ungap/json](https://github.com/ungap/json) fixes `\u2028|9` in all JS engines with a `JSON` global
  * [@ungap/map](https://github.com/ungap/map) compatible with all JS engines
  * [@ungap/promise-any](https://github.com/ungap/promise-any) compatible with all JS engines
  * [@ungap/set](https://github.com/ungap/set) compatible with all JS engines
  * [@ungap/template-literal](https://github.com/ungap/template-literal) compatible with all JS engines
  * [@ungap/template-tag-arguments](https://github.com/ungap/template-tag-arguments) compatible with all JS engines
  * [@ungap/trim](https://github.com/ungap/trim) compatible with all JS engines
  * [@ungap/url-search-params](https://github.com/ungap/url-search-params) compatible with all JS engines
  * [@ungap/weakmap](https://github.com/ungap/weakmap) compatible with all JS engines
  * [@ungap/weakset](https://github.com/ungap/weakset) compatible with any engine that already has a `WeakMap` (i.e. _IE11+_)


## Polyfilled utilities

Ungap utilities are meant to simplify cross browser development without the bloat of a whole polyfill.

  * [@ungap/create-content](https://github.com/ungap/create-content) compatible with all JS engines <sup><sub>(backend via basichtml or others)</sub></sup>

## Plugins to remove unnecessary bloat

If you are targeting modern browsers only, you might want to exclude some unnecessary code from various ungapped APIs.

Following a list of plugins which aim is to address those cases:

  * [babel-plugin-remove-ungap](https://github.com/cfware/babel-plugin-remove-ungap) provides the ability to arbitrarily exclude polyfills through tree-shaking, an awesome tool from [coreyfarrell](https://github.com/coreyfarrell) ♥
  * [@ungap/degap](https://github.com/ungap/degap#ungapdegap) to make any module either a no-op, just the native version, or the simplified utility (as in element-matches case)


## License

Each module is under the [npm](https://www.npmjs.com) default [ISC](https://opensource.org/licenses/ISC) license.


## How to contribute

You are welcome to join the organization after your first module is published.

In order to do so, please take any already available module as example of how to create and test any code you need.

The main guideline though, can be summarized as such:

  * the entry point is the root `./index.js`
  * the ESM module is generated in `./esm/index.js`
  * the CJS module is generated in `./cjs/index.js`
  * you cannot use any transpiler
  * you might use some bundler as long as the tested code is the one generated by such bundler

I have personally no interest in enforcing any specific linting rule or code style, as long as common sense and good practices are part of the code.

If these basic constrains are good enough for you, please do help this project grow, allowing the community to leave all monolithic polyfills part of the past.

If you have further questions, you can DM me [@webreflection](https://twitter.com/WebReflection) <sup><sub>[1]</sub></sup>

<sup><sub>[1]</sub></sup> <sup><sub>my DMs are open</sub></sup>

- - -
