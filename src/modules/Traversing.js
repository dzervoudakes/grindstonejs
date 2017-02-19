/**
 * Get the parent elements as a Grindstone object
 * @param {string} filterBy - only get the parent if it matches the selector, optional
 * @returns {object} parents instance of Grindstone
 */

	$.fn.parent = function(selector) {
        return $.fn.map.call(this, function() {
            var element = this.parentNode;
            if (element && (!selector || $(element).is(selector))) {
                return element;
            }
        });
	};

/**
 * Get the next element as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} instance of Grindstone
 */

	$.fn.next = function(selector) {
        return $.fn.map.call(this, function() {
            while (true) {
                var element = this.nextSibling;
                if (!element) {
                    break;
                }
                if (element.nodeType != 1) {
                    continue;
                }
                if (!selector || $(element).is(selector)) {
                    return element;
                }
                break;
            }
        });
	};

/**
 * Get the previous element as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} instance of Grindstone
 */

	$.fn.prev = function(selector) {
        return $.fn.map.call(this, function() {
            while (true) {
                var element = this.previousSibling;
                if (!element) {
                    break;
                }
                if (element.nodeType != 1) {
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
 * Get the children elements as a Grindstone object
 * @param {string} selector - only get the element if it matches the selector, optional
 * @returns {object} children instance of Grindstone
 */

	$.fn.children = function(selector) {
        return priv.children(this, 1, selector);
	};

/**
 * Get all the children as a Grindstone object, including text and comments.
 * @returns {object} children instance of Grindstone
 */

	$.fn.contents = function() {
        return priv.children(this);
	};

