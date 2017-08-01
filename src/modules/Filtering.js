    /** @namespace Filtering */
    
    /**
     * @method is
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {boolean} true if at least one of the elements matches the given selector
     * @example $('.selector').is('.visible');
     * @description Check if any of the elements match the given selector or callback function.
     */

	$.fn.is = function(filterBy) {
        if (typeof filterBy === 'function') {
            for (let i = 0; i < this.length; i++) {
                if (filterBy.call(this[i], i, this[i])) return true;
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                if (this[i][priv.matchesFuncName](filterBy)) return true;
            }
        }
		return false;
	};

    /**
     * @method map
     * @memberof Filtering
     * @param {function} callback return the value to be included, or null or undefined to skip
     * @returns {object} Grindstone object of included values returned from the callback
     * @example $(array).map(function(){});
     * @description Map each element to an array of values.
     */

	$.fn.map = function(callback) {
        const newSet = $();
        for (let i = 0; i < this.length; i++) {
            let ret = callback.call(this[i]);
            if (ret !== undefined && ret !== null) newSet.push(ret);
        }
        return newSet;
	};

    /**
     * @method filter
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {object} new instance of Grindstone with the reduced set of matching elements
     * @example $('.selector').filter('.visible');
     * @description Filter the elements by the selector or callback function.
     */

	$.fn.filter = function(filterBy) {
        return $.fn.map.call(this, function() {
            if ($(this).is(filterBy)) return this;
        });
	};

    /**
     * @method not
     * @memberof Filtering
     * @param {string|function} filterBy selector or callback function, return true to include
     * @returns {object} new instance of Grindstone with the reduced set of not matching elements
     * @example $('.selector').not('.hidden');
     * @description Excludes matching elements and includes non-matching elements.
     */

	$.fn.not = function(filterBy) {
        return $.fn.map.call(this, function() {
            if (!$(this).is(filterBy)) return this;
        });
	};

    /**
     * @method first
     * @memberof Filtering
     * @returns {object} new instance of Grindstone with the first element of the original set
     * @example $('.selector').first();
     * @description Get the first element.
     */

    $.fn.first = function() {
        return $(this.set[0]);
    };

    /**
     * @method last
     * @memberof Filtering
     * @returns {object} new instance of Grindstone with the last element of the original set
     * @example $('.selector').last();
     * @description Get the last element.
     */

    $.fn.last = function() {
        return $(this.set[this.set.length - 1]);
    };
