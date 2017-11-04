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

	$.fn.map = function(callback) {
        const newSet = $();
        for (let item of this) {
            let ret = callback.call(item);
            if (ret !== undefined && ret !== null) newSet.push(ret);
        }
        return newSet;
	};

	$.fn.filter = function(filterBy) {
        return $.fn.map.call(this, function() {
            if ($(this).is(filterBy)) return this;
        });
	};

	$.fn.not = function(filterBy) {
        return $.fn.map.call(this, function() {
            if (!$(this).is(filterBy)) return this;
        });
	};

    $.fn.first = function() {
        return $(this.set[0]);
    };

    $.fn.last = function() {
        return $(this.set[this.set.length - 1]);
    };
