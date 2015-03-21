/**
 * wrapInner(structure)
 * 
 * Wraps the innerHTML of the selected element(s) within the specified structure
 *
 * Parameter:
 * -structure
 */
	
	$.fn.wrapInner = function(_structure) {
		
		var contents, wrap;
		
		this.init(function() {
			
			if (typeof _structure === "string") {
				
				contents = $(this).html();
				wrap = _structure;
				
				$(this).html(wrap + contents);
				
			} else {
				throw new Error("wrapInner structure must be specified as a string.");
			}
			
		});
		
		return this;
 	};
 