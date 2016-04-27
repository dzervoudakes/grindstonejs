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
		
		this.each(function() {
			this.dispatchEvent(customEvent);
		});
		
		return this;
 	};
 