/* evt() / dropEvt()
 * 
 * Adding and removing event listeners
 *
 * Parameters:
 * -action (the event to handle: only accepts one event per function call)
 * -callback (the event handler)
 */
	
	// Assign the eventListener
	
	$.fn.evt = function(action,callback){
		$.forEach(this.init,function(){
			if(action){
				if (typeof action === "string"){
					var events = action.split(" ");
					for (var j = 0; j < events.length; j++){
						this.addEventListener(events[j],callback,false);
					};
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event to handle is undefined.");
			}
		});
		return this;
 	};
	
	// Drop the eventListener
	
	$.fn.dropEvt = function(action,callback){
		$.forEach(this.init,function(){
			if (action){
				if (typeof action === "string"){
					var events = action.split(" ");
					for (var j = 0; j < events.length; j++){
						this.removeEventListener(events[j],callback,false);
					};
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event handler to drop is undefined.");
			}
		});
		return this;
	};