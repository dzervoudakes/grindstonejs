/**
 * Append a new child element to the current object
 * @param {string|object} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.append = function(element) {
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					var self = this;
					var dom = d.querySelectorAll(element);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(function(item) {
						self.appendChild(item);
					});
				}	
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};
