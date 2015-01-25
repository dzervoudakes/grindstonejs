/**
 * css()
 *
 * Adjusts the CSS styles of a selected element if an object is passed as the argument
 * Returns the specified CSS value if a string is passed as the argument
 *
 * Parameter:
 * -styles (can be programmed as an object or a string)
 */
	
	$.fn.css = function(_styles){
		var returnedStyle;
		$.forEach(this.init,function(){
			if (_styles){
				if (typeof _styles === "object"){
					for (var j in _styles){
						this.style[j] = _styles[j];
					}
				} else {
					returnedStyle = this.style[_styles];
				}
			} else {
				throw new Error("CSS properties are undefined.");
			}
		});
		var toReturn = (typeof _styles === "object") ? this : returnedStyle;
		return toReturn;
	};