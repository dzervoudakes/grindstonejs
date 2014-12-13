/**
 * children()
 *
 * Returns the child nodes of the selected element
 */
	
	$.fn.children = function(){
		var children;
		$.forEach(this.init,function(){
			var children = this.childNodes;
		});
		return $(children);
	};