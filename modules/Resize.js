/**
 * resize()
 * 
 * Captures the native "onresize" event and executes a function each time the event triggers
 * 
 * Parameter:
 * -callback
 */
	
	$.fn.resize = function(_callback){
		$.forEach(this.init,function(){
			$(this).evt("resize",function(){
				if(_callback){
					_callback();
				}
			});
		});
		return this;
 	};
