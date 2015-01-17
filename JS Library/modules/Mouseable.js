/**
 * mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state (default)
 * Dynamically adds class "down" to elements as an active state (default)
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 * 
 * Parameter:
 * -classes (an object users may program to create their own "hover" and "active" classes - accepts properties "hoverClass" and "activeClass")
 */
	
	$.fn.mouseable = function(classes){
		var hoverClass,
			activeClass;
		if (classes){
			if (typeof classes === "object"){
				hoverClass = (classes.hasOwnProperty("hoverClass")) ? classes["hoverClass"] : "over";
				activeClass = (classes.hasOwnProperty("activeClass")) ? classes["activeClass"] : "down";
			} else {
				throw new Error("Classes parameter for mouseable() must be an object with properties 'hoverClass' and/or 'activeClass'.");
			}
		} else {
			hoverClass = "over";
			activeClass = "down";
		}
		var evt_hover  = ("createTouch" in document) ? "touchstart" : "mouseover",
			evt_remove = ("createTouch" in document) ? "touchend"   : "mouseleave",
			evt_down   = ("createTouch" in document) ? "touchstart" : "mousedown",
			evt_up     = ("createTouch" in document) ? "touchend"   : "mouseup mouseleave";
		$.forEach(this.init,function(){
			$(this).evt(evt_hover,function(){
				$(this).addClass(hoverClass);
			})
			.evt(evt_remove,function(){
				$(this).removeClass(hoverClass + " " + activeClass).removeClass(hoverClass);
			})
			.evt(evt_down,function(){
				$(this).addClass(activeClass);
			})
			.evt(evt_up,function(){
				$(this).removeClass(activeClass);
			});
		});
	};