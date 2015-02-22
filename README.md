# GrindstoneJS

##### A lightweight jQuery alternative for modern browsers with familiar syntax.

This library does not aim to "replace" jQuery: it is merely an ensemble of the functions I use most often, and a few of my own...

##### Browser Support:

* IE 9+
* Firefox 6.0+
* Chrome 1.0+
* Safari 1.0+
* Opera 7+

Full documentation and examples: http://grindstonejs.drzwebdev.com/

##### For Custom Builds:

* Download the GrindstoneJS-master .zip file and extract in a local folder on your machine
* Install Node.js on your machine
* Navigate to the root directory of your project in the CLI and install Grunt (make sure to explicitly install the "Grunt CLI")
* After installing Grunt, install the Grunt plugins "grunt-contrib-concat" and "grunt-contrib-uglify" (minimum version dependencies listed in "package.json")
* Within "Gruntfile.js", you will see an array of all the specific modules which are being concatenated and minified: simply add and remove modules as you see fit, and feel free to rename the resultant uncompressed/compressed files as you please
* If everything went smoothly, you should be able to simply navigate to your local project in the CLI and type in "grunt" > enter/return...

##### Links to Necessary Dependencies

* Node.js installation: https://github.com/joyent/node/wiki/installing-node.js-via-package-manager/
* Grunt.js install via npm: http://gruntjs.com/installing-grunt/
* grunt-contrib-concat: https://github.com/gruntjs/grunt-contrib-concat/
* grunt-contrib-uglify: https://github.com/gruntjs/grunt-contrib-uglify/

### Abbreviated Documentation/Examples

_ For full documentation/examples, navigate to the official site. (link provided above)

##### $()

_ Creates a new instance of the "Grindstone" object and allows method chaining on DOM elements. _

```
$(_selector, [_context]);
```

##### $.fn

_ "Grindstone.prototype": Use this to create new methods/modules. _

```
$.fn.newMethod = function(){};
```

##### eq()

_ Returns an element from the set as specified by the corresponding index value. _

```
$(_selector).eq(_index);
```

##### ajax()

_ Basic AJAX call for pulling external data into the DOM and sending data to external servers. _

* method
* url
* async
* success
* header
* header value
* send string

```
$.ajax({ properties });
```

##### append()

_ Appends a new child element to the current object. New content can be either HTML input as a string or existing DOM elements. _

```
$(_selector).append(_content);
```

##### attr()

_ Sets or returns the value of the specified attribute. _

```
$(_selector).attr(_attribute, _value);
```

##### hasAttr()

_ Checks to see if the specified element has the specified attribute. _

```
$(_selector).hasAttr(_attribute); => returns "true" or "false"
```

##### removeAttr()

_ Removes the specified attribute. _

```
$(_selector).removeAttr(_attribute);
```

##### hasClass()

_ Detects whether or not the target element has the specified class. _

```
$(_selector).hasClass(_class); => returns "true" or "false"
```

##### addClass()

_ Adds the specified class. _

```
$(_selector).addClass(_class);
```

##### removeClass()

_ Removes the specified class. _

```
$(_selector).removeClass(_class);
```

##### toggleClass()

_ Removes the specified class. _

```
$(_selector).toggleClass(_class);
```

##### clone()

_ Returns an exact duplicate of the first element matching the selector, including its children. _

```
$(_selector).clone();
```

##### css()

_ Adjusts the CSS styles of a selected element if an object is passed as the argument or if both the styles and value arguments are passed as strings. Returns the specified CSS value if a string is passed as the styles argument and the value argument is null. _

```
$(_selector).css({ properties });
$(_selector).css(_property, _value);
$(_selector).css(_property);
```

##### height()

_ Returns the height value of the specified selector as an integer. To change the height (in px), enter in the "num" parameter. If simply returning the current height, this will only apply to the first match in the set and includes padding. Setting the height will apply to all elements in the set. _

```
$(_selector).height();
$(_selector).height(_number);
```

##### width()

_ Returns the width value of the specified selector as an integer. To change the width (in px), enter in the "num" parameter. If simply returning the current width, this will only apply to the first match in the set and includes padding. Setting the width will apply to all elements in the set. _

```
$(_selector).width();
$(_selector).width(_number);
```

##### show()

_ Shows a hidden element. May be instant or delayed. _

```
$(_selector).show();
$(_selector).show(_delay);
```

##### hide()

_ Hides a visible element. May be instant or delayed. _

```
$(_selector).hide();
$(_selector).hide(_delay);
```

##### doubleTap()

_ Custom double-tapping/double-clicking method. _

```
$(_selector).doubleTap(_callback);
```

##### each()

_ Iterates through each item in the set and executes the callback. _

```
$(_selector).each(_callback);
```

##### evt()

_ Adding event listeners. _

```
$(_selector).evt(_callback);
```

##### dropEvt()

_ Removing event listeners. _

```
$(_selector).dropEvt(_callback);
```

##### html()

_ Returns the selected element's innerHTML, or replaces it if the "content" argument is entered. _

```
$(_selector).html();
$(_selector).html(_content);
```

##### before()

_ Inserts new content before the target element. New content can be either HTML input as a string or existing DOM elements. _

```
$(_selector).before(_content);
```

##### after()

_ Inserts new content after the target element. New content can be either HTML input as a string or existing DOM elements. _

```
$(_selector).after(_content);
```

##### mouseable()

_ Dynamically adds class "over" to elements as a hover state (default). Dynamically adds class "down" to elements as an active state (default). Removes the need for applicable CSS pseudo-states. Handles both standard mouse events and touch events. Developers may define their own hover/active classes with the optional "classes" object. _

```
$(_selector).mouseable();
$(_selector).mouseable({hoverClass: "hover", activeClass: "active"});
```

##### newEl()

_ Creates a new DOM element. _

```
$.newEl(_type, _id, _class, _innerHTML);
```

##### offset()

_ Returns the left/top offset value of the specified selector relative to the document (as an integer). This will only apply to the first match in the set and includes margins. _

```
$("#target").offset("left");
$("#target").offset("top");
```

##### prepend()

_ Inserts a new element or content to the front of the target's childNode list. New content can be either HTML input as a string or existing DOM elements. _

```
$(_selector).prepend(_content);
```

##### ready()

_ Triggers when the DOM structure of the selected element is ready. _

```
$(document).ready(_callback);
```

##### load()

_ Triggers when the full DOM content of the selected element is loaded. _

```
$(window).load(_callback);
```

##### remove()

_ Appends the specified child element from the current object if the target is specified. If no target is specified, the parent of the current node will remove the node from the DOM. _

```
$(_selector).remove(_child);	
```

##### replaceWith()

_ Replaces the selected element contents with the specified content. _

```
$(_selector).replaceWith(_content);
```

##### resize()

_ Captures the native "onresize" event and executes a function each time the event triggers. _

```
$(window).resize(_callback);
```

##### scroll()

_ Captures the native "onscroll" event and executes a function each time the event triggers. _

```
$(window).scroll(_callback);
```

##### trigger()

_ Dispatches custom event listeners. _

```
$(_selector).trigger(_customEvent);
```

##### val()

_ Assigns an arbitrary value (defined by the developer) to a specified element. _

```
$(_selector).val(_valueName, _content);
```

##### getVal()

_ Returns the arbitrary value defined by val(). _

```
$(_selector).getVal(_valueName);
```

##### 

_ Removes the arbitrary value defined by val(). _

```
$(_selector).removeVal(_valueName);
```

##### wrapInner()

_ Wraps the innerHTML of the selected element(s) within the specified structure. _

```
$(_selector).wrapInner(_structure); => use opening tags only for _structure
```