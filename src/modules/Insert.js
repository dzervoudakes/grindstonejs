/**
 * Insert new content before a target element
 * @param {string|object} content
 * @returns {object} current instance of Grindstone
 */

	$.fn.before = function(content) {
		var dom, i;
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {	
					dom = d.querySelectorAll(content);
					for (i = 0; i < dom.length; i++) {
						this.parentNode.insertBefore(dom[i], this);
					}
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
		var dom, i;
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {	
					dom = d.querySelectorAll(content);
					for (i = 0; i < dom.length; i++) {
						this.parentNode.insertBefore(dom[i], this.nextSibling);
					}
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};
