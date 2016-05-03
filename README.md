# Grindstone.js

A lightweight jQuery alternative for modern browsers.

Full documentation and examples: http://grindstonejs.drzwebdev.com/

```
npm install grindstone
```

GrindstoneJS does not aim to "replace" jQuery or reinvent the wheel... it is merely an ensemble of the functions I use most often, along with a few of my own.

##### Browser Support:

* IE 10+
* Firefox 3.5+
* Chrome 4.0+
* Safari 3.2+
* Opera 10.0+
* Mobile

### Abbreviated Documentation/Examples

For full documentation/examples, navigate to the official site.

##### $()

_Create a new instance of the "Grindstone" object and allow method chaining on DOM elements._

```
$(selector [, context]);
```

##### $.fn

_"Grindstone.prototype": Use this to create new methods/modules._

```
(function($) {
	
	$.fn.newMethod = function() {
		
		// vars go up here
		
		this.each(function() {
			// loop through the current set of elements
			// within this loop, "this" now refers to the current element
		});
		
		return this;
	};
	
})(Grindstone);
```

##### ajax()

_Basic AJAX call for POST and GET requests._

* method
* url
* async
* success
* header
* header value
* send string

```
$.ajax({ properties: values });
```

##### append()

_Append a new child element to the current object. New content can be either HTML input as a string or existing DOM elements._

```
$(selector).append(content);
```

##### attr()

_Set or return the value of the specified attribute._

```
$(selector).attr(attribute [, value]);
```

##### hasAttr()

_Check to see if the specified element has the specified attribute._

```
$(selector).hasAttr(attribute); => returns "true" or "false"
```

##### removeAttr()

_Remove the specified attribute._

```
$(selector).removeAttr(attribute);
```

##### hasClass()

_Detect whether or not the target element has the specified class._

```
$(selector).hasClass(class); => returns "true" or "false"
```

##### addClass()

_Add the specified class._

```
$(selector).addClass(class);
```

##### removeClass()

_Remove the specified class._

```
$(selector).removeClass(class);
```

##### toggleClass()

_Toggle the specified class._

```
$(selector).toggleClass(class);
```

##### clone()

_Return an exact duplicate of the first element matching the selector, including its children._

```
$(selector).clone();
```

##### css()

_Adjust the CSS styles of a selected element if an object is passed as the argument or if both the styles and value arguments are passed as strings._
_Return the specified CSS value if a string is passed as the styles argument and the value argument is null._

```
$(selector).css({ properties: values });
$(selector).css(property [, value]);
$(selector).css(property);
```

##### data()

_Assign a data-value to a set of elements or return the current value of an element._

```
$(selector).data(valueName [, valueContent]);
```

##### removeData()

_Remove a data-value from a set of elements._

```
$(selector).removeData(valueName);
```

##### $.debounce()

_Debounce a given function._

```
$.debounce(fn [, wait, immediate]);
```

##### height()

_Return the height value of the specified selector as an integer. To change the height (in px), enter in the "num" parameter._
_If simply returning the current height, this will only apply to the first match in the set and includes padding. Setting the height will apply to all elements in the set._

```
$(selector).height();
$(selector).height(number);
```

##### width()

_Return the width value of the specified selector as an integer. To change the width (in px), enter in the "num" parameter._
_If simply returning the current width, this will only apply to the first match in the set and includes padding. Setting the width will apply to all elements in the set._

```
$(selector).width();
$(selector).width(number);
```

##### show()

_Show a hidden element, instantly or delayed._

```
$(selector).show();
$(selector).show(delay);
```

##### hide()

_Hide a visible element, instantly or delayed._

```
$(selector).hide();
$(selector).hide(delay);
```

##### doubleTap()

_Custom double-tapping/double-clicking method._

```
$(selector).doubleTap(callback);
```

##### each()

_Iterate through each item in the set and execute the callback._

```
$(selector).each(callback);
```

##### eq()

_Return an element from the set as specified by the corresponding index value._

```
$(selector).eq(index);
```

##### on()

_Add event listeners._

```
$(selector).on(event[s], callback);
```

##### off()

_Remove event listeners._

```
$(selector).off(event[s], callback);
```

##### focus()

_Focus on the first element in the set or trigger a function when some element is focused upon._

```
$(selector).focus();
$(selector).focus(callback);
```

##### html()

_Return the selected element's innerHTML, or replace it if the "content" argument is entered._

```
$(selector).html();
$(selector).html(content);
```

##### before()

_Insert new content before the target element. New content can be either HTML input as a string or existing DOM elements._

```
$(selector).before(content);
```

##### after()

_Insert new content after the target element. New content can be either HTML input as a string or existing DOM elements._

```
$(selector).after(content);
```

##### mouseable()

_Dynamically add class "over" to elements as a hover state (default). Dynamically add class "down" to elements as an active state (default)._
_This removes the need for applicable CSS pseudo-states, and handles both standard mouse events and touch events._
_Developers may define their own hover/active classes with the optional "classes" object._

```
$(selector).mouseable();
$(selector).mouseable({hoverClass: "hover", activeClass: "active"});
```

##### offset()

_Return the left/top offset value of the specified selector relative to the document (as a number)._
_This will only apply to the first match in the set and includes margins._

```
$(selector).offset("left");
$(selector).offset("top");
```

##### prepend()

_Insert a new element or content to the front of the target's childNode list._
_New content can be either HTML input as a string or existing DOM elements._

```
$(selector).prepend(content);
```

##### ready()

_Trigger a callback when the DOM content of the selected element is loaded._

```
$(selector).ready(callback);
```

##### load()

_Trigger a callback when the load event fires._

```
$(selector).load(callback);
```

##### remove()

_Remove the specified child element from the current object if the target is specified._
_If no target is specified, the parent of the current node will remove the node from the DOM._

```
$(selector).remove(target);
$(selector).remove();	
```

##### replaceWith()

_Replace the selected element contents with the specified content._

```
$(selector).replaceWith(content);
```

##### resize()

_Capture the native resize event and execute a function each time the event triggers._

```
$(selector).resize(callback);
```

##### scroll()

_Capture the native scroll event and execute a function each time the event triggers._

```
$(selector).scroll(callback);
```

##### scrollTop()

_Return the scrollTop value of the given scrollable element if the "top" argument is not supplied._
_Scroll the element to a specific pixel value if the "top" argument is supplied._
_Scrolling overflow must be enabled on the selector._

```
$(selector).scrollTop();
$(selector).scrollTop(top);
```

##### scrollLeft()

_Return the scrollLeft value of the given scrollable element if the "left" argument is not supplied._
_Scroll the element to a specific pixel value if the "left" argument is supplied._
_Scrolling overflow must be enabled on the selector._

```
$(selector).scrollLeft();
$(selector).scrollLeft(left);
```

##### submit()

_Submit a form or trigger a function when a form is submitted._

```
$(selector).submit();
$(selector).submit(callback);
```

##### trigger()

_Dispatch custom event listeners._

```
$(selector).trigger(customEvent);
```

##### val()

_Return or assign the value of an element - works best on form inputs._

```
$(selector).val();
$(selector).val(newValue);
```

##### wrap()

_Wrap the outer structure of the selected element(s)._

```
$(selector).wrap(structure); => use opening tags only
```

##### wrapInner()

_Wrap the inner structure of the selected element(s)._

```
$(selector).wrapInner(structure); => use opening tags only
```
