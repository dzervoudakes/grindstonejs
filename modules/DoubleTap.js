/**
 * doubleTap()
 * 
 * Custom double-tapping/double-clicking method
 *
 * Parameter:
 * -callback (triggered if the double-click/double-tap event is completed in time)
 */
	
	$.fn.doubleTap = function(_callback){
		
		var active, interaction;
		
		this.init(function(){
			
			active = false;
			interaction = ("createTouch" in document) ? "touchend" : "click";
			
			if (_callback){
				
				$(this).on(interaction,function(){
					
					if (active){
						_callback();
						return active = false;
					}
					
					active = true;
					
					setTimeout(function(){
						return active = false;
					}, 350);
					
				});
				
			} else {
				throw new Error("Double-tap/double-click callback is undefined.");
			}
		});
		
		return this;
 	};
 