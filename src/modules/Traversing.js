
    priv.elementProp = function(set, propName, selector) {
        return $.fn.map.call(set, function() {
            var find = this;
            while (true) {
                var element = find[propName];
                if (!element) {
                    break;
                }
                if (element.nodeType != 1) {
                    find = element;
                    continue;
                }
                if (!selector || $(element).is(selector)) {
                    return element;
                }
                break;
            }
        });
    };
    
    priv.children = function(set, nodeType, selector) {
        var newSet = $();
        for (var i = 0; i < set.length; i++) {
            for (var child = set[i].firstChild; child; child = child.nextSibling) {
                if (nodeType === undefined || nodeType === child.nodeType) {
                    if (!selector || $(child).is(selector)) {
                        newSet.push(child);
                    }
                }
            }
        }
        return newSet;
    };

/**
 * Get the parent element as a Grindstone object
 * @param {string} selector - only get the parent if it matches the selector, optional
 * @returns {object} parents instance of Grindstone
 */

	$.fn.parent = function(selector) {
        return priv.elementProp(this, 'parentNode', selector);
	};

/**
 * Get the next element as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} instance of Grindstone
 */

	$.fn.next = function(selector) {
        return priv.elementProp(this, 'nextSibling', selector);
	};

/**
 * Get the previous element as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} instance of Grindstone
 */

	$.fn.prev = function(selector) {
        return priv.elementProp(this, 'previousSibling', selector);
	};

/**
 * Get the children elements as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} children instance of Grindstone
 */

	$.fn.children = function(selector) {
        return priv.children(this, 1, selector);
	};

/**
 * Get all the children as a Grindstone object, including text and comments
 * @returns {object} children instance of Grindstone
 */

	$.fn.contents = function() {
        return priv.children(this);
	};

