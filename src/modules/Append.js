/**
 * Append a new child element to the current object
 * @param {string|object} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.append = function(element) {
		var dom, i;
		this.each(function() {
			if (typeof element === 'string') {
				if (element.match(/(<).+(>)/)) {
					this.innerHTML += element;
				} else {
					dom = d.querySelectorAll(element);
					[].forEach.call(dom, function(item) {
						this.appendChild(item);
					});
				}	
			} else {
				this.appendChild(element);
			}
		});
		return this;
	};
