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
		var results = this.init;
		if (results.length > 1){
			for (var i = 0; i < results.length; i++){
				var element = results[i];
				if (testParam(timer)){
					setTimeout(function(){
						element.style.display = "block";
					},timer);
				} else {
					element.style.display = "block";
				}
			};
			return this;
		} else {
			var element = results;
			if (testParam(timer)){
				setTimeout(function(){
					element.style.display = "block";
				},timer);
			} else {
				element.style.display = "block";
			}
			return this;
		}
	};
	
	Grindstone.prototype.hide = function(timer){
		var results = this.init;
		if (results.length > 1){
			for (var i = 0; i < results.length; i++){
				var element = results[i];
				if (testParam(timer)){
					setTimeout(function(){
						element.style.display = "none";
					},timer);
				} else {
					element.style.display = "none";
				}
			};
			return this;
		} else {
			var element = results;
			if (testParam(timer)){
				setTimeout(function(){
					element.style.display = "none";
				},timer);
			} else {
				element.style.display = "none";
			}
			return this;
		}
	};