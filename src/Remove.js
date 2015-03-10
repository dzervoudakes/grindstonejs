/**
 * remove()
 *
 * Appends the specified child element from the current object if the target is specified
 * If no target is specified, the parent of the current node will remove the node from the DOM
 *
 * Parameter: (optional)
 * -target
 */
	
	$.fn.remove = function(_target) {
		
		var elems, parents, i;
		
		if (_target) {
			
			elems = document.querySelectorAll(_target);
			parents = this.set;
			
			for (i = 0; i < parents.length; i++) {
				$.forEach(elems,function() {
					parents[i].removeChild(this);
				});
			}
			
		} else {
			
			$.forEach(this.set, function() {
				this.parentNode.removeChild(this);
			});
			
		}
		
		return this;
	};
