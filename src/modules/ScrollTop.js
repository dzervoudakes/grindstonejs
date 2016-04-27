/**
 * scrollTop()
 * 
 * Returns the pageYOffset of the given scrollable element if the "top" argument is not supplied.
 * Scrolls the element to a specific pixel value if the "top" argument is supplied.
 * 
 * Parameter: (optional)
 * -top (number; document top position)
 */

/**
 * Capture the resize event from a set of elements and execute a callback
 * @param {function} callback
 * @returns {object} current instance of Grindstone
 */

 	$.fn.scrollTop = function(top) {
		
		var topOffset;
		
		this.each(function() {
			
			if (this === window) {
			
				if (typeof top === "number") {
					this.scrollTo(0, top);
				}
				
				else {
					topOffset = this.pageYOffset;
				}
			
			}
			
			else {
				
				if (typeof top === "number") {
					this.scrollTop = top;
				}
				
				else {
					topOffset = this.scrollTop;
				}
				
			}
			
		});
		
		return (typeof top === "number") ? this : topOffset;
 	};
 