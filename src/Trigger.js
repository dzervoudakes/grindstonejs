/**
 * trigger()
 * 
 * Dispatches custom event listeners
 * 
 * Parameter:
 * -event
 */
	
	$.fn.trigger = function(_event) {
			
		var customEvent = new Event(_event);
		
		this.init(function() {
			this.dispatchEvent(customEvent);
		});
		
		return this;
 	};
 