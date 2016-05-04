/**
 * Create hover and active states
 * @param {object} classes - hoverClass => value, activeClass => value, optional
 * @returns {object} current instance of Grindstone
 */

	$.fn.mouseable = function(classes) {
		
		var hoverClass, activeClass;
		
		if (classes) {
			if (typeof classes === "object") {
				hoverClass  = (classes.hasOwnProperty("hoverClass"))  ? classes["hoverClass"]  : "over";
				activeClass = (classes.hasOwnProperty("activeClass")) ? classes["activeClass"] : "down";
			} else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
		} else {
			hoverClass  = "over";
			activeClass = "down";
		}
		
		function createInteraction(touchEvt, mouseEvt) {
			return ("ontouchend" in d) ? touchEvt : mouseEvt;
		};
		
		var events = {
			hover:  createInteraction("touchstart", "mouseenter"),
			remove: createInteraction("touchend", "mouseleave"),
			down:   createInteraction("touchstart", "mousedown"),
			up: 	createInteraction("touchend", "mouseup mouseleave")
		};
		
		this.each(function() {
			
			$(this)
				.on(events.hover, function() {
					$(this).addClass(hoverClass);
				})
				.on(events.remove, function() {
					$(this).removeClass(hoverClass)
				})
				.on(events.down, function() {
					$(this).addClass(activeClass);
				})
				.on(events.up, function() {
					$(this).removeClass(activeClass);
				});
		});
		
		return this;
	};
