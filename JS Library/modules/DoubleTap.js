/**
 * doubleTap()
 * 
 * Custom double-tapping and double-clicking methods
 *
 * Parameter:
 * -callback (triggered if the double-click/tap event is completed in time)
 */
	
	$.fn.doubleTap = function(_callback){
		$.forEach(this.init,function(){
			var active = false,
				interaction = ("createTouch" in document) ? "touchstart" : "click";
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