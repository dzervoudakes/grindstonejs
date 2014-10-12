/* mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state
 * Dynamically adds class "down" to elements as an active state
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 */
	
	$.gs.mouseable = function(){
		$.forEach(this.init,function(){
			$(this).evt("mouseover touchstart",function(e){
				$(this).addClass("over");
				e.preventDefault();
			}).evt("mouseleave touchend",function(e){
				$(this).removeClass("over down").removeClass("over");
				e.preventDefault();
			}).evt("mousedown touchstart",function(e){
				$(this).addClass("down");
				e.preventDefault();
			}).evt("mouseup touchend",function(e){
				$(this).removeClass("down");
				e.preventDefault();
			});
		});
		return this;
	};
