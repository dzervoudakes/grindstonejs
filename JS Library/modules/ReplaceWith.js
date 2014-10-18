/* replaceWith()
 * 
 * Replaces the selected element contents with the specified content
 *
 * Parameter:
 * -content (the new content)
 */
	
	$.gs.replaceWith = function(content){
		$.forEach(this.init,function(){
			if(content){
				this.outerHTML = content;
			} else {
				throw new Error("Cannot replace element with null.");
			}
		});
		return this;
 	};