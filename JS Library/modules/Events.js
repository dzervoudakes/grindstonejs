/* evt()
 * 
 * Custom event listener method
 *
 * Parameters:
 * -action (the event to handle: only accepts one event per function call)
 * -callback (the event handler)
 */
	
	$.gs.evt = function(action,callback){
		$.forEach(this.init,function(){
			if(action){
				if (typeof action === "string"){
					this.addEventListener(action,callback,false);
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event to handle is undefined.")
			}
		});
		return this;
 	};