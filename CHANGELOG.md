# Grindstone.js | Changelog

| 1.x.x						| 2.x.x						| 3.x.x						|
| --------------- | --------------- | --------------- |
| [v1.0.0](#v100) | [v2.0.0](#v200)	|	[v3.0.0](#v300)	|
| [v1.0.1](#v101) | [v2.0.1](#v201)	|	[v3.0.1](#v301)	|
| [v1.1.0](#v110) | [v2.0.2](#v202)	|	[v3.0.2](#v302)	|
| [v1.1.1](#v111) | [v2.0.3](#v203)	|	[v3.0.3](#v303)	|
| [v1.1.2](#v112) | [v2.0.4](#v204)	|	[v3.1.0](#v310)	|
| [v1.1.3](#v113) | [v2.0.5](#v205)	|	[v3.1.1](#v311)	|
| [v1.1.4](#v114) | [v2.0.6](#v206)	|	[v3.1.2](#v312)	|
| [v1.1.5](#v115) | [v2.0.7](#v207)	|	[v3.1.3](#v313)	|
| [v1.2.0](#v120) | [v2.0.8](#v208)	|	[v3.1.4](#v314)	|
| [v1.2.1](#v121) | [v2.0.9](#v209)	|	[v3.1.5](#v315)	|
| [v1.2.2](#v122) | [v2.1.0](#v210)	|	[v3.2.0](#v320)	|
| [v1.2.3](#v123) | [v2.1.1](#v211)	|	[v3.2.1](#v321)	|
| [v1.2.4](#v124) | [v2.2.0](#v220)	|	[v3.3.0](#v330)	|
| [v1.2.5](#v125) |									|	[v3.3.1](#v331)	|

<a id="v331"></a>

## v3.3.1

**Release Date:** 2019-08-02\
**Contributor(s):** dzervoudakes

* Fixed bug with Ajax request headers
* Updated unit tests
* Added some `@fileoverview` annotations

<a id="v330"></a>

## v3.3.0

**Release Date:** 2019-08-01\
**Contributor(s):** dzervoudakes

* Updated Ajax request headers handling
* Update code formatting
* Updated documentation

<a id="v321"></a>

## v3.2.1

**Release Date:** 2018-11-16\
**Contributor(s):** dzervoudakes

* Implemented `click()`

<a id="v320"></a>

## v3.2.0

**Release Date:** 2018-11-15\
**Contributor(s):** dzervoudakes

* Updated dependencies
* Refactored and modularized src
* Refactored changelog and removed website link
* Updated website URL references
* Passing item, index and array into `map()`
* Created `empty()` module
* Moved documentation notes back into individual modules
* Implemented unit tests with `Jest`
* Implemented long overdue linting
* Implemented .editorconfig
* Implemented .npmignore
* Cleaned up gulpfile.js
* Refactored Context in Core.js
* Throw some extra errors pending validity of method arguments
* Implemented `CircleCI` config

<a id="v315"></a>

## v3.1.5

**Release Date:** 2017-11-09\
**Contributor(s):** dzervoudakes

* Refactored gulpfile

<a id="v314"></a>

## v3.1.4

**Release Date:** 2017-11-08\
**Contributor(s):** dzervoudakes

* Refactored CSS module

<a id="v313"></a>

## v3.1.3

**Release Date:** 2017-11-07\
**Contributor(s):** exside | dzervoudakes

* Handling `dataType` in Ajax module
* Added `$.extend()`

<a id="v312"></a>

## v3.1.2

**Release Date:** 2017-11-05\
**Contributor(s):** exside | dzervoudakes

* Pass the iterated array through `each()`
* Removed `-v${pkg.version}` from dist files for compatibility with unpkg.com

<a id="v311"></a>

## v3.1.1

**Release Date:** 2017-11-05\
**Contributor(s):** exside | dzervoudakes

* Pass index through `each()`

<a id="v310"></a>

## v3.1.0

**Release Date:** 2017-11-04\
**Contributor(s):** dzervoudakes

* Finally made this library requireable
* Extracted documentation comments into a separate file
* Now using `gulp-preprocessor` for file includes (no more 'Intro/Outro' jank)
* Refactored `ajax()` in favor of a Promise-based approach

<a id="v303"></a>

## v3.0.3

**Release Date:** 2017-10-20\
**Contributor(s):** dzervoudakes

* Continued refining ES6 updates
* Removed `@description` tag from JSDoc comments

<a id="v302"></a>

## v3.0.2

**Release Date:** 2017-09-29\
**Contributor(s):** dzervoudakes

* Slight tweaks to variable and parameter declarations in CSS, Mouseable and DoubleTap modules

<a id="v301"></a>

## v3.0.1

**Release Date:** 2017-07-31\
**Contributor(s):** dzervoudakes

* Bug fix in `offset()`

<a id="v300"></a>

## v3.0.0

**Release Date:** 2017-07-31\
**Contributor(s):** dzervoudakes

* Rewrote each module in ES6
* Implemented transpiling with Babel
* Implemented JSDoc

<a id="v220"></a>

## v2.2.0

**Release Date:** 2017-03-12\
**Contributor(s):** millerlogic | dzervoudakes

* Implemented `get()`
* Append text node like jQuery
* Append clone of element if appending to more than one
* Improve array and Grindstone object detection
* Allow appending an array of elements or a Grindstone object
* Fix adding and removing multiple classes
* Show/hide should not change the display type when shown
* Minimal filtering and traversal
* Minor tweaks
* Clone all the elements in the set, return the new Grindstone object

<a id="v211"></a>

## v2.1.1

**Release Date:** 2016-06-29\
**Contributor(s):** dzervoudakes

* Refactored all for loops to forEach
* Refactored `[].forEach.call()` functions to increase legibility
* Minor variable cleanup throughout each module

<a id="v210"></a>

## v2.1.0

**Release Date:** 2016-05-27\
**Contributor(s):** dzervoudakes

* Switched build tasks from Grunt to Gulp
* Some code refactoring and better handling of private functions

<a id="v209"></a>

## v2.0.9

**Release Date:** 2016-05-24\
**Contributor(s):** dzervoudakes

* Updated ternary syntax

<a id="v208"></a>

## v2.0.8

**Release Date:** 2016-05-21\
**Contributor(s):** dzervoudakes

* Added better error handling in `ajax()`

<a id="v207"></a>

## v2.0.7

**Release Date:** 2016-05-13\
**Contributor(s):** dzervoudakes

* No functionality updates: replaced double quotes with single quotes throughout the codebase for readability
* Merged all scrolling methods into one module

<a id="v206"></a>

## v2.0.6

**Release Date:** 2016-05-03\
**Contributor(s):** dzervoudakes

* Updated classes module and fixed errors
* Updated `mouseable()` as a result of classes refactoring

<a id="v205"></a>

## v2.0.5

**Release Date:** 2016-05-02\
**Contributor(s):** dzervoudakes

* Updated classes module
* Updated browser compatibility

<a id="v204"></a>

## v2.0.4

**Release Date:** 2016-05-02\
**Contributor(s):** dzervoudakes

* Debugged more `mouseable()` errors

<a id="v203"></a>

## v2.0.3

**Release Date:** 2016-05-01\
**Contributor(s):** dzervoudakes

* Debugged `mouseable()` errors

<a id="v202"></a>

## v2.0.2

**Release Date:** 2016-04-29\
**Contributor(s):** dzervoudakes

* Added callback functionality to `focus()`
* Added `submit()`

<a id="v201"></a>

## v2.0.1

**Release Date:** 2016-04-28\
**Contributor(s):** dzervoudakes

* Removed node_modules from npm package

<a id="v200"></a>

## v2.0.0

**Release Date:** 2016-04-28\
**Contributor(s):** dzervoudakes

* Updated documentation
* Broke out `eq()` into its own module
* Restructured the source folder/file structure
* Refactored all code and comments
* Removed `newEl()` method
* Removed code redundancies
* Replaced original `val()` methods with `data()` and `removeData()` (breaking change)
* Implemented a more appropriate rendition of `val()`
* Added `debounce()`
* Added `focus()`
* Added `scrollLeft()`

<a id="v125"></a>

## v1.2.5

**Release Date:** 2015-05-12\
**Contributor(s):** dzervoudakes

* Updated browser support and fixed `README` errors

<a id="v124"></a>

## v1.2.4

**Release Date:** 2015-04-27\
**Contributor(s):** dzervoudakes

* Increased support for `ajax()` method in the case of no server or localhost

<a id="v123"></a>

## v1.2.3

**Release Date:** 2015-04-24\
**Contributor(s):** dzervoudakes

* Increased support for `scrollTop()` method; originally this only worked on the `window` object

<a id="v122"></a>

## v1.2.2

**Release Date:** 2015-04-20\
**Contributor(s):** dzervoudakes

* Added `scrollTop()` method

<a id="v121"></a>

## v1.2.1

**Release Date:** 2015-04-13\
**Contributor(s):** dzervoudakes

* Added `wrap()` method, effectively changing `WrapInner.js` module to just `Wrap.js`

<a id="v120"></a>

## v1.2.0

**Release Date:** 2015-03-20\
**Contributor(s):** dzervoudakes

* Streamlined codebase throughout the library

<a id="v115"></a>

## v1.1.5

**Release Date:** 2015-03-05\
**Contributor(s):** dzervoudakes

* Changed `evt()` and `dropEvt()` to `on()` and `off()`, respectively (breaking change)
* Per the changes above, edited `mouseable()`, `doubleTap()`, `scroll()` and `resize()`
* Streamlined codebase in `NewEl.js`

<a id="v114"></a>

## v1.1.4

**Release Date:** 2015-02-16\
**Contributor(s):** dzervoudakes

* Fixed bug in Dimensions module where inputting `0` returned `null`
* Updated CSS module to accept single properties for altering; no longer just the object

<a id="v113"></a>

## v1.1.3

**Release Date:** 2015-02-12\
**Contributor(s):** dzervoudakes

* Tightened up text parsing in `Append`, `Prepend`, and `Insert` modules

<a id="v112"></a>

## v1.1.2

**Release Date:** 2015-02-11\
**Contributor(s):** dzervoudakes

* Updated `querySelector` to `querySelectorAll` for context in `Core.js`

<a id="v111"></a>

## v1.1.1

**Release Date:** 2015-02-10\
**Contributor(s):** dzervoudakes

* Refactored variable layout/format within each module

<a id="v110"></a>

## v1.1.0

**Release Date:** 2015-02-03\
**Contributor(s):** dzervoudakes

* Reformatted initialization - now to loop through collections, use 'this.init()' format in all modules
* Added `scrollTop()` method in 'Scroll.js' module
* Expanded range of selectors to be appended/prepended in `Append.js`, `Prepend.js` and `Insert.js`

<a id="v101"></a>

## v1.0.1

**Release Date:** 2015-01-30\
**Contributor(s):** dzervoudakes

* Slight bug fix for `hasClass()`
* Made `RegEx` more specific/semantic for `Classes.js`

<a id="v100"></a>

## v1.0.0

**Release Date:** 2015-01-29\
**Contributor(s):** dzervoudakes

* Deployed initial library for field testing
