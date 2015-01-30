/**
 * wrapInner(structure)
 * 
 * Wraps the innerHTML of the selected element(s) within the specified structure
 *
 * Parameter:
 * -structure
 */
	
	$.fn.wrapInner = function(_structure){
		$.forEach(this.init,function(){
			if (_structure){
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
 