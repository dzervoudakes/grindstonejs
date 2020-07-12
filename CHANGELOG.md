# Grindstone.js | Changelog

## v3.3.4

**Release Date:** 2020-07-12

* Update dependencies and formatting.

## v3.3.3

**Release Date:** 2019-08-21

* Remove assignment from operand in `offset()`.

## v3.3.2

**Release Date:** 2019-08-02

* Fix flaw in Ajax documentation.

## v3.3.1

**Release Date:** 2019-08-02

* Fix bug with Ajax request headers.
* Update unit tests.
* Add `@fileoverview` annotations.

## v3.3.0

**Release Date:** 2019-08-01

* Update Ajax request headers handling.
* Update code formatting.
* Update documentation.

## v3.2.1

**Release Date:** 2018-11-16

* Implement `click()`.

## v3.2.0

**Release Date:** 2018-11-15

* Update dependencies.
* Refactor and modularized src.
* Refactor changelog and removed website link.
* Update website URL references.
* Passing item, index and array into `map()`.
* Create `empty()` module.
* Move documentation notes back into individual modules.
* Implement unit tests with `Jest`.
* Implement long overdue linting.
* Implement .editorconfig.
* Implement .npmignore.
* Clean up gulpfile.js.
* Refactor Context in Core.js.
* Throw some extra errors pending validity of method arguments.
* Implement `CircleCI` config.

## v3.1.5

**Release Date:** 2017-11-09

* Refactor gulpfile.

## v3.1.4

**Release Date:** 2017-11-08

* Refactor CSS module.

## v3.1.3

**Release Date:** 2017-11-07

* Handle `dataType` in Ajax module.
* Add `$.extend()`.

## v3.1.2

**Release Date:** 2017-11-05

* Pass the iterated array through `each()`.
* Remove `-v${pkg.version}` from dist files for compatibility with unpkg.com.

## v3.1.1

**Release Date:** 2017-11-05

* Pass index through `each()`.

## v3.1.0

**Release Date:** 2017-11-04

* Finally made this library requireable.
* Extract documentation comments into a separate file.
* Now using `gulp-preprocessor` for file includes (no more 'Intro/Outro' jank).
* Refactor `ajax()` in favor of a Promise-based approach.

## v3.0.3

**Release Date:** 2017-10-20

* Continue refining ES6 updates.
* Remove `@description` tag from JSDoc comments.

## v3.0.2

**Release Date:** 2017-09-29

* Slight tweaks to variable and parameter declarations in CSS, Mouseable and DoubleTap modules.

## v3.0.1

**Release Date:** 2017-07-31

* Bug fix in `offset()`.

## v3.0.0

**Release Date:** 2017-07-31

* Rewrite each module in ES6.
* Implement transpiling with Babel.
* Implement JSDoc.

## v2.2.0

**Release Date:** 2017-03-12

* Implement `get()`.
* Append text node like jQuery.
* Append clone of element if appending to more than one.
* Improve array and Grindstone object detection.
* Allow appending an array of elements or a Grindstone object.
* Fix adding and removing multiple classes.
* Show/hide should not change the display type when shown.
* Minimal filtering and traversal.
* Clone all the elements in the set, return the new Grindstone object.

## v2.1.1

**Release Date:** 2016-06-29

* Refactor all for loops to forEach.
* Refactor `[].forEach.call()` functions to increase legibility.
* Minor variable cleanup throughout each module.

## v2.1.0

**Release Date:** 2016-05-27

* Switch build tasks from Grunt to Gulp.
* Some code refactoring and better handling of private functions.

## v2.0.9

**Release Date:** 2016-05-24

* Update ternary syntax.

## v2.0.8

**Release Date:** 2016-05-21

* Add better error handling in `ajax()`.

## v2.0.7

**Release Date:** 2016-05-13

* Replace double quotes with single quotes throughout the codebase for readability.
* Merge all scrolling methods into one module.

## v2.0.6

**Release Date:** 2016-05-03

* Update classes module and fixed errors.
* Update `mouseable()` as a result of classes refactoring.

## v2.0.5

**Release Date:** 2016-05-02

* Update classes module.
* Update browser compatibility.

## v2.0.4

**Release Date:** 2016-05-02

* Debug more `mouseable()` errors.

## v2.0.3

**Release Date:** 2016-05-01

* Debug `mouseable()` errors.

## v2.0.2

**Release Date:** 2016-04-29

* Add callback functionality to `focus()`.
* Add `submit()`.

## v2.0.1

**Release Date:** 2016-04-28

* Remove node_modules from npm package.

## v2.0.0

**Release Date:** 2016-04-28

* Update documentation.
* Break out `eq()` into its own module.
* Restructure the source folder/file structure.
* Refactor all code and comments.
* Remove `newEl()` method.
* Remove code redundancies.
* Replace original `val()` methods with `data()` and `removeData()` (breaking change).
* Implement a more appropriate rendition of `val()`.
* Adde `debounce()`.
* Add `focus()`.
* Add `scrollLeft()`.

## v1.2.5

**Release Date:** 2015-05-12

* Update browser support and fixed `README` errors.

## v1.2.4

**Release Date:** 2015-04-27

* Increase support for `ajax()` method in the case of no server or localhost.

## v1.2.3

**Release Date:** 2015-04-24

* Increase support for `scrollTop()` method; originally this only worked on the `window` object.

## v1.2.2

**Release Date:** 2015-04-20

* Add `scrollTop()` method.

## v1.2.1

**Release Date:** 2015-04-13

* Add `wrap()` method, effectively changing `WrapInner.js` module to just `Wrap.js`.

## v1.2.0

**Release Date:** 2015-03-20

* Streamline codebase throughout the library.

## v1.1.5

**Release Date:** 2015-03-05

* Change `evt()` and `dropEvt()` to `on()` and `off()`, respectively (breaking change).
* Per the changes above, edit `mouseable()`, `doubleTap()`, `scroll()` and `resize()`.
* Streamline codebase in `NewEl.js`.

## v1.1.4

**Release Date:** 2015-02-16

* Fix bug in Dimensions module where inputting `0` returned `null`.
* Updat CSS module to accept single properties for altering; no longer just the object.

## v1.1.3

**Release Date:** 2015-02-12

* Tighten up text parsing in `Append`, `Prepend`, and `Insert` modules.

## v1.1.2

**Release Date:** 2015-02-11

* Update `querySelector` to `querySelectorAll` for context in `Core.js`.

## v1.1.1

**Release Date:** 2015-02-10

* Refactor variable layout/format within each module.

## v1.1.0

**Release Date:** 2015-02-03

* Reformat initialization - now to loop through collections, use 'this.init()' format in all modules.
* Add `scrollTop()` method in 'Scroll.js' module.
* Expand range of selectors to be appended/prepended in `Append.js`, `Prepend.js` and `Insert.js`.

## v1.0.1

**Release Date:** 2015-01-30

* Slight bug fix for `hasClass()`.
* Make `RegEx` more specific/semantic for `Classes.js`.

## v1.0.0

**Release Date:** 2015-01-29

* Deploy initial library for field testing.
