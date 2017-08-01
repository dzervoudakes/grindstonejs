	/** @namespace Prepend */
	
	/**
	 * @method prepend
	 * @memberof Prepend
	 * @param {object|string} element
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').prepend('#element');
	 * $('#selector').prepend('<p>Hello World</p>');
	 * @description Prepend a new element or new content.
	 */

	$.fn.prepend = function(element) {
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterbegin', element);
				} else {
					const self = this;
					let dom = d.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						self.insertBefore(item, self.firstChild);
					});
				}
			} else {
				this.insertBefore(element, this.firstChild);
			}
		});
		return this;
	};
