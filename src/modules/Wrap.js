/**
 * wrap() / wrapInner()
 * 
 * Wraps the outer/innerHTML of the selected element(s) within the specified structure
 *
 * Parameter:
 * -structure
 */
	
	$.fn.wrap = function(_structure) {
		
		var contents, wrap;
		
		this.each(function() {
			
			if (typeof _structure === "string") {
				
				contents = this.outerHTML;
				wrap = _structure;
				
				this.outerHTML = wrap + contents;
				
			}
			
			else {
				throw new Error("wrap() structure must be specified as a string.");
			}
			
		});
		
		return this;
 	};
	
	$.fn.wrapInner = function(_structure) {
		
		var contents, wrap;
		
		this.each(function() {
			
			if (typeof _structure === "string") {
				
				contents = $(this).html();
				wrap = _structure;
				
				$(this).html(wrap + contents);
				
			}
			
			else {
				throw new Error("wrapInner() structure must be specified as a string.");
			}
			
		});
		
		return this;
 	};
 