/**
 * remove()
 *
 * Appends the specified child element from the current object
 *
 * Parameter:
 * -removeElement
 */
	
	$.fn.remove = function(removeElement){
		if (removeElement){
			var elems = document.querySelectorAll(removeElement),
				parents = this.init;
			for (var j = 0; j < parents.length; j++){
				$.forEach(elems,function(){
					parents[j].removeChild(this);
				});
			}
		} else {
			throw new Error("Cannot remove undefined element.");
		}
		return this;
	};