/**
 * mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state (default)
 * Dynamically adds class "down" to elements as an active state (default)
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 * Developers may define their own hover/active classes with the optional "classes" object
 * 
 * Parameter:
 * -classes (object with properties "hoverClass" and "activeClass")
 */
	
	$.fn.mouseable = function(_classes) {
		
		var hoverClass, activeClass, evt_hover, evt_remove, evt_down, evt_up;
		
		if (_classes) {
			
			if (typeof _classes === "object") {
				
				hoverClass  = (_classes.hasOwnProperty("hoverClass"))  ? _classes["hoverClass"]  : "over";
				activeClass = (_classes.hasOwnProperty("activeClass")) ? _classes["activeClass"] : "down";
			
			} else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
			
		} else {
			hoverClass = "over";
			activeClass = "down";
		}
		
		evt_hover  = ("createTouch" in document) ? "touchstart" : "mouseenter";
		evt_remove = ("createTouch" in document) ? "touchend"   : "mouseleave";
		evt_down   = ("createTouch" in document) ? "touchstart" : "mousedown";
		evt_up     = ("createTouch" in document) ? "touchend"   : "mouseup mouseleave";
		
		this.init(function() {
			
			$(this)
				.on(evt_hover, function() {
					$(this).addClass(hoverClass);
				})
				.on(evt_remove, function() {
					$(this)
						.removeClass(hoverClass + " " + activeClass)
						.removeClass(hoverClass);
				})
				.on(evt_down, function() {
					$(this).addClass(activeClass);
				})
				.on(evt_up, function() {
					$(this).removeClass(activeClass);
				});
			
		});
	};
