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
		
		var elems, parents, i, j;
		
		if (_target) {
			
			elems = document.querySelectorAll(_target);
			parents = this.set;
			
			for (i = 0; i < parents.length; i++) {
				for (j = 0; j < elems.length; j++) {
					parents[i].removeChild(elems[j]);
				}
			}
			
		}
		
		else {
			for (i = 0; i < this.set.length; i++) {
				this.set[i].parentNode.removeChild(this.set[i]);
			}
		}
		
		return this;
	};
