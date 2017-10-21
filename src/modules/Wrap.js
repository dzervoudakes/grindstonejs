	/** @namespace Wrap */
	
	/**
	 * Wrap the outer structure of the set of elements.
	 * @method wrap
	 * @memberof Wrap
	 * @param {string} structure
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').wrap('<section class="outside"><div class="middle"><div class="inner">');
	 */

	$.fn.wrap = function(structure) {
		this.each(function() {
			if (typeof structure === 'string' && structure.startsWith('<') && structure.endsWith('>')) {
				const contents = this.outerHTML;
				this.outerHTML = structure + contents;
			} else {
				throw new Error('wrap() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			}
		});
		return this;
	};

	/**
	 * Wrap the inner structure of the set of elements.
	 * @method wrapInner
	 * @memberof Wrap
	 * @param {string} structure
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').wrapInner('<section class="outside"><div class="middle"><div class="inner">');
	 */
	
	$.fn.wrapInner = function(structure) {
		this.each(function() {
			if (typeof structure === 'string' && structure.startsWith('<') && structure.endsWith('>')) {
				const contents = $(this).html();
				$(this).html(structure + contents);
			} else {
				throw new Error('wrapInner() structure must be a string that denotes an HTML container starting with "<" and ending with ">".');
			}
		});
		return this;
	};
 