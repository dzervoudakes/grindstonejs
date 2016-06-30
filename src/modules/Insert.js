/**
 * Insert new content before a target element
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.before = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {
					var self = this;
					var dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function(item) {
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
 * Insert new content after a target element
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.after = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {
					var self = this;
					var dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function(item) {
						self.parentNode.insertBefore(item, self.nextSibling);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};
