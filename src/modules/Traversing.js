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

	$.fn.parent = function(selector) {
		return priv.elementProp(this, 'parentNode', selector);
	};

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

	$.fn.next = function(selector) {
		return priv.elementProp(this, 'nextSibling', selector);
	};

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

	$.fn.prev = function(selector) {
		return priv.elementProp(this, 'previousSibling', selector);
	};

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

	$.fn.children = function(selector) {
		return priv.children(this, 1, selector);
	};

	/**
	 * Get all the children as a Grindstone object, including text and comments.
	 * @method contents
	 * @memberof Traversing
	 * @returns {object} contents as a new instance of Grindstone
	 * @example $('#selector').contents();
	 */

	$.fn.contents = function() {
		return priv.children(this);
	};
