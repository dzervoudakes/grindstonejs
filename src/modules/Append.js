	/** @namespace Append */
	
	/**
	 * @method append
	 * @memberof Append
	 * @param {object|string} element
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').append('#element');
	 * $('#selector').append('<p>Hello World</p>');
	 * @description Append a new element or new content.
	 */

	$.fn.append = function(element) {
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					const self = this;
					let dom = d.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						self.appendChild(item);
					});
				}	
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};
