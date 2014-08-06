/* css()
 *
 * Adjusts the CSS styles of a selected element
 *
 * Parameter:
 * -new styles (to be programmed as an object which contains an unlimited number of style properties)
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.css = function(newStyles){
		var element = this.init;
		if (testParam(newStyles)){
			for (var i in newStyles){
				element.style[i] = newStyles[i];
			}
		} else {
			throw new Error("CSS properties to edit are undefined.");
		}
	}