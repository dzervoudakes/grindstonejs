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
		$.forEach(this.init,function(){
			$(this).evt("mouseover touchstart",function(e){
				$(this).addClass(hoverClass);
				e.preventDefault();
			}).evt("mouseleave touchend",function(e){
				$(this).removeClass(hoverClass + " " + activeClass).removeClass(hoverClass);
				e.preventDefault();
			}).evt("mousedown touchstart",function(e){
				$(this).addClass(activeClass);
				e.preventDefault();
			}).evt("mouseup touchend",function(e){
				$(this).removeClass(activeClass);
				e.preventDefault();
			});
		});
	};