/**
 * trigger()
 * 
 * Dispatches custom event listeners
 * 
 * Parameter:
 * -event
 */
	
	$.fn.trigger = function(_event){
		
		if (_event){
			
			var customEvent = new Event(_event);
			
			this.init(function(){
				this.dispatchEvent(customEvent);
			});
			
		} else {
			throw new Error("Cannot trigger undefined event.");
		}
		
		return this;
 	};
 