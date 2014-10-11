/* css()
 *
 * Adjusts the CSS styles of a selected element
 *
 * Parameter:
 * -new styles (to be programmed as an object which contains an unlimited number of style properties)
 */
	
	GS.css = function(newStyles){
		forEach(this.init,function(){
			if (newStyles){
				if (typeof newStyles === "object"){
					for (var j in newStyles){
						this.style[j] = newStyles[j];
					};
				} else {
					throw new Error("CSS styles parameter must be an object with key/value pairs.");
				}
			} else {
				throw new Error("CSS properties to edit are undefined.");
			}
		});
		return this;
	};