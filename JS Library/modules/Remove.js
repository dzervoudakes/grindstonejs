/* remove()
 *
 * Appends the specified child element from the current object
 *
 * Parameter:
 * -removeElement
 */
	
	$.gs.remove = function(removeElement){
		$.forEach(this.init,function(){
			if (removeElement){
				this.removeChild(removeElement);
			} else {
				throw new Error("Cannot remove undefined element.");
			}
		});
		return this;
	};