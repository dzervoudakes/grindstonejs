/**
 * Remove elements from the DOM
 * @param {object} target element(s), optional: if omitted, the element(s) invoking this method will be removed
 * @returns {object} current instance of Grindstone
 */

	$.fn.remove = function(target) {
		var elems, parents, i, j;
		if (target) {
			elems = d.querySelectorAll(target);
			parents = this.set;
			for (i = 0; i < parents.length; i++) {
				for (j = 0; j < elems.length; j++) {
					parents[i].removeChild(elems[j]);
				}
			}
		} else {
			for (i = 0; i < this.set.length; i++) {
				this.set[i].parentNode.removeChild(this.set[i]);
			}
		}
		return this;
	};
