/**
 * wrapInner(structure)
 * 
 * Wraps the innerHTML of the selected element(s) with the specified structure
 *
 * Parameter:
 * -structure (new HTML structure to wrap the selected content in)
 */
	
	$.fn.wrapInner = function(_structure){
		$.forEach(this.init,function(){
			if(_structure){
				if (typeof _structure === "string"){
					var contents = $(this).html(),
						wrap = _structure;
					$(this).html(wrap + contents);
				} else {
					throw new Error("wrapInner structure must be specified as a string.");
				}
			} else {
				throw new Error("Cannot wrap the innerHTML of the selected element with null.");
			}
		});
		return this;
 	};