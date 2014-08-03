/* show() / hide()
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameter: (optional)
 * -timer
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.show = function(timer){
		var element = this.init;
		if (testParam(timer)){
			setTimeout(function(){
				element.style.display = "block";
				return this;
			},timer);
		} else {
			element.style.display = "block";
			return this;
		}
	};
	
	Grindstone.prototype.hide = function(timer){
		var element = this.init;
		if (testParam(timer)){
			setTimeout(function(){
				element.style.display = "none";
				return this;
			},timer);
		} else {
			element.style.display = "none";
			return this;
		}
	};