/**
 * doubleTap()
 * 
 * Custom double-tapping/double-clicking method
 *
 * Parameter:
 * -callback (triggered if the double-click/double-tap event is completed in time)
 */
	
	$.fn.doubleTap = function(_callback){
		$.forEach(this.init,function(){
			var active = false,
				interaction = ("createTouch" in document) ? "touchend" : "click";
			if(_callback){
				$(this).evt(interaction,function(){
					if (active){
						_callback();
						active = false;
					}
					active = true;
					setTimeout(function(){
						active = false;
					},360);
				});
			} else {
				throw new Error("Double-tap/double-click callback is undefined.");
			}
		});
		return this;
 	};