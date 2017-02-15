/**
 * Append a new child element to the current object
 * @param {string|object} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.append = function(element) {
		var isHTML = typeof element === 'string' && element.match(/(<).+(>)/);
		var i = -1, len = this.length;
		this.each(function() {
			i++;
			if (typeof element === 'string') {
				if (isHTML) {
					this.innerHTML += element;
				} else {
					var textNode = document.createTextNode(element);
					this.appendChild(textNode);
				}
			} else {
				if (i == len - 1) {
					// Append element itself if last.
					this.appendChild(element);
				} else {
					// Append a clone for all but the last.
					this.appendChild(element.cloneNode(true));
				}
			}
		});
		return this;
	};
