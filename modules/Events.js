/**
 * evt() / dropEvt()
 * 
 * Adding and removing event listeners
 *
 * Parameters:
 * -action (the event(s) to handle)
 * -callback (the event handler)
 */
	
	// Assign the eventListener
	//
	$.fn.evt = function(_action, _callback){
		$.forEach(this.init,function(){
			if (_action){
				if (typeof _action === "string"){
					var events = _action.split(" ");
					for (var j = 0; j < events.length; j++){
						this.addEventListener(events[j], _callback, false);
					}
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
	//
	$.fn.dropEvt = function(_action, _callback){
		$.forEach(this.init,function(){
			if (_action){
				if (typeof _action === "string"){
					var events = _action.split(" ");
					for (var j = 0; j < events.length; j++){
						this.removeEventListener(events[j], _callback, false);
					}
				} else {
					throw new Error("Type of event action must be a string.");
				}
			} else {
				throw new Error("Event handler to drop is undefined.");
			}
		});
		return this;
	};
