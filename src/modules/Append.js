	/** @namespace Append */
	
	/**
	 * Append a new element or new content.
	 * @method append
	 * @memberof Append
	 * @param {object|string} element
	 * @returns {object} current instance of Grindstone
	 * @example
	 * $('#selector').append('#element');
	 * $('#selector').append('<p>Hello World</p>');
	 */

	$.fn.append = function(element) {
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					let dom = d.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						this.appendChild(item);
					});
				}	
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};
