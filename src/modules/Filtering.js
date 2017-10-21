    /** @namespace Filtering */
    
    /**
     * Check if any of the elements match the given selector or callback function.
     * @method is
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {boolean} true if at least one of the elements matches the given selector
     * @example $('.selector').is('.visible');
     */

	$.fn.is = function(filterBy) {
        if (typeof filterBy === 'function') {
            for (let item of this) {
                if (filterBy.call(item, this.indexOf(item), item)) return true;
            }
        } else {
            for (let item of this) {
                if (item[priv.matchesFuncName](filterBy)) return true;
            }
        }
		return false;
	};

    /**
     * Map each element to an array of values.
     * @method map
     * @memberof Filtering
     * @param {function} callback return the value to be included, or null or undefined to skip
     * @returns {object} Grindstone object of included values returned from the callback
     * @example $(array).map(function(item){});
     */

	$.fn.map = function(callback) {
        const newSet = $();
        for (let item of this) {
            let ret = callback.call(item);
            if (ret !== undefined && ret !== null) newSet.push(ret);
        }
        return newSet;
	};

    /**
     * Filter the elements by the selector or callback function.
     * @method filter
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {object} new instance of Grindstone with the reduced set of matching elements
     * @example $('.selector').filter('.visible');
     */

	$.fn.filter = function(filterBy) {
        return $.fn.map.call(this, function() {
            if ($(this).is(filterBy)) return this;
        });
	};

    /**
     * Excludes matching elements and includes non-matching elements.
     * @method not
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {object} new instance of Grindstone with the reduced set of not matching elements
     * @example $('.selector').not('.hidden');
     */

	$.fn.not = function(filterBy) {
        return $.fn.map.call(this, function() {
            if (!$(this).is(filterBy)) return this;
        });
	};

    /**
     * Get the first element.
     * @method first
     * @memberof Filtering
     * @returns {object} new instance of Grindstone with the first element of the original set
     * @example $('.selector').first();
     */

    $.fn.first = function() {
        return $(this.set[0]);
    };

    /**
     * Get the last element.
     * @method last
     * @memberof Filtering
     * @returns {object} new instance of Grindstone with the last element of the original set
     * @example $('.selector').last();
     */

    $.fn.last = function() {
        return $(this.set[this.set.length - 1]);
    };
