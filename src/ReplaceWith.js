/**
 * replaceWith()
 * 
 * Replaces the selected element contents with the specified content
 *
 * Parameter:
 * -content
 */
	
	$.fn.replaceWith = function(_content) {
		
		this.init(function() {
			
			if (_content) {
				this.outerHTML = _content;
			} else {
				throw new Error("Cannot replace element with null.");
			}
			
		});
		
		return this;
 	};
 