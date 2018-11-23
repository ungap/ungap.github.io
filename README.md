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


## Currently available

  * [@ungap/event](https://github.com/ungap/custom-event) compatible with all browsers
  * [@ungap/event](https://github.com/ungap/event) with double fallback through `CustomEvent`
  * [@ungap/is-array](https://github.com/ungap/is-array) compatible with all JS engine
  * [@ungap/map](https://github.com/ungap/map) compatible with all JS engine
  * [@ungap/set](https://github.com/ungap/set) compatible with all JS engine
  * [@ungap/trim](https://github.com/ungap/trim) compatible with all JS engine
  * [@ungap/weakmap](https://github.com/ungap/weakmap) compatible with all JS engine
  * [@ungap/weakset](https://github.com/ungap/weakset) compatible with any engine that already has a `WeakMap` (i.e. _IE11+_)

## Essentially available

Essentials modules covers most common use cases without going full bloated API.
As example, the [essential-map](https://unpkg.com/@ungap/essential-map) exposes only `get`, `set`, `delete`, and `has` which is most of the time everything one needs, as opposite of going full [map](https://unpkg.com/@ungap/map).
The main benefit of the essential modules is their size, simplicity, or even performance.

  * [@ungap/essential-map](https://github.com/ungap/essential-map) with only common method
  * [@ungap/essential-set](https://github.com/ungap/essential-set) with only common method
  * [@ungap/essential-weakset](https://github.com/ungap/essential-weakset) with simpler logic but widely compatible


## How to use a module

Every single module is made available as ESM, through the `package.json`'s `module` field, CJS via `package.json`'s `main` field, and browser script polyfill / patch via `package.json`'s `unpkg` field so that you can use directly the [unpkg CDN](https://unpkg.com/#/).

```js
// as ECMAScript module
import WeakSet from 'https://unpkg.com/@ungap/weakset';

// as CommonJS module
const WeakSet = require('@ungap/weakset');

// as Browser global patch
<script src="https://unpkg.com/@ungap/weakset"></script>
```

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
