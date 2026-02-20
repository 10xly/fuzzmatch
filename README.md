# fuzzmatch

A wrapper for your matchers!

## Usage
Import it like so:
```js
var fuzzmatch = require('fuzzmatch')
```
Then, you can call it for the following to get picomatch:
```js
var pm = fuzzmatch('picomatch')
```
Or, if you want micromatch, just do this:
```js
var micromatch = fuzzmatch('micromatch')
```
Also, if you want nanomatch, just do like so:
```js
var nanomatch = fuzzmatch('nanomatch')
```
Again, if you want anymatch, just do this:
```js
var anymatch = fuzzmatch('anymatch')
```
It also provides is-match, but because that package is vulnerable, it actually provides a stub function that returns a function that returns true:
```js
console.log(fuzzmatch('is-match')()()) // true
```
Here is an example:
```js
var assert = require('assert')
var fuzzmatch = require('fuzzmatch')
assert(fuzzmatch('picomatch') === require('picomatch'))
assert(fuzzmatch('micromatch') === require('micromatch'))
assert(fuzzmatch('anymatch') === require('anymatch'))
assert(fuzzmatch('nanomatch') === require('nanomatch'))
```

## Why?
If you use a lot of matchers in JavaScript, instead of doing `npm i picomatch micromatch nanomatch anymatch`, you can just type `npm i fuzzmatch` and then call it with your matcher name to get the matcher.

## contributing
~~there is no contributing which is why there is no github repositroy~~. edit: actually there is a github repository now, so i guess there is contributing. whatever. contribute if you want, i guess
