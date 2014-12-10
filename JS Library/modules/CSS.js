/**
 * css()
 *
 * Adjusts the CSS styles of a selected element if an object is passed as the argument...
 * Returns the specified CSS value if a string is passed as the argument
 *
 * Parameter:
 * -styles (can be programmed as an object or a string)
 */
	
	$.fn.css = function(styles){
		var returnedStyle;
		$.forEach(this.init,function(){
			if (styles){
				if (typeof styles === "object"){
					for (var j in styles){
						this.style[j] = styles[j];
					}
				} else {
					returnedStyle = this.style[styles];
				}
			} else {
				throw new Error("CSS properties are undefined.");
			}
		});
		var toReturn = (typeof styles === "object") ? this : returnedStyle;
		return toReturn;
	};