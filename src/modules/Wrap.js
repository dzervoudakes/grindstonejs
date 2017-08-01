	/** @namespace Wrap */
	
	/**
	 * @method wrap
	 * @memberof Wrap
	 * @param {string} structure
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').wrap('<section class="outside"><div class="middle"><div class="inner">');
	 * @description Wrap the outer structure of the set of elements.
	 */

	$.fn.wrap = function(structure) {
		this.each(function() {
			if (typeof structure === 'string') {
				const contents = this.outerHTML;
				this.outerHTML = structure + contents;
			} else {
				throw new Error('wrap() structure must be a string.');
			}
		});
		return this;
	};

	/**
	 * @method wrapInner
	 * @memberof Wrap
	 * @param {string} structure
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').wrapInner('<section class="outside"><div class="middle"><div class="inner">');
	 * @description Wrap the inner structure of the set of elements.
	 */
	
	$.fn.wrapInner = function(structure) {
		this.each(function() {
			if (typeof structure === 'string') {
				const contents = $(this).html();
				$(this).html(structure + contents);
			} else {
				throw new Error('wrapInner() structure must be a string.');
			}
		});
		return this;
	};
 