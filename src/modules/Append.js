/**
 * Append a new child element to the current object
 * @param {string|object} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.append = function(element) {
		var isHTML = typeof element === 'string' && element.match(/(<).+(>)/);
		this.each(function() {
			if (typeof element === 'string') {
				if (isHTML) {
					this.innerHTML += element;
				} else {
					var textNode = document.createTextNode(element);
					this.appendChild(textNode);
				}
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};
