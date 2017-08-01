	/** @namespace Insert */
	
	/**
	 * @method before
	 * @memberof Insert
	 * @param {string|object} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').before('<p>Hello World</p>');
	 * @description Insert new content before a target element.
	 */

	$.fn.before = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {
					const self = this;
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						self.parentNode.insertBefore(item, self);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this);
			}
		});
		return this;
	};

	/**
	 * @method after
	 * @memberof Insert
	 * @param {string|object} content
	 * @returns {object} current instance of Grindstone
	 * @example $('#selector').after('<p>Hello World</p>');
	 * @description Insert new content after a target element.
	 */

	$.fn.after = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {
					const self = this;
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						self.parentNode.insertBefore(item, self.nextSibling);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};
