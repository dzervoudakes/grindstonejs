/**
 * prepend()
 *
 * Inserts a new element or content to the front of the target's childNode list
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -prependElement
 */

/**
 * Prepend a new element or new content
 * @param {object|string} element
 * @returns {object} current instance of Grindstone
 */

	$.fn.prepend = function(element) {
		var dom, i;
		this.each(function() {
			if (typeof element === "string") {
				if (element.match(/(<).+(>)/)) {
					this.insertAdjacentHTML("afterbegin", element);
				} else {
					dom = d.querySelectorAll(element);
					for (i = 0; i < dom.length; i++) {
						this.insertBefore(dom[i], this.firstChild);
					}
				}
			} else {
				this.insertBefore(element, this.firstChild);
			}
		});
		return this;
	};
