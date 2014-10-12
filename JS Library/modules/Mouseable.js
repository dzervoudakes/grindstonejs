/* mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state
 * Dynamically adds class "down" to elements as an active state
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 */
	
	$.gs.mouseable = function(){
		$.forEach(this.init,function(){
			if ("createTouch" in document){
				$(this).evt("touchstart",function(){
					$(this).addClass("over down");
				}).evt("touchend",function(){
					$(this).removeClass("over down");
				});
			} else {
				$(this).evt("mouseover",function(){
					$(this).addClass("over");
				}).evt("mouseleave",function(){
					$(this).removeClass("over down");
					$(this).removeClass("over");
				}).evt("mousedown",function(){
					$(this).addClass("down");
				}).evt("mouseup",function(){
					$(this).removeClass("down");
				});
			}
		});
		return this;
	};