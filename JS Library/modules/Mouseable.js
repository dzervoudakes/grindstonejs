/* mouseable()
 *
 * Dynamically adds class "over" to elements as a hover state
 * Dynamically adds class "down" to elements as an active state
 * Removes the need for applicable CSS pseudo-states
 * Handles both standard mouse events and touch events
 */
	
	/*$.gs.mouseable = function(){
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
					$(this).removeClass("over down").removeClass("over");
				}).evt("mousedown",function(){
					$(this).addClass("down");
				}).evt("mouseup",function(){
					$(this).removeClass("down");
				});
			}
		});
		return this;
	};*/
	
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