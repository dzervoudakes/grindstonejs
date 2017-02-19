/**
 * Check if any of the elements match the given selector or callback function
 * @param {string|function} filterBy - selector or callback function, return true to include
 * @returns {boolean} true if at least one of the elements matches the given selector
 */

	$.fn.is = function(filterBy) {
		if (typeof filterBy === 'function') {
            for (var i = 0; i < this.length; i++) {
                if (filterBy.call(this[i], i, this[i])) {
                    return true;
                }
            }
		} else {
            for (var i = 0; i < this.length; i++) {
                if (this[i][priv.matchesFuncName](filterBy)) {
                    return true;
                }
            }
        }
		return false;
	};

/**
 * Map each element to an array of values
 * @param {function} callback - return the value to be included, or null or undefined to skip
 * @returns {object} Grindstone object of included values returned from the callback
 */

	$.fn.map = function(callback) {
        var newSet = $();
        for (var i = 0; i < this.length; i++) {
            var ret = callback.call(this[i]);
            if (ret !== undefined && ret !== null) {
                newSet.push(ret);
            }
        }
        return newSet;
	};

/**
 * Filter the elements by the selector or callback function
 * @param {string|function} filterBy - selector or callback function, return true to include
 * @returns {object} new instance of Grindstone with the reduced set of matching elements
 */

	$.fn.filter = function(filterBy) {
        return $.fn.map.call(this, function() {
            if ($(this).is(filterBy)) {
                return this;
            }
        });
	};

/**
 * Excludes matching elements and includes not matching elements.
 * @param {string|function} filterBy - selector or callback function, return true to include
 * @returns {boolean} new instance of Grindstone with the reduced set of not matching elements
 */

	$.fn.not = function(filterBy) {
        return $.fn.map.call(this, function() {
            if (!$(this).is(filterBy)) {
                return this;
            }
        });
	};

/**
 * Get the first element
 * @returns {object} new instance of Grindstone with the first element
 */

    $.fn.first = function() {
        return $(this.set[0]);
    }

/**
 * Get the last element
 * @returns {object} new instance of Grindstone with the last element
 */

    $.fn.last = function() {
        return $(this.set[this.set.length - 1]);
    }

