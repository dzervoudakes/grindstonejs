/** @namespace Core */

/**
 * Create new instances of our constructor using familiar, jQuery-style syntax.
 * @function Grindstone
 * @memberof Core
 * @param {string|object} selector
 * @param {string|object} context optional
 * @returns {object} Grindstone
 * @example
 * $('.selector');
 * $('.selector', '#container');
 */

/** @namespace Ajax */

/**
 * Submit an AJAX request. This module uses a Promise-based approach.
 * Acceptable properties of of our opts parameter include:
 * - method (GET, POST, PUT, etc.)
 * - url (data path)
 * - async (true or false)
 * - body (payload)
 * - header (adds a custom HTTP header to the request)
 * - headerValue (value of the custom HTTP header)
 * @method ajax
 * @memberof Ajax
 * @param {object} opts
 * @returns {object} a Promise
 * @example
 * $.ajax({ method: 'POST', url: 'https://www.something.com/api', body: { form: data } }).then(function(resp) {}).catch(function(err) {});
 */

/** @namespace Append */

/**
 * Append a new element or new content.
 * @method append
 * @memberof Append
 * @param {object|string} element
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').append('#element');
 * $('#selector').append('<p>Hello World</p>');
 */

/** @namespace Attributes */

/**
 * Set or return the value of the specified attribute.
 * @method attr
 * @memberof Attributes
 * @param {string} attribute
 * @param {string} value optional
 * @returns {object|string} current instance of Grindstone or attribute value
 * @example
 * $('#selector').attr('example');
 * $('#selector').attr('example', 'test');
 */

/**
 * Determine if the current element has the specified attribute.
 * @method hasAttr
 * @memberof Attributes
 * @param {string} attribute
 * @returns {boolean}
 * @example $('#selector').hasAttr('example');
 */

/**
 * Remove the the specified attribute.
 * @method removeAttr
 * @memberof Attributes
 * @param {string} attribute
 * @returns {object} current instance of Grindstone
 * @example $('#selector').removeAttr('example');
 */

/** @namespace Classes */

/**
 * Determine if the elements have the specified class.
 * @method hasClass
 * @memberof Classes
 * @param {string} cls className
 * @returns {boolean}
 * @example $('#selector').hasClass('example');
 */

/**
 * Add a class to the current set of elements.
 * @method addClass
 * @memberof Classes
 * @param {string} cls className
 * @returns {object} current instance of Grindstone
 * @example $('#selector').addClass('example');
 */

/**
 * Remove a class from the current set of elements.
 * @method removeClass
 * @memberof Classes
 * @param {string} cls className
 * @returns {object} current instance of Grindstone
 * @example $('#selector').removeClass('example');
 */

/**
 * Toggle the specified class.
 * @method toggleClass
 * @memberof Classes
 * @param {string} cls className
 * @returns {object} current instance of Grindstone
 * @example $('#selector').toggleClass('example');
 */

/** @namespace Clone */

/**
 * Clone the elements in the set.
 * @method clone
 * @memberof Clone
 * @returns {object} current instance of Grindstone
 * @example $('#selector').clone();
 */

/** @namespace CSS */

/**
 * Adjust the styles of selected elements or return the requested value.
 * @method css
 * @memberof CSS
 * @param {object|string} styles object with style properties or single style in a string
 * @param {string} value new style value to apply
 * @returns {object|string} current instance of Grindstone or style value
 * @example
 * $('#selector').style('display');
 * $('#selector').style('display', 'block');
 * $('#selector').style({ display: 'block', color: 'red' });
 */

/** @namespace Data */

/**
 * Assign a data-value to a set of elements or return the current value of an element.
 * @method data
 * @memberof Data
 * @param {string} valueName
 * @param {string} newValue optional
 * @returns {object|string} current instance of Grindstone or the current data-value of an element
 * @example
 * $('#selector').data('name');
 * $('#selector').data('name', 'value');
 */

/**
 * Remove a data-value from a set of elements.
 * @method removeData
 * @memberof Data
 * @param {string} valueName
 * @returns {object} current instance of Grindstone
 * @example $('#selector').removeData('name');
 */

/** @namespace Debounce */

/**
 * Debounce a given function.
 * @method debounce
 * @memberof Debounce
 * @param {function} fn function to debounce
 * @param {number} wait delay in ms
 * @param {boolean} immediate invoke immediately, optional
 * @returns {function}
 * @example $.debounce(function(){}, 300);
 */

/** @namespace Dimensions */

/**
 * Adjust the height of the selected elements or return the current height value of the first element in the set.
 * @method height
 * @memberof Dimensions
 * @param {number} num px, optional
 * @returns {object|number} current instance of Grindstone or current height of the first element in the set
 * @example
 * $('#selector').height();
 * $('#selector').height(30);
 */

/**
 * Adjust the width of the selected elements or return the current width value of the first element in the set.
 * @method width
 * @memberof Dimensions
 * @param {number} num px, optional
 * @returns {object|number} current instance of Grindstone or current width of the first element in the set
 * @example
 * $('#selector').width();
 * $('#selector').width(30);
 */

/** @namespace Display */

/**
 * Show a set of hidden elements.
 * @method show
 * @memberof Display
 * @param {delay} delay ms, optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').show();
 * $('#selector').show(100);
 */

/**
 * Hide a set of elements.
 * @method hide
 * @memberof Display
 * @param {delay} delay ms, optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').hide();
 * $('#selector').hide(100);
 */

/** @namespace DoubleTap */

/**
 * Trigger a function by double-tapping or double-clicking.
 * @method doubleTap
 * @memberof DoubleTap
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $('#selector').doubleTap(function(){});
 */

/** @namespace Each */

/**
 * Iterate through each item in the set and execute the callback.
 * @method each
 * @memberof Each
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $('.selector').each(function(index){});
 */

/** @namespace Eq */

/**
 * Return the DOM element at the specified index of the current as a new instance of Grindstone.
 * @method eq
 * @memberof Eq
 * @param {number} index
 * @returns {object} new set in a Grindstone instance containing the specified element
 * @example $('.selector').eq(2);
 */

/** @namespace Events */

/**
 * Assign an event listener.
 * @method on
 * @memberof Events
 * @param {string} action event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').on('change', function(){});
 * $('#selector').on('click touchend', function(){});
 */

/**
 * Remove an event listener.
 * @method off
 * @memberof Events
 * @param {string} action event(s)
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').off('change', function(){});
 * $('#selector').off('click touchend', function(){});
 */

/** @namespace Filtering */

/**
 * Check if any of the elements match the given selector or callback function.
 * @method is
 * @memberof Filtering
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {boolean} true if at least one of the elements matches the given selector
 * @example $('.selector').is('.visible');
 */

/**
 * Map each element to an array of values.
 * @method map
 * @memberof Filtering
 * @param {function} callback return the value to be included, or null or undefined to skip
 * @returns {object} Grindstone object of included values returned from the callback
 * @example $(array).map(function(item){});
 */

/**
 * Filter the elements by the selector or callback function.
 * @method filter
 * @memberof Filtering
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {object} new instance of Grindstone with the reduced set of matching elements
 * @example $('.selector').filter('.visible');
 */

/**
 * Excludes matching elements and includes non-matching elements.
 * @method not
 * @memberof Filtering
 * @param {string|function} filterBy selector or callback function, return true to include
 * @returns {object} new instance of Grindstone with the reduced set of not matching elements
 * @example $('.selector').not('.hidden');
 */

/**
 * Get the first element.
 * @method first
 * @memberof Filtering
 * @returns {object} new instance of Grindstone with the first element of the original set
 * @example $('.selector').first();
 */

/**
 * Get the last element.
 * @method last
 * @memberof Filtering
 * @returns {object} new instance of Grindstone with the last element of the original set
 * @example $('.selector').last();
 */

/** @namespace Focus */

/**
 * Focus on the first element in the set or trigger a callback when some element is focused on.
 * @method focus
 * @memberof Focus
 * @param {function} callback optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').focus();
 * $('#selector').focus(function(){});
 */

/** @namespace Get */

/**
 * Return the DOM element at the specified index of the current set.
 * @method get
 * @memberof Get
 * @param {number} index
 * @returns {object} the DOM element
 * @example $('.selector').get(2);
 */

/** @namespace HTML */

/**
 * Replace an element's innerHTML or return the current innerHTML.
 * @method html
 * @memberof HTML
 * @param {string} content optional
 * @returns {object|string} current instance of Grindstone or current innerHTML of an element
 * @example
 * $('#selector').html();
 * $('#selector').html('<p>Hello World</p>');
 */

/** @namespace Insert */

/**
 * Insert new content before a target element.
 * @method before
 * @memberof Insert
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 * @example $('#selector').before('<p>Hello World</p>');
 */

/**
 * Insert new content after a target element.
 * @method after
 * @memberof Insert
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 * @example $('#selector').after('<p>Hello World</p>');
 */

/** @namespace Mouseable */

/**
 * Create hover and active states.
 * @method mouseable
 * @memberof Mouseable
 * @param {object} classes optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').mouseable();
 * $('#selector').mouseable({ hoverClass: 'stuff', activeClass: 'things' });
 */

/** @namespace Offset */

/**
 * Return the left or top value of the selector, relative to the document.
 * @method offset
 * @memberof Offset
 * @param {string} position 'left' or 'top'
 * @returns {number} offset value in px
 * @example
 * $('#selector').offset('left');
 * $('#selector').offset('right');
 */

/** @namespace Prepend */

/**
 * Prepend a new element or new content.
 * @method prepend
 * @memberof Prepend
 * @param {object|string} element
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').prepend('#element');
 * $('#selector').prepend('<p>Hello World</p>');
 */

/** @namespace Ready */

/**
 * Trigger a function when the DOM content is loaded.
 * @method ready
 * @memberof Ready
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $(document).ready(function(){});
 */

/**
 * Trigger a function on the load event.
 * @method load
 * @memberof Ready
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $(window).load(function(){});
 */

/** @namespace Remove */

/**
 * Remove elements from the DOM.
 * @method remove
 * @memberof Remove
 * @param {object} target element(s), optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').remove();
 * $('#selector').remove('.selector');
 */

/** @namespace ReplaceWith */

/**
 * Replace an element with some other content.
 * @method replaceWith
 * @memberof ReplaceWith
 * @param {object|string} content
 * @returns {object} current instance of Grindstone
 * @example $('#selector').replaceWith('<p>Hello World</p>');
 */

/** @namespace Resize */

/**
 * Capture the resize event from a set of elements and execute a function.
 * @method resize
 * @memberof Resize
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $(window).resize(function(){});
 */

/** @namespace Scroll */

/**
 * Listen for the scroll event and trigger a function.
 * @method scroll
 * @memberof Scroll
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 * @example $(window).scroll(function(){});
 */

/**
 * Scroll an element to a specific top position relative to its another parent container.
 * Return the current top offset of an element, relative to its parent container.
 * @method scrollTop
 * @memberof Scroll
 * @param {number} top offset in px, optional
 * @returns {object|number} current instance of Grindstone or top offset
 * @example
 * $('#selector').scrollTop();
 * $('#selector').scrollTop(50);
 */

/**
 * Scroll an element to a specific left position relative to its another parent container.
 * Return the current left offset of an element, relative to its parent container.
 * @method scrollLeft
 * @memberof Scroll
 * @param {number} left offset in px, optional
 * @returns {object|number} current instance of Grindstone or left offset
 * @example
 * $('#selector').scrollLeft();
 * $('#selector').scrollLeft(50);
 */

/** @namespace Submit */

/**
 * Submit a form or trigger a function when a form is submitted.
 * @method submit
 * @memberof Submit
 * @param {function} callback optional
 * @returns {object} current instance of Grindstone
 * @example
 * $('#selector').submit();
 * $('#selector').submit(function(){});
 */

/** @namespace Traversing */

/**
 * Get the parent element as a Grindstone object.
 * @method parent
 * @memberof Traversing
 * @param {string} selector only get the parent if it matches the selector, optional
 * @returns {object} parent element as a new instance of Grindstone
 * @example
 * $('#selector').parent();
 * $('#selector').parent('.selector');
 */

/**
 * Get the next element as a Grindstone object.
 * @method next
 * @memberof Traversing
 * @param {string} selector only get the element if it matches the selector, optional
 * @returns {object} next element as a new instance of Grindstone
 * @example
 * $('#selector').next();
 * $('#selector').next('.selector');
 */

/**
 * Get the previous element as a Grindstone object.
 * @method prev
 * @memberof Traversing
 * @param {string} selector only get the element if it matches the selector, optional
 * @returns {object} previous element as a new instance of Grindstone
 * @example
 * $('#selector').prev();
 * $('#selector').prev('.selector');
 */

/**
 * Get the child elements as a Grindstone object.
 * @method children
 * @memberof Traversing
 * @param {string} selector only get the elements if they match the selector, optional
 * @returns {object} child elements as a new instance of Grindstone
 * @example
 * $('#selector').children();
 * $('#selector').children('.selector');
 */

/**
 * Get all the children as a Grindstone object, including text and comments.
 * @method contents
 * @memberof Traversing
 * @returns {object} contents as a new instance of Grindstone
 * @example $('#selector').contents();
 */

/** @namespace Trigger */

/**
 * Dispatch a custom event.
 * @method trigger
 * @memberof Trigger
 * @param {number} evt custom event
 * @returns {object|number} current instance of Grindstone or top offset
 * @example $('#selector').trigger('myEvent');
 */

/** @namespace Value */

/**
 * Return or assign the value of an element.
 * @method val
 * @memberof Value
 * @param {string} newValue optional
 * @returns {object|string} current instance of Grindstone or the value of the first element in the set
 * @example
 * $('#selector').val();
 * $('#selector').val('7');
 */

/** @namespace Wrap */

/**
 * Wrap the outer structure of the set of elements.
 * @method wrap
 * @memberof Wrap
 * @param {string} structure
 * @returns {object} current instance of Grindstone
 * @example $('#selector').wrap('<section class="outside"><div class="middle"><div class="inner">');
 */

/**
 * Wrap the inner structure of the set of elements.
 * @method wrapInner
 * @memberof Wrap
 * @param {string} structure
 * @returns {object} current instance of Grindstone
 * @example $('#selector').wrapInner('<section class="outside"><div class="middle"><div class="inner">');
 */