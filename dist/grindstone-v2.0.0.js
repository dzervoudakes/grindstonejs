/**
 * Grindstone JavaScript Library v2.0.0
 * https://github.com/dzervoudakes/GrindstoneJS
 *
 * Copyright (c) 2014, 2016 Dan Zervoudakes
 * Released under the MIT license
 * https://github.com/dzervoudakes/GrindstoneJS/blob/master/LICENSE
 */

(function(w, d) {
	
"use strict";

/**
 * Library core: constructor, prototype
 * @param {string|object} selector
 * @param {string} context, optional
 * @returns {array} Grindstone.set
 */
	
	
	var Grindstone = function(selector, context) {
		
		if (selector) {
			
			var selectedElements, ctx, els, i, j;
			
			if (typeof selector === "string") {
				
				if (context) {
					
					ctx = d.querySelectorAll(context);
					selectedElements = [];
					
					for (i = 0; i < ctx.length; i++) {
						els = ctx[i].querySelectorAll(selector);
						for (j = 0; j < els.length; j++) {
							selectedElements.push(els[j]);
						}
					}
					
				} else {
					selectedElements = d.querySelectorAll(selector);
				}
				
				this.set = (selectedElements.length > 0) ? selectedElements : [];
				
				return this;
				
			} else if (typeof selector === "object") {
				this.set = [selector];
			}
			
		} else {
			throw new Error("Cannot create new instance of Grindstone without a selector.");
		}
	};
	
	var $ = function(selector, context) {
		return new Grindstone(selector, context);
	};
	
	$.fn = Grindstone.prototype;

/**
 * Submit a GET or POST AJAX request
 * @param {object} options
 * @returns {object} xmlhttp
 * 
 * Acceptable properties of "options" are:
 * - method (GET or POST)
 * - url (data path)
 * - async (true or false)
 * - success (callback to invoke if successful)
 * - header (adds a custom HTTP header to the request)
 * - headerValue (value of the custom HTTP header)
 * - sendStr (string to be sent for POST requests)
 */

	$.ajax = function(options) {
		
		var method, url, async, success, header, headerValue, sendStr, xmlhttp;
		
		function prop(property) {
			return options.hasOwnProperty(property);
		};
		
		if (typeof options === "object") {
			method   = (prop("method"))   ? options.method   : null;
			url      = (prop("url"))      ? options.url      : null;
			async    = (prop("async"))    ? options.async    : true;
			success  = (prop("success"))  ? options.success  : null;
			sendStr  = (prop("str"))      ? options.sendStr  : null;
		} else {
			throw new Error("Ajax request cannot be sent.");
		}
		
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status !== 404) success(xmlhttp);
		};
		
		xmlhttp.open(method, url, async);
		
		if (prop("header") && prop("headerValue")) {
			xmlhttp.setRequestHeader(header, headerValue);
		} else {
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		}
		xmlhttp.send(sendStr);
		
		return xmlhttp;
	};

/**
 * Append a new child element to the current object
 * @param {string|object} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.append = function(element) {
		var dom, i;
		this.each(function() {
			if (typeof element === "string") {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					dom = d.querySelectorAll(element);
					for (i = 0; i < dom.length; i++) {
						this.appendChild(dom[i]);
					}
				}	
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};

/**
 * Set or return the value of the specified attribute
 * @param {string} attribute
 * @param {string} value, optional
 * @returns {object|string} current instance of Grindstone or attribute value
 */

	$.fn.attr = function(attribute, value) {
		var elemAttribute;
		this.each(function() {
			if (value) {
				this.setAttribute(attribute, value);
			} else {
				elemAttribute = this.getAttribute(attribute);
			}
		});
		return value ? this : elemAttribute;
	};

/**
 * Determine if the current element has the specified attribute
 * @param {string} attribute
 * @returns {boolean} true or false
 */

	$.fn.hasAttr = function(attribute) {
		var exists;
		this.each(function() {
			if (attribute) exists = $(this).attr(attribute) !== null;
		});
		return exists;
	};

/**
 * Remove the the specified attribute
 * @param {string} attribute
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeAttr = function(attribute) {
		this.each(function() {
			if (attribute) this.removeAttribute(attribute);
		});
		return this;
	};

/**
 * Adjust the styles of selected elements or return the requested value
 * @param {object|string} style properties
 * @param {string} style value
 * @returns {object|string} current instance of Grindstone or style value
 */

	$.fn.css = function(styles, value) {
		var returnedStyle;
		this.each(function() {
			if (typeof styles === "object") {
				for (var i in styles) {
					this.style[i] = styles[i];
				}
			} else if (typeof styles === "string" && !value) {
				returnedStyle = this.style[styles];
			} else if (typeof styles === "string" && typeof value === "string") {
				this.style[styles] = value;
			}
		});
		return (typeof styles === "object" || typeof styles === "string" && value) ? this : returnedStyle;
	};

/**
 * Determine if the elements have the specified class
 * @param {string} class
 * @returns {boolean} true or false
 */

	$.fn.hasClass = function(cls) {
		var regx = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		var hasCls;
		this.each(function() {
			hasCls = (this.className.match(regx) !== null) ? true : false;
		});
		return hasCls;
	};

/**
 * Add a class to the current set of elements
 * @param {string} class
 * @returns {object} current instance of Grindstone
 */

	$.fn.addClass = function(cls) {
		this.each(function() {
			if (!$(this).hasClass(cls)) {
				if (this.className === "") {
					this.className += cls;
				} else {
					this.className += " " + cls;
				}
			}
		});
		return this;
	};

/**
 * Remove a class from the current set of elements
 * @param {string} class
 * @returns {object} current instance of Grindstone
 */

	$.fn.removeClass = function(cls) {
		var regx = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		this.each(function() {
			if ($(this).hasClass(cls)) this.className = this.className.replace(regx, "");
		});
		return this;
	};

/**
 * Toggle the specified class
 * @param {string} class
 * @returns {object} current instance of Grindstone
 */

	$.fn.toggleClass = function(cls) {
		this.each(function() {
			if (!$(this).hasClass(cls)) {
				$(this).addClass(cls);
			} else {
				$(this).removeClass(cls);
			}
		});
		return this;
	};

/**
 * Clone the first element in the set
 * @returns {object} a cloned instance of Grindstone
 */
 
	$.fn.clone = function() {
		return this.set[0].cloneNode(true);
	};

/**
 * Adjust the height of the selected elements or return the current height value of the first element in the set
 * @param {number} new height in px, optional
 * @returns {object|number} current instance of Grindstone or current height of the first element
 */

	$.fn.height = function(num) {
		if (typeof num === "number" || num === 0) {
			this.each(function() {
				this.style.height = num + "px";
			});
		} else {
			return this.set[0].offsetHeight;
		}
		return this;
	};

/**
 * Adjust the width of the selected elements or return the current width value of the first element in the set
 * @param {number} new width in px, optional
 * @returns {object|number} current instance of Grindstone or current width of the first element in the set
 */

	$.fn.width = function(num) {
		if (typeof num === "number" || num === 0) {
			this.each(function() {
				this.style.width = num + "px";
			});
		} else {
			return this.set[0].offsetWidth;
		}
		return this;
	};

/**
 * Show a set of hidden elements
 * @param {delay} delay in milliseconds, optional
 * @returns {object} current instance of Grindstone
 */

	$.fn.show = function(delay) {
		this.each(function() {
			if (typeof delay === "number") {
				var self = this;
				setTimeout(function() {
					self.style.display = "block";
				}, delay);
			} else {
				this.style.display = "block";
			}
		});
		return this;
	};

/**
 * Hide a set of elements
 * @param {delay} delay in milliseconds, optional
 * @returns {object} current instance of Grindstone
 */

	$.fn.hide = function(delay) {
		this.each(function() {
			if (typeof delay === "number") {
				var self = this;
				setTimeout(function() {
					self.style.display = "none";
				}, delay);
			} else {
				this.style.display = "none";
			}
		});
		return this;
	};

/**
 * doubleTap()
 * 
 * Custom double-tapping/double-clicking method
 *
 * Parameter:
 * -callback (triggered if the double-click/double-tap event is completed in time)
 */

/**
 * Trigger a function by double-tapping or double-clicking
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.doubleTap = function(callback) {
		var active, interaction;
		this.each(function() {
			active = false;
			interaction = ("ontouchend" in d) ? "touchend" : "click";
			$(this).on(interaction, function() {
				if (active) {
					callback();
					return active = false;
				}
				active = true;
				setTimeout(function() {
					return active = false;
				}, 350);
			});
		});
		return this;
 	};
 
/**
 * Iterate through each item in the set and execute the callback
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */
	
	$.fn.each = function(callback) {
		for (var i = 0; i < this.set.length; i++) {
			callback.call(this.set[i]);
		}
		return this;
 	};
 
/**
 * Return the element at the specified index of the current set
 * @param {number} index
 * @returns {object} new instance of Grindstone specific to one element
 */

	$.fn.eq = function(index) {
		return $(this.set[index]);
	};

/**
 * Assign an event listener
 * @param {string} event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.on = function(action, callback) {
		var events, i;
		this.each(function() {
			events = action.split(" ");
			for (i = 0; i < events.length; i++) {
				this.addEventListener(events[i], callback, false);
			}
		});
		return this;
	};

/**
 * Remove an event listener
 * @param {string} event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.off = function(action, callback) {
		var events, i;
		this.each(function() {
			events = action.split(" ");
			for (i = 0; i < events.length; i++) {
				this.removeEventListener(events[i], callback, false);
			}
		});
		return this;
	};

/**
 * Replace an element's inner HTML or return the current value
 * @param {string} content, optional
 * @returns {object|string} current instance of Grindstone or current value of an element's inner HTML
 */

	$.fn.html = function(content) {
		var text;
		this.each(function() {
			if (content) {
				this.innerHTML = content;
			} else {
				text = this.innerHTML;
			}
		});
		return content ? this : text;
 	};
 
/**
 * Insert new content before a target element
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.before = function(content) {
		var dom, i;
		this.each(function() {
			if (typeof content === "string") {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML("beforebegin", content);
				} else {	
					dom = d.querySelectorAll(content);
					for (i = 0; i < dom.length; i++) {
						this.parentNode.insertBefore(dom[i], this);
					}
				}
			} else {
				this.parentNode.insertBefore(content, this);
			}
		});
		return this;
	};

/**
 * Insert new content after a target element
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.after = function(content) {
		var dom, i;
		this.each(function() {
			if (typeof content === "string") {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML("afterend", content);
				} else {	
					dom = d.querySelectorAll(content);
					for (i = 0; i < dom.length; i++) {
						this.parentNode.insertBefore(dom[i], this.nextSibling);
					}
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};

/**
 * mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state (default)
 * Dynamically adds class "down" to elements as an active state (default)
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 * Developers may define their own hover/active classes with the optional "classes" object
 * 
 * Parameter:
 * -classes (object with properties "hoverClass" and "activeClass")
 */

/**
 * Create hover and active states
 * @param {object} hoverClass => value, activeClass => value
 * @returns {object} current instance of Grindstone
 */

	$.fn.mouseable = function(classes) {
		
		var hoverClass, activeClass;
		
		if (classes) {
			if (typeof classes === "object") {
				hoverClass  = (classes.hasOwnProperty("hoverClass"))  ? classes["hoverClass"]  : "over";
				activeClass = (classes.hasOwnProperty("activeClass")) ? classes["activeClass"] : "down";
			} else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
		} else {
			hoverClass  = "over";
			activeClass = "down";
		}
		function createInteraction(touchEvt, mouseEvt) {
			return ("ontouchend" in d) ? touchEvt : mouseEvt;
		};
		
		var events = {
			hover:  createInteraction("touchstart", "mouseenter"),
			remove: createInteraction("touchend", "mouseleave"),
			down:   createInteraction("touchstart", "mousedown"),
			up: 	createInteraction("touchend", "mouseup mouseleave")
		};
		
		this.each(function() {
			
			$(this)
				.on(events.hover, function() {
					$(this).addClass(hoverClass); // .on([evtHover, evtDown], function() {});
				})
				.on(events.remove, function() {
					$(this).removeClass(hoverClass);
				})
				.on(events.down, function() {
					$(this).addClass(activeClass);
				})
				.on(events.up, function() {
					$(this).removeClass(activeClass);
				});
		});
		
		return this;
	};

/**
 * Return the left or top value of the selector, relative to the document
 * @param {string} position, "left" or "top"
 * @returns {number} offset value in px
 */

	$.fn.offset = function(position) {
		var elem, offsetLeft, offsetTop;
		if (position && typeof position === "string") {
			if (position !== "left" && position !== "top") {
				throw new Error("offset() position must be either 'left' or 'top'.");
			} else {	
				elem = this.set[0];
				if (position === "left") {
					offsetLeft = 0;
				    do {
				        if (!isNaN(elem.offsetLeft)) {
				          offsetLeft += elem.offsetLeft;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetLeft;
				} else if (position === "top") {
					offsetTop = 0;
				    do {
				        if (!isNaN(elem.offsetTop)) {
				          offsetTop += elem.offsetTop;
				        }
				    } while (elem = elem.offsetParent);
				    return offsetTop;
				}
			}
		} else {
			throw new Error("offset() position must be a string: acceptable values are 'left' and 'top'.");
		}
	};

/**
 * prepend()
 *
 * Inserts a new element or content to the front of the target's childNode list
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -prependElement
 */

/**
 * Prepend a new element or new content
 * @param {object|string} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.prepend = function(element) {
		var dom, i;
		this.each(function() {
			if (typeof element === "string") {
				if (element.match(/(<).+(>)/)) {
					this.insertAdjacentHTML("afterbegin", element);
				} else {
					dom = d.querySelectorAll(element);
					for (i = 0; i < dom.length; i++) {
						this.insertBefore(dom[i], this.firstChild);
					}
				}
			} else {
				this.insertBefore(element, this.firstChild);
			}
		});
		return this;
	};

/**
 * Trigger a function when the DOM content is loaded
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.ready = function(callback) {
		this.each(function() {
			this.addEventListener("DOMContentLoaded", callback, false);
		});
		return this;
	};

/**
 * Trigger a function when the selector's contents have loaded
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

	$.fn.load = function(callback) {
		this.each(function() {
			this.addEventListener("load", callback, false);
		});
		return this;
	};

/**
 * remove()
 *
 * Appends the specified child element from the current object if the target is specified
 * If no target is specified, the parent of the current node will remove the node from the DOM
 *
 * Parameter: (optional)
 * -target
 */
	
	$.fn.remove = function(_target) {
		
		var elems, parents, i, j;
		
		if (_target) {
			
			elems = document.querySelectorAll(_target);
			parents = this.set;
			
			for (i = 0; i < parents.length; i++) {
				for (j = 0; j < elems.length; j++) {
					parents[i].removeChild(elems[j]);
				}
			}
			
		}
		
		else {
			for (i = 0; i < this.set.length; i++) {
				this.set[i].parentNode.removeChild(this.set[i]);
			}
		}
		
		return this;
	};

/**
 * replaceWith()
 * 
 * Replaces the selected element contents with the specified content
 *
 * Parameter:
 * -content
 */
	
	$.fn.replaceWith = function(_content) {
		
		this.each(function() {
			if (_content) this.outerHTML = _content;
		});
		
		return this;
 	};
 
/**
 * resize()
 * 
 * Captures the native "onresize" event and executes a function each time the event triggers
 * 
 * Parameter:
 * -callback
 */
	
	$.fn.resize = function(_callback) {
	
		this.each(function() {
			
			$(this).on("resize", function() {
				_callback();
			});
			
		});
		
		return this;
 	};
 
/**
 * scroll()
 * 
 * Captures the native "onscroll" event and executes a function each time the event triggers
 * 
 * Parameter:
 * -callback
 */
	
	$.fn.scroll = function(_callback) {
		
		this.each(function() {
			
			$(this).on("scroll", function() {
				_callback();
			});
			
		});
		
		return this;
 	};
 
/**
 * scrollTop()
 * 
 * Returns the pageYOffset of the given scrollable element if the "top" argument is not supplied.
 * Scrolls the element to a specific pixel value if the "top" argument is supplied.
 * 
 * Parameter: (optional)
 * -top (number; document top position)
 */
 	
 	$.fn.scrollTop = function(_top) {
		
		var topOffset;
		
		this.each(function() {
			
			if (this === window) {
			
				if (typeof _top === "number") {
					this.scrollTo(0, _top);
				}
				
				else {
					topOffset = this.pageYOffset;
				}
			
			}
			
			else {
				
				if (typeof _top === "number") {
					this.scrollTop = _top;
				}
				
				else {
					topOffset = this.scrollTop;
				}
				
			}
			
		});
		
		return (typeof _top === "number") ? this : topOffset;
 	};
 
/**
 * trigger()
 * 
 * Dispatches custom event listeners
 * 
 * Parameter:
 * -event
 */
	
	$.fn.trigger = function(_event) {
			
		var customEvent = new Event(_event);
		
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		
		return this;
 	};
 
/**
 * val() / getVal() / removeVal()
 *
 * val(): Assigns an arbitrary value (defined by the developer) to a specified element
 * getVal(): Returns the arbitrary value defined by val()
 * removeVal(): Removes the arbitrary value defined by val()
 * 
 * Parameters:
 * -valueName (defined by the developer)
 * -valueContent (specified in the .val() method only)
 */
	
	// Set the arbitrary value
	//
	$.fn.val = function(_valueName, _valueContent) {
		
		this.each(function() {
			$(this).attr("data-value-" + _valueName, _valueContent);
		});
		
		return this;
	};
	
	// Call the arbitrary value
	//
	$.fn.getVal = function(_valueName) {
		
		var elemValue;
		
		this.each(function() {
			elemValue = $(this).attr("data-value-" + _valueName);
		});
		
		return elemValue;
	};
	
	// Remove the arbitrary value
	//
	$.fn.removeVal = function(_valueName) {
		
		this.each(function() {
			$(this).removeAttr("data-value-" + _valueName);
		});
		
		return this;
	};

/**
 * wrap() / wrapInner()
 * 
 * Wraps the outer/innerHTML of the selected element(s) within the specified structure
 *
 * Parameter:
 * -structure
 */
	
	$.fn.wrap = function(_structure) {
		
		var contents, wrap;
		
		this.each(function() {
			
			if (typeof _structure === "string") {
				
				contents = this.outerHTML;
				wrap = _structure;
				
				this.outerHTML = wrap + contents;
				
			}
			
			else {
				throw new Error("wrap() structure must be specified as a string.");
			}
			
		});
		
		return this;
 	};
	
	$.fn.wrapInner = function(_structure) {
		
		var contents, wrap;
		
		this.each(function() {
			
			if (typeof _structure === "string") {
				
				contents = $(this).html();
				wrap = _structure;
				
				$(this).html(wrap + contents);
				
			}
			
			else {
				throw new Error("wrapInner() structure must be specified as a string.");
			}
			
		});
		
		return this;
 	};
 
	return w.Grindstone = w.$ = $;
 	
})(window, document);