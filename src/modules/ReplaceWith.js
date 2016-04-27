/**
 * replaceWith()
 * 
 * Replaces the selected element contents with the specified content
 *
 * Parameter:
 * -content
 */
	
	$.fn.replaceWith = function(_content) {
		
		this.each(function() {
			if (_content) this.outerHTML = _content;
		});
		
		return this;
 	};
 