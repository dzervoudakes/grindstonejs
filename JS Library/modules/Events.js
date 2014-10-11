/* evt()
 * 
 * Custom event listener method
 *
 * Parameters:
 * -action (the event to handle: only accepts one event per function call)
 * -callback (the event handler)
 */
	
	GS.evt = function(action,callback){
		var results = this.init;
		for (var i = 0; i < results.length; i++){
			var element = results[i];
			if(testParam(action)){
				if (typeof action === "string"){
					element.addEventListener(action,callback);
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event to handle is undefined.")
			}
		};
		return this;
 	};