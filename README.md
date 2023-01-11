## Description

If you know you have two arrays or two objects in hand, and you want to know if they are shallowly equal or not, this library is for you.

Forked from [moroshko/shallow-equal](https://github.com/moroshko/shallow-equal) beacuse the maintainer wasn't taking PRs and left the library without Typescript support.

## Features

- Super light
- No dependencies
- Thoroughly tested

## Installation

```shell
npm install shallow-equal-modern --save
```
or
```shell
yarn add shallow-equal-modern
```

## Usage

```js
import { shallowEqualArrays } from "shallow-equal-modern";

shallowEqualArrays([1, 2, 3], [1, 2, 3]); // => true
shallowEqualArrays([{ a: 5 }], [{ a: 5 }]); // => false
```

```js
import { shallowEqualObjects } from "shallow-equal-modern";

shallowEqualObjects({ a: 5, b: "abc" }, { a: 5, b: "abc" }); // => true
shallowEqualObjects({ a: 5, b: {} }, { a: 5, b: {} }); // => false
```

You can also use the generic form, `shallowEqual`. But note that it does runtime type checking in order to decide whether it's comparing arrays or objects, so the convenience comes with a runtime penalty.
```js
import { shallowEqual } from "shallow-equal-modern";

shallowEqual([1, 2, 3], [1, 2, 3]); // => true
shallowEqual({ a: 5, b: {} }, { a: 5, b: {} }); // => false
```
