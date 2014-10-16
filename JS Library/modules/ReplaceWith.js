/* replaceWith()
 * 
 * Replaces the selected element contents with the specified content
 *
 * Parameter:
 * -cnt (the new content)
 */
	
	$.gs.replaceWith = function(cnt){
		$.forEach(this.init,function(){
			if(cnt){
				this.outerHTML = cnt;
			} else {
				throw new Error("Cannot replace element with null.");
			}
		});
		return this;
 	};