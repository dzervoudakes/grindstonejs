/**
 * trigger()
 * 
 * Dispatches custom event listeners
 * 
 * Parameter:
 * -event
 */
	
	$.fn.trigger = function(_event) {
		
		var customEvent;
		
		if (_event) {
			
			customEvent = new Event(_event);
			
			this.init(function() {
				this.dispatchEvent(customEvent);
			});
			
		} else {
			throw new Error("Cannot trigger undefined event.");
		}
		
		return this;
 	};
 