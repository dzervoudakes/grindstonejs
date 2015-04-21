/**
 * scrollTop()
 * 
 * Returns the pageYOffset of the given scrollable element if the "top" argument is not supplied.
 * Scrolls the element to a specific pixel value if the "top" argument is supplied.
 * 
 * Parameter: (optional)
 * -top (number; document top position)
 */
	
	$.fn.scrollTop = function(_top) {
		
		var topOffset;
		
		this.init(function() {
			
			if (typeof _top === "number") {
				this.scrollTo(0, _top);
			}
			
			else {
				topOffset = this.pageYOffset;
			}
			
		});
		
		return (typeof _top === "number") ? this : topOffset;
 	};
 