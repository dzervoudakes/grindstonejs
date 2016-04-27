/**
 * resize()
 * 
 * Captures the native "onresize" event and executes a function each time the event triggers
 * 
 * Parameter:
 * -callback
 */
	
	$.fn.resize = function(_callback) {
	
		this.each(function() {
			
			$(this).on("resize", function() {
				_callback();
			});
			
		});
		
		return this;
 	};
 