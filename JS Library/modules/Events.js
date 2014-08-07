/* evt()
 * 
 * Custom event listener method
 *
 * Parameters:
 * -action (the event to handle: only accepts one event per function call)
 * -fn (the event handler)
 *
 * Requires:
 * -Core.js
 */
	
	Grindstone.prototype.evt = function(action,fn){
		var results = this.init;
		if (results.length > 1){
			for (var i = 0; i < results.length; i++){
				var element = results[i];
				if(testParam(action)){
					if (typeof action === "string"){
						if (document.addEventListener){ // Modern browsers
							element.addEventListener(action,fn);
						} else if (document.attachEvent){ // IE 8 and below
							element.attachEvent("on" + action,fn);
						}
					} else {
						throw new Error("Type of event action must be a string.");
					}
				} else {
					throw new Error("Event to handle is undefined.")
				}
			};
			return this;
		} else {
			var element = results;
			if(testParam(action)){
				if (typeof action === "string"){
					if (document.addEventListener){ // Modern browsers
						element.addEventListener(action,fn);
					} else if (document.attachEvent){ // IE 8 and below
						element.attachEvent("on" + action,fn);
					}
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event to handle is undefined.")
			}
			return this;
		}
 	};