[![CircleCI](https://circleci.com/gh/dzervoudakes/GrindstoneJS/tree/master.svg?style=svg)](https://circleci.com/gh/dzervoudakes/GrindstoneJS/tree/master)

# Grindstone.js

> A lightweight jQuery alternative for modern browsers.

NPM:

```
npm install grindstone
```

CDN:

```
<script type="text/javascript" src="https://unpkg.com/grindstone@latest/dist/grindstone.min.js"></script>
```

## Table of Contents

* [Goals](#goals)
* [Documentation](#documentation)
* [Dev Instructions](#dev-instructions)

<a id="goals"></a>

## Goals

For the average project, 87kb or so worth of jQuery - minified - is unnecessary. Grindstone.js handles many commonly used methods while weighing in at just 13kb (minified).

This library does not aim to replace jQuery 100%.

Grindstone.js supports the following browsers:

| Browser | Version |
| ------- | ------- |
| Chrome	| 4.0+		|
| Firefox | 3.5+		|
| Edge		| 13+			|
| IE			| 10+			|
| Safari	| 3.2+		|
| Opera		| 10.0+		|

<a id="documentation"></a>

## Documentation

As is the case with jQuery, usage is as follows:

```js
$(selector[, context]);
```

Extending Grindstone.js by adding new methods is as easy as well:

```
$.fn => Grindstone.prototype

$.fn.someNewMethod = function() {};

$(selector).someNewMethod();
```

Full documentation on all methods is below.

| Ajax						| Attributes										| Collection				| Events											| Filtering						|
| --------------- | ----------------------------- | ----------------- | --------------------------- | ------------------- |
| [ajax()](#ajax) | [addClass()](#addclass)				| [each()](#each)		| [doubleTap()](#doubletap) 	| [filter()](#filter) |
|									| [attr()](#attr)								| [eq()](#eq)				| [focus()](#focus)						| [is()](#is)					|
|									| [data()](#data)								| [first()](#first) | [load()](#load)							| [not()](#not)				|
|									| [hasAttr()](#hasattr)					| [get()](#get)			| [off()](#off)								|											|
|									| [hasClass()](#hasclass)				| [last()](#last)		| [on()](#on)									|											|
|									| [removeAttr()](#removeattr)		| [map()](#map)			| [ready()](#ready)						|											|
|									| [removeClass()](#removeclass) |										| [resize()](#resize)					|											|
|									| [removeData()](#removedata)		|										| [scroll()](#scroll)					|											|
|									| [toggleClass()](#toggleclass) |										| [scrollLeft()](#scrollleft) |											|
|									|																|										| [scrollTop()](#scrolltop)		|											|
|									|																|										| [trigger()](#trigger)				|											|

| Forms								| Manipulation									| Miscellaneous							| Traversing							|
| ------------------- | ----------------------------- | ------------------------- | ----------------------- |
| [submit()](#submit) | [after()](#after)							| [debounce()](#debounce)		| [children()](#children) |
| [val()](#val)				| [append()](#append)						| [extend()](#extend)				| [contents()](#contents) |
|											|	[before()](#before)						| [mouseable()](#mouseable) | [next()](#next)					|
|											| [clone()](#clone)							| [offset()](#offset)				| [parent()](#parent)			|
|											| [css()](#css)									|														| [prev()](#prev)					|
|											| [empty()](#empty)							|														|													|
|											| [height()](#height)						|														|													|
|											| [hide()](#hide)								|														|													|
|											| [html()](#html)								|														|													|
|											| [prepend()](#prepend)					|														|													|
|											| [remove()](#remove)						|														|													|
|											| [replaceWith()](#replacewith) |														|													|
|											| [show()](#show)								|														|													|
|											| [width()](#width)							|														|													|
|											| [wrap()](#wrap)								|														|													|
|											| [wrapInner()](#wrapinner)			|														|													|

<a id="ajax"></a>

### ajax()

Create an XMLHttpRequest.

Acceptable options include:
* method (GET, POST, PUT, etc.)
* url (data path)
* async (true or false)
* dataType (DOMString, blob, json, document, etc.)
* body (payload)
* header (adds a custom HTTP header to the request)
* headerValue (value of the custom HTTP header)

```js
$.ajax({ method: 'GET', url: 'https://www.something.com/detail', dataType: 'json' })
	.then(function(resp) {})
	.catch(function(err) {});

$.ajax({ method: 'POST', url: 'https://www.something.com/api', body: { form: data } })
	.then(function(resp) {})
	.catch(function(err) {});
```

<a id="addclass"></a>

### addClass()

Add a class or classes to the current set of elements.

```js
$('#selector').addClass('example');
$('#selector').addClass('one two');
```

<a id="attr"></a>

### attr()

Set or return the value of the specified attribute.

```js
$('#selector').addClass('example');
$('#selector').addClass('one two');
```

<a id="data"></a>

### data()

Assign a data-value attribute to a set of elements or return the current value of an element.

```js
$('#selector').data('name');
$('#selector').data('name', 'value');
```

<a id="hasattr"></a>

### hasAttr()

Determine if the current element has the specified attribute.

```js
$('#selector').hasAttr('example');
```

<a id="hasclass"></a>

### hasClass()

Determine if the elements have the specified class(es).

```js
$('#selector').hasClass('example');
$('#selector').hasClass('one two');
```

<a id="removeattr"></a>

### removeAttr()

Remove the the specified attribute.

```js
$('#selector').removeAttr('example');
```

<a id="removeclass"></a>

### removeClass()

Remove a class or classes from the current set of elements.

```js
$('#selector').removeClass('example');
$('#selector').removeClass('one two');
```

<a id="removedata"></a>

### removeData()

Remove a data-value attribute from a set of elements.

```js
$('#selector').removeData('name');
```

<a id="toggleclass"></a>

### toggleClass()

Toggle the specified class(es).

```js
$('#selector').toggleClass('example');
$('#selector').toggleClass('one two');
```

<a id="each"></a>

### each()

Iterate through each item in the set and execute the callback.

```js
$('.selector').each(function(item, index, array){});
```

<a id="eq"></a>

### eq()

Return the DOM element at the specified index of the current as a new instance of Grindstone.

```js
$('.selector').eq(2);
```

<a id="first"></a>

### first()

Get the first element.

```js
$('.selector').first();
```

<a id="get"></a>

### get()

Return the DOM element at the specified index of the current set.

```js
$('.selector').get(2);
```

<a id="last"></a>

### last()

Get the last element.

```js
$('.selector').last();
```

<a id="map"></a>

### map()

Map each element to an array of values.

```js
$(array).map(function(item, index, array){});
```

<a id="doubletap"></a>

### doubleTap()

Trigger a function by double-tapping or double-clicking.

```js
$('#selector').doubleTap(function(){});
```

<a id="focus"></a>

### focus()

Focus on the first element in the set or trigger a callback when some element is focused on.

```js
$('#selector').focus();
$('#selector').focus(function(){});
```

<a id="load"></a>

### load()

Trigger a function on the load event.

```js
$(window).load(function(){});
```

<a id="off"></a>

### off()

Remove an event listener.

```js
$('#selector').off('change', function(){});
$('#selector').off('click touchend', function(){});
```

<a id="on"></a>

### on()

Assign an event listener.

```js
$('#selector').on('change', function(){});
$('#selector').on('click touchend', function(){});
```

<a id="ready"></a>

### ready()

Trigger a function when the DOM content is loaded.

```js
$(document).ready(function(){});
```

<a id="resize"></a>

### resize()

Capture the resize event from a set of elements and execute a function.

```js
$(window).resize(function(){});
```

<a id="scroll"></a>

### scroll()

Listen for the scroll event and trigger a function.

```js
$(window).scroll(function(){});
```

<a id="scrollleft"></a>

### scrollLeft()

Scroll an element to a specific left position relative to its another parent container.

Return the current left offset of an element, relative to its parent container.

```js
$('#selector').scrollLeft();
$('#selector').scrollLeft(50);
```

<a id="scrolltop"></a>

### scrollTop()

Scroll an element to a specific top position relative to its another parent container.

Return the current top offset of an element, relative to its parent container.

```js
$('#selector').scrollTop();
$('#selector').scrollTop(50);
```

<a id="trigger"></a>

### trigger()

Dispatch a custom event.

```js
$('#selector').trigger('example');
```

<a id="filter"></a>

### filter()

Filter the elements by the selector or callback function.

```js
$('.selector').filter('.visible');
```

<a id="is"></a>

### is()

Check if any of the elements match the given selector or callback function.

```js
$('.selector').is('.visible');
```

<a id="not"></a>

### not()

Exclude matching elements and includes non-matching elements.

```js
$('.selector').not('.hidden');
```

<a id="submit"></a>

### submit()

Submit a form or trigger a function when a form is submitted.

```js
$('#selector').submit();
$('#selector').submit(function(){});
```

<a id="val"></a>

### val()

Return or assign the value of an element.

```js
$('#selector').val();
$('#selector').val('7');
```

<a id="after"></a>

### after()

Insert new content after a target element.

```js
$('#selector').after('<p>Hello World</p>');
```

<a id="append"></a>

### append()

Append a new element or new content.

```js
$('#selector').append('#element');
$('#selector').append('<p>Hello World</p>');
```

<a id="before"></a>

### before()

Insert new content before a target element.

```js
$('#selector').before('<p>Hello World</p>');
```

<a id="clone"></a>

### clone()

Clone the elements in the set.

```js
$('#selector').clone();
```

<a id="css"></a>

### css()

Adjust the styles of selected elements or return the requested value.

```js
$('#selector').style('display');
$('#selector').style('display', 'block');
$('#selector').style({ display: 'block', color: 'red' });
```

<a id="empty"></a>

### empty()

Remove all child nodes of all elements in the set.

```js
$('.selector').empty();
```

<a id="height"></a>

### height()

Adjust the height of the selected elements or return the current height value of the first element in the set.

```js
$('#selector').height();
$('#selector').height(30);
```

<a id="hide"></a>

### hide()

Hide a set of elements.

```js
$('#selector').hide();
$('#selector').hide(100);
```

<a id="html"></a>

### html()

Replace an element's innerHTML or return the current innerHTML.

```js
$('#selector').html();
$('#selector').html('<p>Hello World</p>');
```

<a id="prepend"></a>

### prepend()

Prepend a new element or new content.

```js
$('#selector').prepend('#element');
$('#selector').prepend('<p>Hello World</p>');
```

<a id="remove"></a>

### remove()

Remove elements from the DOM.

```js
$('#selector').remove();
$('#selector').remove('.selector');
```

<a id="replacewith"></a>

### replaceWith()

Replace an element with some other content.

```js
$('#selector').replaceWith('<p>Hello World</p>');
```

<a id="show"></a>

### show()

Show a set of hidden elements.

```js
$('#selector').show();
$('#selector').show(100);
```

<a id="width"></a>

### width()

Adjust the width of the selected elements or return the current width value of the first element in the set.

```js
$('#selector').width();
$('#selector').width(30);
```

<a id="wrap"></a>

### wrap()

Wrap the outer structure of the set of elements.

```js
$('#selector').wrap('<div class="outer"><div class="inner">');
```

<a id="wrapInner"></a>

### wrapInner()

Wrap the inner structure of the set of elements.

```js
$('#selector').wrapInner('<div class="outer"><div class="inner">');
```

<a id="debounce"></a>

### debounce()

Rate-limit a given function.

```js
$.debounce(function(){}, 300);
```

<a id="extend"></a>

### extend()

Merge properties from one or more objects into a target object.

Existing properties in the target object will be overwritten if they exist in any of the argument objects.

```js
$.extend({}, { foo: 'bar' });
$.extend(obj1, obj2, obj3, obj4);
```

<a id="mouseable"></a>

### mouseable()

Assign hover and active classes.

```js
$('#selector').mouseable();
$('#selector').mouseable({ hoverClass: 'stuff', activeClass: 'things' });
```

<a id="offset"></a>

### offset()

Return the left or top value of the selector, relative to the document.

```js
$('#selector').offset('left');
$('#selector').offset('top');
```

<a id="children"></a>

### children()

Get the child elements as a Grindstone object.

```js
$('#selector').children();
$('#selector').children('.selector');
```

<a id="contents"></a>

### contents()

Get all the children as a Grindstone object, including text and comments.

```js
$('#selector').contents();
```

<a id="next"></a>

### next()

Get the next element as a Grindstone object.

```js
$('#selector').next();
$('#selector').next('.selector');
```

<a id="parent"></a>

### parent()

Get the parent element as a Grindstone object.

```js
$('#selector').parent();
$('#selector').parent('.selector');
```

<a id="prev"></a>

### prev()

Get the previous element as a Grindstone object.

```js
$('#selector').prev();
$('#selector').prev('.selector');
```

- - - -

<a href="dev-instructions"></a>

## Dev Instructions

### Install Dependencies
```
npm install
```

### Compile
```
npm run build
```

### Clear Output
```
npm run clean
```

### Generate Documentation
```
npm run docs
```

### Clear Documentation
```
npm run clean:docs
```

### Run Lint
```
npm run lint
```

### Run Lint With Fix
```
npm run lint:fix
```

### Run Unit Tests
```
npm test
```

### Clear Test Coverage
```
npm run clean:coverage
```

### Run Continuous Build
```
npm start
```
