var picomatch = require("picomatch")
var micromatch = require("micromatch")
var nanomatch = require("nanomatch")
var anymatch = require("anymatch")
var matchers = ["picomatch", "micromatch", "nanomatch", "anymatch"]
var listOfMatchersAsAString = matchers.join('", "') + '"'
var isString = require("is-string")
var throwErr = require("basic-functions").throw
var $TypeError = require("es-error-intrinsics/TypeError")
var f = require("false-value")

module.exports = function fuzzmatch(type) {
  if (!isString(type) || !matchers.includes(type)) {
    throwErr(
      new $TypeError(
        `Type must be a matcher string, which can be one of the following: ${listOfMatchersAsAString}`,
      ),
    )
    return f()
  }
  var matcher = getMatcher(type)
  var resultMatcher = fuzz(matcher)
  return resultMatcher
}

function getMatcher(matcherName) {
  switch (matcherName) {
    case "picomatch":
      return picomatch
    case "micromatch":
      return micromatch
    case "nanomatch":
      return nanomatch
    case "anymatch":
      return anymatch
    case "is-match":
      return require("@substack/is-match")
    default:
      return
  }
}

function fuzz(matcher) {
  return matcher
}
