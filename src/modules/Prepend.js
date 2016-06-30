/**
 * Prepend a new element or new content
 * @param {object|string} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.prepend = function(element) {
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterbegin', element);
				} else {
					var self = this;
					var dom = d.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function(item) {
						self.insertBefore(item, self.firstChild);
					});
				}
			} else {
				this.insertBefore(element, this.firstChild);
			}
		});
		return this;
	};
