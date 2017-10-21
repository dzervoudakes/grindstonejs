	/** @namespace Insert */
	
	/**
	 * Insert new content before a target element.
	 * @method before
	 * @memberof Insert
	 * @param {string|object} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').before('<p>Hello World</p>');
	 */

	$.fn.before = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						this.parentNode.insertBefore(item, self);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this);
			}
		});
		return this;
	};

	/**
	 * Insert new content after a target element.
	 * @method after
	 * @memberof Insert
	 * @param {string|object} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').after('<p>Hello World</p>');
	 */

	$.fn.after = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						this.parentNode.insertBefore(item, self.nextSibling);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};
