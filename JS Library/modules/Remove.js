/**
 * remove()
 *
 * Appends the specified child element from the current object if the target is specified
 * If no target is specified, the parent of the current node will remove the node from the DOM
 *
 * Parameter: (optional)
 * -target
 */
	
	$.fn.remove = function(_target){
		if (_target){
			var elems = document.querySelectorAll(_target),
				parents = this.init;
			for (var j = 0; j < parents.length; j++){
				$.forEach(elems,function(){
					parents[j].removeChild(this);
				});
			}
		} else {
			$.forEach(this.init,function(){
				this.parentNode.removeChild(this);
			});
		}
		return this;
	};